import React from 'react';
import { motion } from 'framer-motion';
import { 
  FaFileSignature, 
  FaUsers, 
  FaVoteYea, 
  FaHandshake, 
  FaPeopleCarry 
} from 'react-icons/fa';

const Governance = () => {
  const features = [
    {
      icon: <FaFileSignature />,
      title: "Submit Proposals",
      description: "Create and submit proposals that shape the future of our platform"
    },
    {
      icon: <FaVoteYea />,
      title: "Voting Power",
      description: "Use your tokens to vote on important platform decisions"
    },
    {
      icon: <FaUsers />,
      title: "Community Review",
      description: "Participate in discussions and provide feedback on proposals"
    }
  ];

  const governanceSteps = [
    {
      number: "1",
      title: "Proposal Submission",
      description: "As a St. Newfie  holder, you can submit proposals for platform improvements, community initiatives, or treasury allocations. Each proposal undergoes initial review before entering the community phase."
    },
    {
      number: "2",
      title: "Community Review",
      description: "Proposals enter a review period where token holders can discuss, provide feedback, and suggest improvements. This collaborative approach ensures thorough vetting by our community."
    },
    {
      number: "3",
      title: "Voting Phase",
      description: "Each St. Newfi token represents voting power in the ecosystem. Participate in transparent voting to shape the platform's future directly."
    }
  ];

  const benefits = [
    {
      icon: <FaHandshake className="w-12 h-12 text-[#0ADAFF]" />,
      title: "Inclusive Governance",
      description: "Every token holder has an equal voice in shaping our platform's future. Your participation drives our community forward."
    },
    {
      icon: <FaPeopleCarry className="w-12 h-12 text-[#0ADAFF]" />,
      title: "Community Power",
      description: "Together we build a stronger recovery ecosystem. Your involvement strengthens our mission of supporting sobriety."
    }
  ];

  return (
    <div className="min-h-screen bg-[#14121f] py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header Section */}
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-20"
        >
          <h1 className="font-trend text-white text-5xl sm:text-6xl font-black leading-tight tracking-[-0.033em] mb-6">
            Serenity
            <span className="text-[#0ADAFF]"> Governance</span>
          </h1>
          <div className="w-24 h-1 bg-[#0ADAFF] mx-auto mb-8"></div>
          <p className="text-white/80 text-xl max-w-2xl mx-auto">
            Shape the future of recovery through active participation in our decentralized platform
          </p>
        </motion.div>

        {/* Power Features */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-black/20 backdrop-blur-sm rounded-xl p-8
                         border border-white/10 hover:border-[#0ADAFF]/30
                         transition-all duration-300"
            >
              <div className="text-[#0ADAFF] text-3xl mb-4">{feature.icon}</div>
              <h3 className="text-white text-xl font-bold mb-2">{feature.title}</h3>
              <p className="text-white/70">{feature.description}</p>
            </motion.div>
          ))}
        </div>

        {/* Governance Process */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className="mb-20"
        >
          <h2 className="font-trend text-white text-4xl text-center mb-12">
            The Governance <span className="text-[#0ADAFF]">Process</span>
          </h2>
          
          <div className="space-y-6">
            {governanceSteps.map((step, index) => (
              <motion.div
                key={step.number}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-black/40 backdrop-blur-sm rounded-xl p-6
                           border border-white/10 relative overflow-hidden"
              >
                <div className="flex items-start gap-6">
                  <div className="w-12 h-12 bg-[#0ADAFF]/20 rounded-full flex items-center justify-center
                                text-[#0ADAFF] text-xl font-bold">
                    {step.number}
                  </div>
                  <div>
                    <h3 className="text-white text-xl font-bold mb-2">{step.title}</h3>
                    <p className="text-white/70">{step.description}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Benefits Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {benefits.map((benefit, index) => (
            <motion.div
              key={benefit.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-gradient-to-r from-[#0ADAFF]/10 to-transparent
                         rounded-xl p-8 border border-white/10"
            >
              <div className="mb-4">{benefit.icon}</div>
              <h3 className="text-white text-2xl font-bold mb-4">{benefit.title}</h3>
              <p className="text-white/70">{benefit.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Governance;