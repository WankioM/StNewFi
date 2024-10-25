import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FaArrowDown, FaArrowRight, FaQuoteLeft } from 'react-icons/fa';
import AboutImage from '../Assets/aboutus.png';

// Types remain the same
type CardId = 'story' | 'mission' | 'community';

interface Card {
  id: CardId;
  title: string;
  subtitle: string;
  content: string;
  image: string;
}

const AboutUs = () => {
  const [expandedSection, setExpandedSection] = useState<CardId | null>(null);

  const sections: Card[] = [
    {
      id: 'story',
      title: 'Our Story',
      subtitle: 'A Journey of Transformation',
      content: `The Sober Movement was born from a deeply personal journey, one that started in the depths of addiction and emerged into a life of clarity, empowerment, and hope. Today marks 6.5 months clean for me, and while the road has been challenging, it's also been transformative. There was a time when I couldn't imagine a life without alcohol or substances. Denial had a firm grip on me, and I believed that recovery was impossible—that life would never feel fulfilling again without the crutch of addiction.

But something shifted. It wasn't a dramatic moment, but rather a quiet realization that I couldn't keep living the way I was. With the support of close friends, like my co-founder David, I began to make small changes—choosing sobriety, day by day. Each day, the fog lifted a little more, and life slowly became beautiful in ways I hadn't expected. I started to feel things more deeply, connect with people more meaningfully, and experience moments of genuine joy.

This journey inspired the creation of Serenity and the Sober Movement. I realized that recovery is not just about stopping destructive behaviors—it's about reclaiming your life. It's about finding a community of people who understand the struggle and share in the triumphs, no matter how small. That's why we created Serenity—to provide people with a tool that offers daily support, guidance, and a sense of belonging. And from this journey came the birth of the Sober Movement, a revolution to help others rise above their challenges and live boldly.`,
      image: '/api/placeholder/1200/600'
    },
    {
      id: 'mission',
      title: 'Our Mission',
      subtitle: 'Reclaiming Lives Through Community',
      content: `Our mission is simple yet powerful: to help people reclaim their lives through sobriety, community, and daily engagement. We believe that sobriety can be beautiful, and that with the right support, anyone can live a life that feels empowering and full of purpose. Serenity isn't just an app—it's a lifeline for people who need daily reminders that they are not alone, and that every day offers the chance for positive change. Through meditation, mood tracking, daily tasks, and AI therapy, Serenity creates a personalized space for users to grow and thrive on their recovery journey.

We know that recovery is not just about abstinence—it's about building a life that's worth staying sober for. That's the foundation of our mission.`,
      image: '/api/placeholder/1200/600'
    },
    {
      id: 'community',
      title: 'Our Community',
      subtitle: 'Growing Stronger Together',
      content: `The heart of the Sober Movement lies in its vibrant community of individuals committed to living their best lives through sobriety. Every member brings their unique story, creating a tapestry of experiences that inspire and support others on their journey. Through shared experiences, daily victories, and collective growth, we're building something truly special—a space where sobriety is celebrated and transformation is possible.`,
      image: '/api/placeholder/1200/600'
    }
  ];

  return (
    <div className="min-h-screen"
      style={{ 
        backgroundImage: `url(${AboutImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        width: '100vw',
        marginLeft: '50%',
        transform: 'translateX(-50%)'
      }}
    >
      <div className="h-full bg-black/40">
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center pt-24 mb-16 px-4"
        >
          <h1 className="font-trend text-white text-5xl sm:text-6xl font-black leading-tight tracking-[-0.033em] mb-6">
            About The Sober Movement
          </h1>
          <div className="w-24 h-1 bg-[#0ADAFF] mx-auto mb-8"></div>
          <motion.div 
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="text-[#0ADAFF]"
          >
            <FaArrowDown className="w-6 h-6 mx-auto" />
          </motion.div>
        </motion.div>

        {/* Vertical Sections */}
        <div className="space-y-32">
          {sections.map((section, index) => (
            <motion.section
              key={section.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="relative max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8"
            >
              {/* Content Container */}
              <div className={`grid grid-cols-1 lg:grid-cols-2 gap-8 ${index % 2 === 0 ? '' : 'lg:grid-flow-dense'}`}>
                {/* Text Content */}
                <div className={`space-y-6 ${expandedSection === section.id ? 'lg:col-span-2' : ''}`}>
                  <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.2 }}
                  >
                    <h2 className="font-trend text-white text-4xl sm:text-5xl font-black leading-tight mb-4">
                      {section.title}
                    </h2>
                    <h3 className="text-[#0ADAFF] text-xl font-bold mb-6">
                      {section.subtitle}
                    </h3>
                  </motion.div>

                  <div className="relative">
                    <FaQuoteLeft className="absolute -left-8 -top-6 text-[#0ADAFF]/20 w-16 h-16" />
                    <motion.div
                      initial={{ opacity: 0 }}
                      whileInView={{ opacity: 1 }}
                      transition={{ delay: 0.3 }}
                      className={`text-white/80 leading-relaxed ${
                        expandedSection === section.id ? '' : 'line-clamp-6'
                      }`}
                    >
                      {section.content}
                    </motion.div>
                  </div>

                  <motion.button
                    onClick={() => setExpandedSection(
                      expandedSection === section.id ? null : section.id
                    )}
                    className="group relative flex items-center gap-2 px-6 py-3 rounded-full
                              text-white font-bold
                              bg-black/30 backdrop-blur-sm
                              border border-white/10
                              hover:bg-black/40
                              transition-all duration-300
                              overflow-hidden"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    {/* Glow effect */}
                    <div className="absolute inset-0 bg-[#0ADAFF]/20 blur-xl 
                                  group-hover:bg-[#0ADAFF]/30 transition-all duration-300" 
                    />
                    
                    {/* Button content */}
                    <div className="relative flex items-center gap-2">
                      <span className="transform group-hover:translate-x-[-4px] transition-all duration-300">
                        {expandedSection === section.id ? 'Read Less' : 'Read More'}
                      </span>
                      <FaArrowRight className="w-4 h-4 transform group-hover:translate-x-1 
                                              transition-all duration-300 group-hover:text-[#0ADAFF]" />
                    </div>
                    
                    {/* Shine effect */}
                    <div className="absolute inset-0 translate-x-[-100%] group-hover:translate-x-[100%] 
                                  bg-gradient-to-r from-transparent via-white/10 to-transparent
                                  transition-transform duration-1000 ease-in-out" 
                    />
                  </motion.button>
                </div>

                {/* Image Section */}
                {expandedSection !== section.id && (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.4 }}
                    className="relative h-[400px] lg:h-[500px] rounded-2xl overflow-hidden
                             shadow-[0_0_30px_rgba(10,218,255,0.2)]"
                  >
                    <img 
                      src={section.image}
                      alt={section.title}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-r from-[#432a65]/50 to-[#00343d]/50" />
                  </motion.div>
                )}
              </div>

              {/* Decorative Elements */}
              <div className="absolute -z-10 inset-0 pointer-events-none">
                <div className="absolute top-1/2 -left-4 w-24 h-24 bg-[#0ADAFF]/5 rounded-full blur-xl" />
                <div className="absolute bottom-0 right-0 w-32 h-32 bg-[#432a65]/5 rounded-full blur-xl" />
              </div>
            </motion.section>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AboutUs;