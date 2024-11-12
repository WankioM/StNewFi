import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { HiMenu, HiX } from "react-icons/hi";
import { FaWallet } from "react-icons/fa";
import { WalletPopup } from "./BuyNewf";

const Header = () => {
  const navigate = useNavigate();
  const [isWalletPopupOpen, setIsWalletPopupOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [walletInfo, setWalletInfo] = useState({
    isConnected: false,
    address: "",
    type: "" as "metamask" | "coinbase" | ""
  });
// Initialize from localStorage on mount
useEffect(() => {
  const savedWalletType = localStorage.getItem('walletType') as "metamask" | "coinbase" | "" ;
  const savedAddress = localStorage.getItem('walletAddress');
  
  if (savedWalletType && savedAddress) {
    handleWalletSelect(savedWalletType,savedAddress)
  }
}, []);
  // Function to shorten wallet address
  const shortenAddress = (address: string) => {
    if (!address) return "";
    return `${address.slice(0, 6)}...${address.slice(-4)}`;
  };

  const handleWalletSelect = (walletType: 'metamask' | 'coinbase', address: string) => {
    setWalletInfo({
      isConnected: true,
      address: address,
      type: walletType
    });
    setIsWalletPopupOpen(false);
  };

  const handleBuyClick = () => {
    if (!walletInfo.isConnected) {
      setIsWalletPopupOpen(true);
    } else {
      // Navigate to buy page when wallet is connected
      navigate('/buy');
    }
  };

  // Rest of your existing navigation functions
  const scrollToIntroduction = () => {
    if (window.location.pathname !== '/') {
      navigate('/');
      setTimeout(() => {
        const element = document.getElementById('introduction');
        if (element) {
          element.scrollIntoView({ 
            behavior: 'smooth',
            block: 'start'
          });
        }
      }, 100);
    } else {
      const element = document.getElementById('introduction');
      if (element) {
        element.scrollIntoView({ 
          behavior: 'smooth',
          block: 'start'
        });
      }
    }
    setIsMobileMenuOpen(false);
  };

  const goHome = () => {
    navigate('/');
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
    setIsMobileMenuOpen(false);
  };

  const NavLinks = ({ onLinkClick }: { onLinkClick?: () => void }) => (
    <>
      <button 
        onClick={() => {
          scrollToIntroduction();
          onLinkClick?.();
        }}
        className="text-white/80 hover:text-white text-sm font-medium leading-normal transition-colors"
      >
        Introduction
      </button>
      <Link 
        to="/about"
        onClick={onLinkClick}
        className="text-white/80 hover:text-white text-sm font-medium leading-normal transition-colors"
      >
        About Us
      </Link>
      <Link 
        to="/token"
        onClick={onLinkClick}
        className="text-white/80 hover:text-white text-sm font-medium leading-normal transition-colors"
      >
        Newf Token
      </Link>
      <Link 
        to="/governance"
        onClick={onLinkClick}
        className="text-white/80 hover:text-white text-sm font-medium leading-normal transition-colors"
      >
        Governance
      </Link>
    </>
  );

  return (
    <>
      <header className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between whitespace-nowrap bg-black/20 backdrop-blur-sm border-b border-solid border-white/10 px-4 md:px-10 py-3">
        {/* Logo and Title */}
        <div 
          onClick={goHome}
          className="flex items-center gap-2 md:gap-4 text-white cursor-pointer hover:text-[#0ADAFF] transition-colors"
        >
          <div className="size-4">
            <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M39.475 21.6262C40.358 21.4363 40.6863 21.5589 40.7581 21.5934C40.7876 21.655 40.8547 21.857 40.8082 22.3336C40.7408 23.0255 40.4502 24.0046 39.8572 25.2301C38.6799 27.6631 36.5085 30.6631 33.5858 33.5858C30.6631 36.5085 27.6632 38.6799 25.2301 39.8572C24.0046 40.4502 23.0255 40.7407 22.3336 40.8082C21.8571 40.8547 21.6551 40.7875 21.5934 40.7581C21.5589 40.6863 21.4363 40.358 21.6262 39.475C21.8562 38.4054 22.4689 36.9657 23.5038 35.2817C24.7575 33.2417 26.5497 30.9744 28.7621 28.762C30.9744 26.5497 33.2417 24.7574 35.2817 23.5037C36.9657 22.4689 38.4054 21.8562 39.475 21.6262ZM4.41189 29.2403L18.7597 43.5881C19.8813 44.7097 21.4027 44.9179 22.7217 44.7893C24.0585 44.659 25.5148 44.1631 26.9723 43.4579C29.9052 42.0387 33.2618 39.5667 36.4142 36.4142C39.5667 33.2618 42.0387 29.9052 43.4579 26.9723C44.1631 25.5148 44.659 24.0585 44.7893 22.7217C44.9179 21.4027 44.7097 19.8813 43.5881 18.7597L29.2403 4.41187C27.8527 3.02428 25.8765 3.02573 24.2861 3.36776C22.6081 3.72863 20.7334 4.58419 18.8396 5.74801C16.4978 7.18716 13.9881 9.18353 11.5858 11.5858C9.18354 13.988 7.18717 16.4978 5.74802 18.8396C4.58421 20.7334 3.72865 22.6081 3.36778 24.2861C3.02574 25.8765 3.02429 27.8527 4.41189 29.2403Z"
                fill="currentColor"
              ></path>
            </svg>
          </div>
          <h2 className="text-white text-sm md:text-lg font-trend font-bold leading-tight tracking-[-0.015em]">
            The Sober Movement
          </h2>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden md:flex flex-1 justify-end gap-8">
          <div className="flex items-center gap-9">
            <NavLinks />
          </div>
          <div className="flex items-center gap-4">
            {walletInfo.isConnected && (
              <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-black/20 border border-[#0ADAFF]/30">
                <FaWallet className="text-[#0ADAFF] text-sm" />
                <span className="text-white/80 text-sm font-medium">
                  {shortenAddress(walletInfo.address)}
                </span>
              </div>
            )}
            <button 
              onClick={handleBuyClick}
              className="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center 
                       overflow-hidden rounded-full h-10 px-6 
                       bg-black/20 text-white text-sm font-bold leading-normal tracking-[0.015em]
                       border-2 border-[#0ADAFF] 
                       shadow-[0_0_15px_rgba(10,218,255,0.3)]
                       hover:bg-[#0ADAFF] hover:text-black hover:border-transparent
                       hover:shadow-[0_0_20px_rgba(10,218,255,0.5)]
                       transition-all duration-300">
              <span className="truncate">
                {walletInfo.isConnected ? 'Buy St. Newfie' : 'Connect Wallet'}
              </span>
            </button>
          </div>
        </div>

        {/* Mobile Menu Button */}
        <div className="flex md:hidden items-center gap-2">
          {walletInfo.isConnected && (
            <div className="flex items-center gap-1 px-2 py-1 rounded-full bg-black/20 border border-[#0ADAFF]/30">
              <FaWallet className="text-[#0ADAFF] text-xs" />
              <span className="text-white/80 text-xs font-medium">
                {shortenAddress(walletInfo.address)}
              </span>
            </div>
          )}
          <button 
            onClick={handleBuyClick}
            className="flex items-center justify-center 
                     overflow-hidden rounded-full h-8 px-4 mr-2
                     bg-black/20 text-white text-xs font-bold leading-normal tracking-[0.015em]
                     border-2 border-[#0ADAFF] 
                     shadow-[0_0_15px_rgba(10,218,255,0.3)]
                     active:bg-[#0ADAFF] active:text-black active:border-transparent
                     transition-all duration-300">
            <span className="truncate">
              {walletInfo.isConnected ? 'Buy' : 'Connect'}
            </span>
          </button>
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="text-white p-2"
          >
            {isMobileMenuOpen ? <HiX size={24} /> : <HiMenu size={24} />}
          </button>
        </div>
      </header>

      {/* Mobile Menu */}
      <div 
        className={`fixed inset-0 z-40 transform ${
          isMobileMenuOpen ? 'translate-x-0' : 'translate-x-full'
        } transition-transform duration-300 ease-in-out md:hidden`}
      >
        <div className="absolute inset-0 bg-black/95 backdrop-blur-sm">
          <div className="flex flex-col items-center justify-center h-full gap-8">
            <NavLinks onLinkClick={() => setIsMobileMenuOpen(false)} />
          </div>
        </div>
      </div>

      <WalletPopup
        isOpen={isWalletPopupOpen}
        onClose={() => setIsWalletPopupOpen(false)}
        onWalletSelect={handleWalletSelect}
      />
    </>
  );
};

export default Header;