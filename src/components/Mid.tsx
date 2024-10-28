import React from 'react';

const IntroductionSection = () => {
 
    return (
        <div className="bg-[#14121f] ">
          {/* The Sober Movement Section */}
          <section className="min-h-screen py-20">
            <div className="px-4 sm:px-6 lg:px-40">
              <div className="max-w-[1200px] mx-auto">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                  {/* Text Content - Left */}
                  <div className="flex flex-col gap-8">
                    <div className="space-y-6">
                      <h2 className="font-trend text-white text-4xl sm:text-5xl font-black leading-tight tracking-[-0.033em]">
                        The Sober Movement
                      </h2>
                      <div className="text-white/80 hover:text-white sm:text-lg font-light leading-relaxed">
                        <p className="mb-6">
                          Welcome to the Sober Movement, a revolution for those who want to rise above, live boldly, and find beauty in sobriety. At its heart, the Sober Movement isn't just about giving up alcohol or substances—it's about embracing a life that's authentic, joyful, and empowering.
                        </p>
                        <p className="mb-6">
                          Founded on the belief that a supportive, dynamic community can make all the difference, the Sober Movement brings together individuals who seek personal growth, self-discovery, and a fresh perspective on life.
                        </p>
                        <p>
                          Our mission is to celebrate every step in the journey of sobriety, offering tools, community support, and a safe space where everyone is encouraged to thrive. With Serenity, our dedicated app for mental wellness and recovery, and Snewf, our token of sober life, we're reshaping the journey into one that's meaningful, engaging, and—above all—rewarding.
                        </p>
                      </div>
                    </div>
                  </div>
                  
                  {/* Image - Right */}
                  <div className="h-[600px] rounded-2xl overflow-hidden">
                    <div className="w-full h-full bg-gradient-to-br from-[#432a65] via-[#6fba73] to-[#00343d] opacity-80">
                      <img 
                        src="https://serenity-gallery.s3.us-east-1.amazonaws.com/web_images/thesobermovement.png"
                        alt="Sober Movement Community"
                        className="w-full h-full object-cover mix-blend-overlay"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
    
          {/* The Newfie Section */}
          <section className="min-h-screen py-20 bg-[#14121f]/90">
            <div className="px-4 sm:px-6 lg:px-40">
              <div className="max-w-[1200px] mx-auto">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                  {/* Image - Left */}
                  <div className="h-[600px] rounded-2xl overflow-hidden lg:order-1">
                    <div className="w-full h-full bg-gradient-to-br from-[#432a65] via-[#6fba73] to-[#00343d] opacity-80">
                      <img 
                        src="https://serenity-gallery.s3.us-east-1.amazonaws.com/web_images/meetsnewf.png"
                        alt="SNEWF Mascot"
                        className="w-full h-full object-cover mix-blend-overlay"
                      />
                    </div>
                  </div>
    
                  {/* Text Content - Right */}
                  <div className="flex flex-col gap-8 lg:order-2">
                    <div className="space-y-6">
                      <h2 className="font-trend text-white text-4xl sm:text-5xl font-black leading-tight tracking-[-0.033em]">
                        The Newfie (Mascot) - SNEWF
                      </h2>
                      <div className="text-white/80 hover:text-white sm:text-lg font-light leading-relaxed">
                        <p className="mb-6">
                          Meet SNEWF, the heart and soul of the Sober Movement! This friendly, loyal dog embodies the spirit of the sober community. Just like the Newfie, our community is there through thick and thin, bringing warmth, support, and positivity to each person's path.
                        </p>
                        <p>
                          Newfie represents the steadfast nature of our mission: to walk beside you every step of the way, offering companionship and unwavering support. Playful yet dependable, Newfie is here to remind you that sobriety is a journey best taken with friends who understand, encourage, and celebrate your growth.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
      ); 
  
};

export default IntroductionSection;