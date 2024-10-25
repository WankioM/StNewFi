// LandingPage.tsxcreast
import React from "react";
import StImage from '../Assets/st.png';

const LandingPage = () => {
    return (
        <div className="h-full bg-black/40">
            <div className="flex flex-1 justify-center h-screen px-4 sm:px-6 lg:px-40">
                <div className="layout-content-container flex items-center max-w-[1200px] flex-1">
                    <div className="@container w-full">
                        <div className="flex flex-row gap-8 items-center">
                            <div className="flex flex-col gap-8 flex-1">
                                <div className="flex flex-col gap-6 text-left">
                                    <h1 className="font-trend text-white text-5xl sm:text-6xl font-black leading-tight tracking-[-0.033em]">
                                        Join the Sober Movement. 
                                    </h1>
                                    <p className="text-white/80 hover:text-white sm:text-lg font-light leading-relaxed">
                                    Because Life is Beautiful, Sober.
                                    </p>
                                </div>
                                <button className="flex w-fit cursor-pointer items-center justify-center 
                                                overflow-hidden rounded-full h-14 px-8 
                                                bg-black/40 text-white text-lg font-bold leading-normal tracking-[0.015em]
                                                border-2 border-[#0ADAFF] 
                                                shadow-[0_0_15px_rgba(10,218,255,0.3)]
                                                hover:bg-[#0ADAFF] hover:text-black hover:border-transparent
                                                hover:shadow-[0_0_20px_rgba(10,218,255,0.5)]
                                                transition-all duration-300">
                                    <span className="truncate">Join the Movement</span>
                                </button>
                            </div>
                            <div className="flex-1 h-[600px] bg-center bg-no-repeat bg-cover rounded-2xl" 
                                style={{ backgroundImage: `url(${StImage})` }}>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default LandingPage;