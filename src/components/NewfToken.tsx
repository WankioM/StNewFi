import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  FaCoins, 
  FaChartLine, 
  FaUsers, 
  FaLock, 
  FaVoteYea,
  FaPaw,
  FaArrowRight 
} from 'react-icons/fa';

// Define types
interface TokenFeatureProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  delay: number;
}

interface Section {
  title: string;
  content: string;
  image: string;
}

interface Sections {
  about: Section;
  utility: Section;
  oreo: Section;
}

type SectionKey = keyof Sections;

const TokenFeature: React.FC<TokenFeatureProps> = ({ icon, title, description, delay }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5, delay }}
    className="bg-black/20 backdrop-blur-sm rounded-xl p-6
               shadow-[inset_-2px_-2px_10px_rgba(255,255,255,0.1),_inset_2px_2px_10px_rgba(0,0,0,0.3)]
               hover:shadow-[0_0_20px_rgba(10,218,255,0.2)]
               transition-all duration-300"
  >
    <div className="flex items-center gap-4 mb-4">
      <div className="p-3 bg-[#0ADAFF]/10 rounded-lg">
        {icon}
      </div>
      <h3 className="text-white text-xl font-bold">{title}</h3>
    </div>
    <p className="text-white/80">{description}</p>
  </motion.div>
);

const NewfToken: React.FC = () => {
  const [activeSection, setActiveSection] = useState<SectionKey>('about');

  const sections: Sections = {
    about: {
      title: "What is Snewf?",
      content: `Snewf is more than just a token—it's a symbol of sobriety and personal transformation. Inspired by Oreo, a Newfoundland dog whose life was tragically cut short by an intoxicated driver, Snewf represents hope, resilience, and the beauty of life when lived free from addiction.`,
      image: '/api/placeholder/600/400'
    },
    utility: {
      title: "Token Utility",
      content: "The Snewf token functions as both a reward and a utility token within the Serenity ecosystem. As users commit to their sobriety and mental well-being, they earn Snewf tokens through activities and achievements within the app.",
      image: '/api/placeholder/600/400'
    },
    oreo: {
      title: "Oreo's Story",
      content: "At the heart of this movement is Oreo, a Newfoundland dog whose story embodies the far-reaching impact of addiction and the path to recovery.",
      image: '/api/placeholder/600/400'
    }
  };

  const features: TokenFeatureProps[] = [
    {
      icon: <FaCoins className="w-6 h-6 text-[#0ADAFF]" />,
      title: "Daily Rewards",
      description: "Earn Snewf tokens for completing daily tasks, logging moods, and achieving sobriety milestones.",
      delay: 0
    },
    {
      icon: <FaUsers className="w-6 h-6 text-[#0ADAFF]" />,
      title: "Community Referrals",
      description: "Invite friends to join Serenity and earn tokens while expanding the sober community.",
      delay: 0.1
    },
    {
      icon: <FaLock className="w-6 h-6 text-[#0ADAFF]" />,
      title: "Premium Access",
      description: "Use Snewf tokens to unlock premium features and personalized AI therapy sessions.",
      delay: 0.2
    },
    {
      icon: <FaVoteYea className="w-6 h-6 text-[#0ADAFF]" />,
      title: "Governance",
      description: "Participate in platform decisions and shape the future of the Serenity ecosystem.",
      delay: 0.3
    }
  ];

  return (
    <div className="min-h-screen bg-[#14121f] py-20">
      {/* Rest of the component remains the same */}
      <div className="px-4 sm:px-6 lg:px-40">
        <div className="max-w-[1200px] mx-auto">
          {/* Header Section */}
          <div className="text-center mb-16">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <h1 className="font-trend text-white text-5xl sm:text-6xl font-black leading-tight tracking-[-0.033em] mb-6">
                Snewf Token
              </h1>
              <div className="w-24 h-1 bg-[#0ADAFF] mx-auto"></div>
            </motion.div>
          </div>

          {/* Main Content Section */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-20">
            {/* Info Side */}
            <div className="space-y-6">
              <motion.h2 
                className="font-trend text-white text-3xl sm:text-4xl font-black leading-tight"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5 }}
              >
                {sections[activeSection].title}
              </motion.h2>
              <motion.p 
                className="text-white/80 text-lg leading-relaxed"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                {sections[activeSection].content}
              </motion.p>
              <motion.button
                className="flex items-center gap-2 px-8 py-4 rounded-full
                          bg-[#0ADAFF]/10 text-white font-bold
                          shadow-[inset_-2px_-2px_10px_rgba(255,255,255,0.1),_inset_2px_2px_10px_rgba(0,0,0,0.3)]
                          hover:bg-[#0ADAFF] hover:text-black
                          transition-all duration-300"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.4 }}
              >
                <span>Read Whitepaper</span>
                <FaArrowRight />
              </motion.button>
            </div>

            {/* Image Side */}
            <motion.div
              className="relative h-[400px] rounded-2xl overflow-hidden
                         shadow-[0_0_30px_rgba(10,218,255,0.2)]"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
            >
              <img 
                src={sections[activeSection].image}
                alt={sections[activeSection].title}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-[#432a65]/50 to-[#00343d]/50" />
            </motion.div>
          </div>

          {/* Features Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-20">
            {features.map((feature) => (
              <TokenFeature 
                key={feature.title}
                {...feature}
              />
            ))}
          </div>

          {/* Tokenomics Section */}
          <motion.div
            className="bg-black/20 backdrop-blur-sm rounded-2xl p-8
                       shadow-[inset_-2px_-2px_10px_rgba(255,255,255,0.1),_inset_2px_2px_10px_rgba(0,0,0,0.3)]"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="font-trend text-white text-3xl font-black mb-6">Tokenomics</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="text-center p-4 rounded-xl bg-[#0ADAFF]/10">
                <h3 className="text-[#0ADAFF] text-2xl font-bold mb-2">35%</h3>
                <p className="text-white/80">Team & Founders</p>
              </div>
              <div className="text-center p-4 rounded-xl bg-[#0ADAFF]/10">
                <h3 className="text-[#0ADAFF] text-2xl font-bold mb-2">20%</h3>
                <p className="text-white/80">Rewards Pool</p>
              </div>
              <div className="text-center p-4 rounded-xl bg-[#0ADAFF]/10">
                <h3 className="text-[#0ADAFF] text-2xl font-bold mb-2">45%</h3>
                <p className="text-white/80">Community & Development</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default NewfToken;