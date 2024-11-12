import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaTimes, FaEthereum } from 'react-icons/fa';
import { SiCoinbase } from 'react-icons/si';
import  CoinbaseWalletSDK  from '@coinbase/wallet-sdk';
import Web3 from 'web3';

interface WalletPopupProps {
  isOpen: boolean;
  onClose: () => void;
  onWalletSelect: (walletType: 'metamask' | 'coinbase', address: string) => void;
}
const APP_NAME = 'MyApp';
const APP_LOGO_URL = 'https://example.com/logo.png';
const DEFAULT_ETH_JSONRPC_URL = 'https://mainnet.infura.io/v3/YOUR_INFURA_KEY';
const POLYGON_CHAIN_ID = '0x89';
const APP_SUPPORTED_CHAIN_IDS = [8453, 84532, 137]; // Base, Base Sepolia, Polygon

export const WalletPopup: React.FC<WalletPopupProps> = ({ isOpen, onClose, onWalletSelect }) => {
  const handleMetaMaskConnect = async () => {
    if (window.ethereum) {
      try {
        const accounts = await window.ethereum.request({ method: 'eth_requestAccounts' });
        const walletAddress = accounts[0];

        const chainId = await window.ethereum.request({ method: 'eth_chainId' });
        if (chainId !== '0x89') {
          await switchToPolygon(window.ethereum);
        }

        onWalletSelect('metamask', walletAddress);
        localStorage.setItem('walletType', 'metamask');
        localStorage.setItem('walletAddress',walletAddress);
        onClose();
      } catch (error) {
        console.error('Error connecting to MetaMask:', error);
      }
    } else {
      window.open('https://metamask.io/download/', '_blank');
    }
  };

  const handleCoinbaseConnect = async () => {

    // Initialize Coinbase Wallet SDK with correct type
    const coinbaseWallet = new CoinbaseWalletSDK({
      appName: APP_NAME,
      appLogoUrl: APP_LOGO_URL,
      appChainIds:APP_SUPPORTED_CHAIN_IDS,
      
    
    });

    // Create Web3 Provider
    const ethereum = coinbaseWallet.makeWeb3Provider();
    const web3 = new Web3(ethereum as any);

    try {
      // Request account access
      const accounts = await ethereum.request({ 
        method: 'eth_requestAccounts' 
      }) as string[];
      console.log({accounts});
      const walletAddress = accounts[0];
      console.log({ walletAddress });
      web3.eth.defaultAccount = walletAddress;

      // Check and switch to Polygon if needed
      const chainId = await ethereum.request({ method: 'eth_chainId' });
      if (chainId !== POLYGON_CHAIN_ID) {
        await switchToPolygon(ethereum);
      }

      onWalletSelect('coinbase', walletAddress);
      localStorage.setItem('walletType', 'coinbase');
        localStorage.setItem('walletAddress',walletAddress);
      onClose();
    } catch (error) {
      console.error('Error connecting to Coinbase Wallet:', error);
    }
  };

  const switchToPolygon = async (provider: any) => {
    try {
      await provider.request({
        method: 'wallet_switchEthereumChain',
        params: [{ chainId: POLYGON_CHAIN_ID }],
      });
    } catch (switchError: any) {
      if (switchError.code === 4902) {
        try {
          await provider.request({
            method: 'wallet_addEthereumChain',
            params: [
              {
                chainId: POLYGON_CHAIN_ID,
                chainName: 'Polygon Mainnet',
                nativeCurrency: { 
                  name: 'MATIC', 
                  symbol: 'MATIC', 
                  decimals: 18 
                },
                rpcUrls: ['https://polygon-rpc.com/'],
                blockExplorerUrls: ['https://polygonscan.com/'],
              },
            ],
          });
        } catch (addError) {
          console.error('Error adding Polygon network:', addError);
        }
      }
    }
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
            <button
              onClick={onClose}
              className="absolute right-4 top-4 text-white/60 hover:text-white transition-colors"
            >
              <FaTimes className="h-5 w-5" />
            </button>

            <div className="text-center mb-8">
              <h2 className="font-trend text-white text-2xl font-black mb-2">
                Connect Wallet
              </h2>
              <p className="text-white/60">
                Connect your wallet to buy St. Newfie tokens
              </p>
            </div>

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

  const handleWalletSelect = (walletType: 'metamask' | 'coinbase', address: string) => {
    console.log(`Selected wallet: ${walletType}`);
    console.log(`Wallet address: ${address}`);
    // Add your smart contract interaction logic here using the wallet address
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