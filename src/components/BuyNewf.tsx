import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaTimes, FaEthereum } from 'react-icons/fa';
import { SiCoinbase } from 'react-icons/si';

interface WalletPopupProps {
  isOpen: boolean;
  onClose: () => void;
  onWalletSelect: (walletType: 'metamask' | 'coinbase') => void;
}

export const WalletPopup: React.FC<WalletPopupProps> = ({ isOpen, onClose, onWalletSelect }) => {
  const handleMetaMaskConnect = async () => {
    if (window.ethereum) {
      try {
        // Request account access
        await window.ethereum.request({ method: 'eth_requestAccounts' });
        
        // Check if we're on Polygon network (chainId: 0x89)
        const chainId = await window.ethereum.request({ method: 'eth_chainId' });
        
        if (chainId !== '0x89') {
          // Prompt user to switch to Polygon
          try {
            await window.ethereum.request({
              method: 'wallet_switchEthereumChain',
              params: [{ chainId: '0x89' }],
            });
          } catch (switchError: any) {
            // If the chain hasn't been added to MetaMask
            if (switchError.code === 4902) {
              try {
                await window.ethereum.request({
                  method: 'wallet_addEthereumChain',
                  params: [{
                    chainId: '0x89',
                    chainName: 'Polygon Mainnet',
                    nativeCurrency: {
                      name: 'MATIC',
                      symbol: 'MATIC',
                      decimals: 18
                    },
                    rpcUrls: ['https://polygon-rpc.com/'],
                    blockExplorerUrls: ['https://polygonscan.com/']
                  }],
                });
              } catch (addError) {
                console.error('Error adding Polygon network:', addError);
              }
            }
          }
        }
        
        onWalletSelect('metamask');
        onClose();
      } catch (error) {
        console.error('Error connecting to MetaMask:', error);
      }
    } else {
      window.open('https://metamask.io/download/', '_blank');
    }
  };

  const handleCoinbaseConnect = async () => {
    // Implementation for Coinbase Wallet connection would go here
    onWalletSelect('coinbase');
    onClose();
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center px-4">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/60 backdrop-blur-sm"
            onClick={onClose}
          />
          
          <motion.div
            initial={{ scale: 0.95, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.95, opacity: 0 }}
            className="relative w-full max-w-md rounded-2xl bg-[#14121f] p-6 shadow-[0_0_30px_rgba(10,218,255,0.2)]"
          >
            {/* Close Button */}
            <button
              onClick={onClose}
              className="absolute right-4 top-4 text-white/60 hover:text-white transition-colors"
            >
              <FaTimes className="h-5 w-5" />
            </button>

            {/* Content */}
            <div className="text-center mb-8">
              <h2 className="font-trend text-white text-2xl font-black mb-2">
                Connect Wallet
              </h2>
              <p className="text-white/60">
                Connect your wallet to buy St. Newfie tokens
              </p>
            </div>

            {/* Wallet Options */}
            <div className="space-y-4">
              <button
                onClick={handleMetaMaskConnect}
                className="flex w-full items-center justify-between rounded-xl bg-black/20 p-4
                         border border-white/10 hover:border-[#0ADAFF]/50
                         hover:shadow-[0_0_20px_rgba(10,218,255,0.2)]
                         transition-all duration-300"
              >
                <div className="flex items-center gap-4">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[#F6851B]/10">
                    <FaEthereum className="h-6 w-6 text-[#F6851B]" />
                  </div>
                  <div className="text-left">
                    <div className="text-white font-bold">MetaMask</div>
                    <div className="text-white/60 text-sm">Connect using browser wallet</div>
                  </div>
                </div>
              </button>

              <button
                onClick={handleCoinbaseConnect}
                className="flex w-full items-center justify-between rounded-xl bg-black/20 p-4
                         border border-white/10 hover:border-[#0ADAFF]/50
                         hover:shadow-[0_0_20px_rgba(10,218,255,0.2)]
                         transition-all duration-300"
              >
                <div className="flex items-center gap-4">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[#0052FF]/10">
                    <SiCoinbase className="h-6 w-6 text-[#0052FF]" />
                  </div>
                  <div className="text-left">
                    <div className="text-white font-bold">Coinbase Wallet</div>
                    <div className="text-white/60 text-sm">Connect using Coinbase Wallet</div>
                  </div>
                </div>
              </button>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};

const BuyNewf = () => {
  const [isPopupOpen, setIsPopupOpen] = useState(false);

  const handleWalletSelect = (walletType: 'metamask' | 'coinbase') => {
    console.log(`Selected wallet: ${walletType}`);
    // Add wallet connection logic here
  };

  return (
    <WalletPopup
      isOpen={isPopupOpen}
      onClose={() => setIsPopupOpen(false)}
      onWalletSelect={handleWalletSelect}
    />
  );
};

export default BuyNewf;