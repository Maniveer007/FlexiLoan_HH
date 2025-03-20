import { getDefaultConfig } from '@rainbow-me/rainbowkit';
import { arbitrum, base, mainnet, optimism, polygon, sepolia } from 'wagmi/chains';
const coreDaoTestnet2 = {
  id: 1115,
  name: "Core Blockchain Testnet2",
  iconUrl: "https://s2.coinmarketcap.com/static/img/coins/64x64/23254.png",
  nativeCurrency: { name: "TCORE", symbol: "tCore", decimals: 18 },
  rpcUrls: {
    default: { http: ["https://rpc.test.btcs.network"] },
  },
  blockExplorers: {
    default: {
      name: "Core Blockchain Testnet2",
      url: "https://scan.test2.btcs.network/",
    },
  },
};

export const config = getDefaultConfig({
  appName: 'RainbowKit demo',
  projectId: 'YOUR_PROJECT_ID',
  chains: [coreDaoTestnet2],
});
