import { useEffect, useState } from "react";
import { abi } from "../abi/flashloanAbi";
import { usePublicClient, useAccount, useWalletClient } from 'wagmi';

export interface Pool {
  chainId: number;
  chainUrl: string;
  PoolName: string;
  tokenName : string;
  contractAddress: `0x${string}`;
  tokenAddress : `0x${string}`
  decimals: number;
  totalLPs: number;
  currentEpoch: number;
  totalLiquidity: string;
}

const INITIAL_POOLS: Pool[] = [
  {
    chainId: 1115,
    chainUrl: "https://s2.coinmarketcap.com/static/img/coins/64x64/23254.png",
    PoolName: "USDC Pool",
    tokenName: "USDC",
    contractAddress: "0x3f52E4c6393c81ECE389adb3Eb614395f593C834" as `0x{string}`, 
    tokenAddress : "0x7D5d7cE0Bdc2ED8e24f473c6E17ACD7791220405",
    decimals: 18,
    totalLPs: 0,
    currentEpoch: 0,
    totalLiquidity: "0",
  }
];

// Hook to get a specific pool
export function useSpecificPool(chainId?: number, name?: string) {
  const [pool, setPool] = useState<Pool | null>(null);
  const [upcommingLPs, setUpcommingLPs] = useState<any[]>([]);
  const publicClient = usePublicClient({chainId});
  const { address } = useAccount();

  useEffect(() => {
    const run = async () => {
      const foundPool = INITIAL_POOLS.find(
        (p) => p.chainId === chainId && p.PoolName === name
      );
      
      if (foundPool) {
        const queueData = await publicClient?.readContract({
          address: foundPool.contractAddress,
          abi: abi,
          functionName: 'getCircularQueue',
        }) as any[];
        
        setUpcommingLPs(queueData || []);

        const currentEpoch = await publicClient?.readContract({
          address: foundPool.contractAddress,
          abi: abi,
          functionName: 'currentEpochId',
        });

        const totalLiquidity = await publicClient?.readContract({
          address: foundPool.contractAddress,
          abi: abi,
          functionName: 'getTotalLiquidity',
        });

        setPool({
          ...foundPool,
          totalLPs: Array.isArray(queueData) ? queueData.length : 0,
          currentEpoch: Number(currentEpoch || 0),
          totalLiquidity: totalLiquidity?.toString() || "0"
        });
      }
    };

    run();
    const intervalId = setInterval(run, 30000);
    return () => clearInterval(intervalId);
  }, [chainId, name, publicClient]);

  return { pool, upcommingLPs };
}

// Hook to get all pools
export function useAllPools() {
  const [pools, setPools] = useState<Pool[]>(INITIAL_POOLS);

    const run = async () => {
      const updatedPools = await Promise.all(
        INITIAL_POOLS.map(async (pool) => {
          const publicClient = usePublicClient({chainId:pool.chainId});
          console.log("pool",pool.contractAddress)
          try {
            const totalLPs = await publicClient?.readContract({
              address: pool.contractAddress,
              abi: abi,
              functionName: 'getQueue',
            });

            const currentEpoch = await publicClient?.readContract({
              address: pool.contractAddress,
              abi: abi,
              functionName: 'currentEpochId',
            });

            const totalLiquidity = await publicClient?.readContract({
              address: pool.contractAddress,
              abi: abi,
              functionName: 'getTotalLiquidity',
            });

              console.log(totalLPs)
            return {
              ...pool,
              totalLPs: Array.isArray(totalLPs) ? totalLPs.length : 0,
              currentEpoch: Number(currentEpoch || 0),
              totalLiquidity: totalLiquidity?.toString() || "0"
            };
          } catch (error) {
            // console.error(`Error fetching data for pool ${pool.name}:`, error);
            return pool;
          }
        })
      );
      setPools(updatedPools);
    };
    run();
  return { pools };
}





