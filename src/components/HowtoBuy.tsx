import React from 'react';
import { motion } from 'framer-motion';
import { FaWallet, FaCreditCard, FaFileContract, FaCheckCircle } from 'react-icons/fa';
import { RiMoneyDollarCircleLine } from 'react-icons/ri';

const HowToBuy = () => {
  const steps = [
    {
      id: 1,
      title: 'Connect Your Web3 Wallet',
      description: 'To begin your journey into the world of Newfi, you\'ll first need to connect your wallet. This wallet enables your journey to buying and staking crypto.',
      icon: <FaWallet className="w-8 h-8" />
    },
    {
      id: 2,
      title: 'Select a Payment Token',
      description: 'Choose from one of the supported tokens to pay for Newfi. You can select from ETH, USDC, USDT or WBTC.',
      icon: <FaCreditCard className="w-8 h-8" />
    },
    {
      id: 3,
      title: 'Payment Amount',
      description: 'Specify the amount of payment tokens you\'d like to purchase Newfi with. Make sure you have the corresponding amount in your wallet.',
      icon: <RiMoneyDollarCircleLine className="w-8 h-8" />
    },
    {
      id: 4,
      title: 'Accept Terms & Conditions',
      description: 'Before proceeding, you\'ll need to review and agree to our terms and conditions. Take a moment to read through the agreement.',
      icon: <FaFileContract className="w-8 h-8" />
    },
    {
      id: 5,
      title: 'Purchase Complete',
      description: 'Congratulations! Your Newfi tokens will be transferred to your wallet after the transaction is confirmed.',
      icon: <FaCheckCircle className="w-8 h-8" />
    }
  ];

  return (
    <div className="min-h-screen bg-black/95">
      <motion.div 
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-center pt-24 mb-16 px-4"
      >
        <h1 className="font-trend text-white text-5xl sm:text-6xl font-black leading-tight tracking-[-0.033em] mb-6">
          How to Buy <span className="text-[#0ADAFF]">Newfi</span>
        </h1>
        <p className="text-white/80 text-lg mb-8">
          A step by step guide for buying the token
        </p>
        <div className="w-24 h-1 bg-[#0ADAFF] mx-auto"></div>
      </motion.div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pb-24">
        <div className="relative">
          {/* Vertical Timeline Line */}
          <div className="absolute left-[50%] top-0 bottom-0 w-px bg-[#0ADAFF]/20" />

          {steps.map((step, index) => (
            <motion.div
              key={step.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="relative grid grid-cols-1 lg:grid-cols-2 gap-8 mb-24 last:mb-0"
            >
              {/* Timeline Node */}
              <div className="absolute left-[50%] top-0 transform -translate-x-1/2 -translate-y-1/2">
                <motion.div 
                  className="w-12 h-12 rounded-full bg-black border-2 border-[#0ADAFF] flex items-center justify-center"
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  transition={{ delay: 0.2 }}
                >
                  <span className="text-[#0ADAFF] font-bold">{step.id}</span>
                </motion.div>
              </div>

              {/* Content */}
              <div className={`lg:col-span-1 ${index % 2 === 0 ? 'lg:text-right lg:pr-24' : 'lg:col-start-2 lg:pl-24'}`}>
                <motion.div
                  className="bg-black/40 backdrop-blur-sm border border-white/10 rounded-2xl p-8
                            shadow-[0_0_30px_rgba(10,218,255,0.1)] relative overflow-hidden"
                  whileHover={{ scale: 1.02 }}
                  transition={{ duration: 0.3 }}
                >
                  {/* Gradient Orb */}
                  <div className="absolute -z-10 w-32 h-32 rounded-full bg-[#0ADAFF]/5 blur-xl
                                top-1/2 transform -translate-y-1/2
                                transition-all duration-300" />

                  <div className={`flex items-center gap-4 mb-4 ${index % 2 === 0 ? 'lg:flex-row-reverse' : ''}`}>
                    <div className="text-[#0ADAFF]">{step.icon}</div>
                    <h3 className="font-trend text-white text-2xl font-bold">{step.title}</h3>
                  </div>
                  
                  <p className={`text-white/80 leading-relaxed ${index % 2 === 0 ? 'lg:text-right' : ''}`}>
                    {step.description}
                  </p>
                </motion.div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default HowToBuy;