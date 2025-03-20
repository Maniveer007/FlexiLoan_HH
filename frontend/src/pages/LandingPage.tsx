import React, { useState } from "react";
import { Terminal, Zap, ArrowRight, AlertTriangle, Coins } from "lucide-react";
import { ConnectButton } from '@rainbow-me/rainbowkit';

function LandingPage() {
  const [isHovered, setIsHovered] = useState(false);
  const [isDocsHovered, setIsDocsHovered] = useState(false);

  return (
    <div className="min-h-screen bg-black text-green-500 p-8">
      <div className="max-w-6xl mx-auto relative">
        <div className="flex justify-between items-center mb-8">
          <div className="flex-1 text-left">
            <pre
              className={`h-[80px] flex items-center text-4xl md:text-5xl font-extrabold transition-all duration-500 ${
                isHovered ? "text-purple-500 scale-105" : "text-green-500"
              }`}
              style={{ fontFamily: `Courier New, Courier, monospace` }}
              onMouseEnter={() => setIsHovered(true)}
              onMouseLeave={() => setIsHovered(false)}
            >
              FlexiLoan
            </pre>
          </div>
          <div className="flex items-center gap-8">
            <a
              href="/docs"
              className={`font-mono text-lg transition-all duration-300 ${
                isDocsHovered
                  ? "scale-110 text-purple-500 rotate-3 shadow-lg shadow-purple-500/20"
                  : "text-green-500"
              }`}
              onMouseEnter={() => setIsDocsHovered(true)}
              onMouseLeave={() => setIsDocsHovered(false)}
            >
              [docs]
            </a>
            <ConnectButton chainStatus="icon" />
          </div>
        </div>

        <div className="mt-12 space-y-8">
          <div className="flex items-center space-x-4">
            <Terminal className="w-8 h-8" />
            <h2 className="text-2xl font-bold">Built on Core</h2>
          </div>

          <div className="bg-gray-900 p-6 rounded-lg border border-green-500 transition-all duration-300 hover:border-purple-500 hover:shadow-lg hover:shadow-purple-500/20">
            <h1 className="text-4xl font-bold mb-6">
              BTC Derivatives DeFi Protocol
            </h1>
            <p className="text-xl mb-8">
              Earn passive rewards by simply holding Bitcoin derivatives in your wallet. 
              We're revolutionizing how you interact with BTC in the DeFi space.
            </p>
            <div className="flex items-center space-x-4">
              <Zap className="w-6 h-6 animate-pulse" />
              <p className="text-lg">
                Bitcoin Derivatives • Passive Rewards • Maximum Flexibility
              </p>
            </div>
          </div>

          <a
            href="/pools"
            className="group flex items-center space-x-2 bg-green-500 text-black px-8 py-4 rounded-lg hover:bg-green-400 transition-all duration-300 w-fit"
          >
            <span>Explore BTC Pools</span>
            <ArrowRight className="w-5 h-5 group-hover:translate-x-2 transition-transform duration-300" />
          </a>
        </div>

        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-gray-900 p-6 rounded-lg border border-green-500">
            <h3 className="text-xl font-bold mb-4">BTC Derivatives</h3>
            <p>
              Access Bitcoin's potential through our innovative derivative products on Core.
            </p>
          </div>
          <div className="bg-gray-900 p-6 rounded-lg border border-green-500">
            <h3 className="text-xl font-bold mb-4">Passive Rewards</h3>
            <p>
              Earn continuous BTC-based rewards just by holding assets in your wallet.
            </p>
          </div>
          <div className="bg-gray-900 p-6 rounded-lg border border-green-500">
            <h3 className="text-xl font-bold mb-4">Liquidity Solutions</h3>
            <p>
              Seamlessly access liquidity while maintaining exposure to Bitcoin markets.
            </p>
          </div>
        </div>

        {/* BTC Focus Highlight */}
        <div className="bg-gray-900 p-6 rounded-lg border border-yellow-500 mt-8">
          <div className="flex items-center space-x-4 mb-4">
            <Coins className="w-8 h-8 text-yellow-500" />
            <h3 className="text-xl font-bold text-yellow-500">Bitcoin-Focused DeFi</h3>
          </div>
          <p className="text-gray-300">
            Our protocol specializes in Bitcoin derivatives, allowing you to maintain 
            exposure to BTC while accessing DeFi functionalities on the Core network.
            Hold your funds and watch your rewards grow automatically.
          </p>
        </div>

        {/* Alpha Stage Disclaimer */}
        <div className="bg-yellow-900/30 border border-yellow-500 text-yellow-300 p-4 rounded-lg mt-8 flex items-center space-x-4">
          <AlertTriangle className="w-8 h-8 text-yellow-500" />
          <div>
            <h3 className="font-bold text-lg mb-2">Alpha Release Notice</h3>
            <p className="text-sm">
              FlexiLoan is currently in its alpha development phase. While we're
              excited to share our innovative BTC derivatives protocol, please be aware
              that:
              <ul className="list-disc list-inside mt-2 space-y-1">
                <li>Features may be subject to changes and improvements</li>
                <li>
                  Potential stability and performance variations are expected
                </li>
              </ul>
            </p>
            <p className="mt-2 text-xs italic">
              Use with caution and at your own discretion.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LandingPage;