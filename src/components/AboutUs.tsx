import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FaArrowDown, FaArrowRight, FaQuoteLeft } from 'react-icons/fa';
import AboutImage from '../Assets/aboutus.png';

type CardId = 'story' | 'mission' | 'community';

interface Card {
  id: CardId;
  title: string;
  subtitle: string;
  content: string;
  image?: string;  // Made image optional
}

const AboutUs = () => {
  const [expandedSection, setExpandedSection] = useState<CardId | null>(null);

  const sections: Card[] = [
    {
      id: 'story',
      title: 'Our Story',
      subtitle: 'A Journey of Recovery, Hope, and Renewal',
      content: `The Sober Movement was born from the harsh reality of addiction's impact on individuals and families. Addiction tears through lives, causing pain and breaking apart relationships, leaving people feeling trapped and hopeless. But recovery is possible. With courage, support, and a willingness to face the truth, people can rebuild their lives and find strength, connection, and purpose again.

The Sober Movement is a beacon of hope for those struggling and for their loved ones who stand by them. It offers a community of support, daily guidance, and a path toward healing. Serenity, our app, serves as a lifeline, providing strength and solidarity to those on their journey.

This movement is more than just about sobriety; it's about reclaiming life. It's a call to live boldly and to show that recovery is not only possible but can lead to a beautiful, fulfilling life.`,
      image: 'https://serenity-gallery.s3.us-east-1.amazonaws.com/web_images/our+story.png'
    },
    {
      id: 'mission',
      title: 'Our Mission',
      subtitle: 'Reclaiming Lives Through Community',
      content: `Our mission is simple yet powerful: to help people reclaim their lives through sobriety, community, and daily engagement. We believe that sobriety can be beautiful, and that with the right support, anyone can live a life that feels empowering and full of purpose. Serenity isn't just an app—it's a lifeline for people who need daily reminders that they are not alone, and that every day offers the chance for positive change. Through meditation, mood tracking, daily tasks, and AI therapy, Serenity creates a personalized space for users to grow and thrive on their recovery journey.

We know that recovery is not just about abstinence—it's about building a life that's worth staying sober for. That's the foundation of our mission.`
    },
    {
      id: 'community',
      title: 'Our Community',
      subtitle: 'Growing Stronger Together',
      content: `The heart of the Sober Movement lies in its vibrant community of individuals committed to living their best lives through sobriety. Every member brings their unique story, creating a tapestry of experiences that inspire and support others on their journey. Through shared experiences, daily victories, and collective growth, we're building something truly special—a space where sobriety is celebrated and transformation is possible.`,
      image: 'https://serenity-gallery.s3.us-east-1.amazonaws.com/web_images/community.png'
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
              <div className={`grid grid-cols-1 ${section.image ? 'lg:grid-cols-2' : ''} gap-8 ${index % 2 === 0 ? '' : 'lg:grid-flow-dense'}`}>
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
                    <div className="absolute inset-0 bg-[#0ADAFF]/20 blur-xl 
                                  group-hover:bg-[#0ADAFF]/30 transition-all duration-300" 
                    />
                    
                    <div className="relative flex items-center gap-2">
                      <span className="transform group-hover:translate-x-[-4px] transition-all duration-300">
                        {expandedSection === section.id ? 'Read Less' : 'Read More'}
                      </span>
                      <FaArrowRight className="w-4 h-4 transform group-hover:translate-x-1 
                                              transition-all duration-300 group-hover:text-[#0ADAFF]" />
                    </div>
                    
                    <div className="absolute inset-0 translate-x-[-100%] group-hover:translate-x-[100%] 
                                  bg-gradient-to-r from-transparent via-white/10 to-transparent
                                  transition-transform duration-1000 ease-in-out" 
                    />
                  </motion.button>
                </div>

                {section.image && expandedSection !== section.id && (
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