import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import {
  FaTwitter,
  FaInstagram,
  FaDiscord,
  FaBook,
  FaMobileAlt,
  FaCoins,
  FaUsers,
  FaArrowUp
} from 'react-icons/fa';
import { IconType } from 'react-icons';

// Define interfaces for component props
interface FooterSectionProps {
  title: string;
  children: React.ReactNode;
}

interface FooterLinkProps {
  href: string;
  icon: IconType;
  children: React.ReactNode;
}

const FooterSection: React.FC<FooterSectionProps> = ({ title, children }) => (
  <div className="space-y-4">
    <h3 className="text-white font-trend text-xl font-bold mb-6">{title}</h3>
    <div className="space-y-3">
      {children}
    </div>
  </div>
);

const FooterLink: React.FC<FooterLinkProps> = ({ href, icon: Icon, children }) => (
  <a
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    className="flex items-center gap-3 text-white/70 hover:text-[#0ADAFF] transition-colors"
  >
    <Icon className="w-5 h-5" />
    <span>{children}</span>
  </a>
);

const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <footer className="bg-[#14121f] border-t border-white/10 ">
      {/* Rest of the component remains the same */}
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* About Section */}
          <div className="space-y-6">
            <div className="flex items-center gap-4">
              <div className="size-8">
                <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M39.475 21.6262C40.358 21.4363 40.6863 21.5589 40.7581 21.5934C40.7876 21.655 40.8547 21.857 40.8082 22.3336C40.7408 23.0255 40.4502 24.0046 39.8572 25.2301C38.6799 27.6631 36.5085 30.6631 33.5858 33.5858C30.6631 36.5085 27.6632 38.6799 25.2301 39.8572C24.0046 40.4502 23.0255 40.7407 22.3336 40.8082C21.8571 40.8547 21.6551 40.7875 21.5934 40.7581C21.5589 40.6863 21.4363 40.358 21.6262 39.475C21.8562 38.4054 22.4689 36.9657 23.5038 35.2817C24.7575 33.2417 26.5497 30.9744 28.7621 28.762C30.9744 26.5497 33.2417 24.7574 35.2817 23.5037C36.9657 22.4689 38.4054 21.8562 39.475 21.6262ZM4.41189 29.2403L18.7597 43.5881C19.8813 44.7097 21.4027 44.9179 22.7217 44.7893C24.0585 44.659 25.5148 44.1631 26.9723 43.4579C29.9052 42.0387 33.2618 39.5667 36.4142 36.4142C39.5667 33.2618 42.0387 29.9052 43.4579 26.9723C44.1631 25.5148 44.659 24.0585 44.7893 22.7217C44.9179 21.4027 44.7097 19.8813 43.5881 18.7597L29.2403 4.41187C27.8527 3.02428 25.8765 3.02573 24.2861 3.36776C22.6081 3.72863 20.7334 4.58419 18.8396 5.74801C16.4978 7.18716 13.9881 9.18353 11.5858 11.5858C9.18354 13.988 7.18717 16.4978 5.74802 18.8396C4.58421 20.7334 3.72865 22.6081 3.36778 24.2861C3.02574 25.8765 3.02429 27.8527 4.41189 29.2403Z"
                    fill="currentColor"
                    className="text-[#0ADAFF]"
                  />
                </svg>
              </div>
              <h2 className="text-white font-trend text-2xl font-bold">The Sober Movement</h2>
            </div>
            <p className="text-white/70">
              Join us in celebrating sobriety and building a community of support, growth, and transformation.
            </p>
          </div>

          {/* Social Links */}
          <FooterSection title="Connect With Us">
            <FooterLink href="https://twitter.com" icon={FaTwitter}>
              Twitter
            </FooterLink>
            <FooterLink href="https://instagram.com" icon={FaInstagram}>
              Instagram
            </FooterLink>
            <FooterLink href="https://discord.com" icon={FaDiscord}>
              Discord
            </FooterLink>
          </FooterSection>

          {/* Resources */}
          <FooterSection title="Resources">
            <FooterLink href="#" icon={FaBook}>
              White Paper
            </FooterLink>
            <FooterLink href="#" icon={FaMobileAlt}>
              Serenity App
            </FooterLink>
            <FooterLink href="#" icon={FaCoins}>
              Token Staking
            </FooterLink>
            <FooterLink href="#" icon={FaUsers}>
              Governance Portal
            </FooterLink>
          </FooterSection>

          {/* Newsletter Signup */}
          <div className="space-y-6">
            <h3 className="text-white font-trend text-xl font-bold">Stay Updated</h3>
            <p className="text-white/70">
              Subscribe to our newsletter for the latest updates and community news.
            </p>
            <div className="space-y-3">
              <input
                type="email"
                placeholder="Enter your email"
                className="w-full px-4 py-2 rounded-lg bg-white/5 border border-white/10 
                         text-white placeholder-white/50 focus:outline-none focus:border-[#0ADAFF]
                         transition-colors"
              />
              <button className="w-full px-6 py-2 rounded-lg bg-[#0ADAFF] text-black font-bold
                               hover:bg-[#0ADAFF]/90 transition-colors">
                Subscribe
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/10">
        <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
            <p className="text-white/50 text-sm">
              © 2024 The Sober Movement. All rights reserved.
            </p>
            <div className="flex gap-6">
              <Link to="/privacy" className="text-white/50 hover:text-white text-sm transition-colors">
                Privacy Policy
              </Link>
              <Link to="/terms" className="text-white/50 hover:text-white text-sm transition-colors">
                Terms of Service
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll to Top Button */}
      <motion.button
        onClick={scrollToTop}
        className="fixed bottom-8 right-8 p-4 rounded-full bg-[#0ADAFF] text-black
                   shadow-[0_0_15px_rgba(10,218,255,0.3)]
                   hover:shadow-[0_0_20px_rgba(10,218,255,0.5)]
                   transition-all duration-300"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
      >
        <FaArrowUp className="w-5 h-5" />
      </motion.button>
    </footer>
  );
};

export default Footer;