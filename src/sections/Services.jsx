import React from 'react'

const Services = () => {
    return (
        <>
            {/* Title Wrapper */}
            <div className="bg-white text-black">
                <div className='main-container pb-8 lg:pb-12'>
                    <h3>What I Do</h3>
                </div>
            </div>

            {/* Services List */}
            <div className='relative'>

                {/* 01 — Frontend Development */}
                <div className="bg-black text-white pt-16 lg:pt-20 pb-[40rem] sticky top-4">
                    <div className="main-container grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-12 items-start">

                        {/* Left side */}
                        <div className='flex gap-6 lg:gap-8'>
              <span className="text-gray-400 text-lg lg:text-2xl font-heading tracking-wide block mb-4">
                01
              </span>

                            <h2 className="text-[8vw] md:text-6xl font-heading font-bold leading-[1]">
                                Frontend <br /> Development
                            </h2>
                        </div>

                        {/* Right side */}
                        <div className="flex items-center">
                            <p className="text-lg lg:text-xl leading-relaxed">
                                Building modern, responsive interfaces with clean code,
                                thoughtful layouts, and smooth interactions. I focus on
                                turning ideas and designs into polished web experiences.
                            </p>
                        </div>

                    </div>
                </div>

                {/* 02 — UI/UX Design */}
                <div className="bg-[#E9E9F0] text-black pt-16 lg:pt-20 pb-[23rem] sticky top-1/3">
                    <div className="main-container grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-12 items-start">

                        {/* Left side */}
                        <div className='flex gap-6 lg:gap-8'>
              <span className="text-gray-400 text-lg lg:text-2xl font-heading tracking-wide block mb-4">
                02
              </span>

                            <h2 className="text-[8vw] md:text-6xl font-heading font-bold leading-[1]">
                                UI/UX <br /> Design
                            </h2>
                        </div>

                        {/* Right side */}
                        <div className="flex items-center">
                            <p className="text-lg lg:text-xl leading-relaxed">
                                Designing clean and intuitive interfaces with a strong focus
                                on typography, spacing, visual hierarchy, and usability.
                                I enjoy turning ideas into experiences that feel simple
                                and intentional.
                            </p>
                        </div>

                    </div>
                </div>

                {/* 03 — Creative Development */}
                <div className="bg-white text-black py-16 lg:py-20 sticky top-2/3">
                    <div className="main-container grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-12 items-start">

                        {/* Left side */}
                        <div className='flex gap-6 lg:gap-8'>
              <span className="text-gray-400 text-lg lg:text-2xl font-heading tracking-wide block mb-4">
                03
              </span>

                            <h2 className="text-[8vw] md:text-6xl font-heading font-bold leading-[1]">
                                Creative <br /> Development
                            </h2>
                        </div>

                        {/* Right side */}
                        <div className="flex items-center">
                            <p className="text-lg lg:text-xl leading-relaxed">
                                Experimenting with animations, interactions, and creative web
                                experiences. I am constantly learning new tools and techniques
                                to push my frontend work beyond static interfaces.
                            </p>
                        </div>

                    </div>
                </div>

            </div>
        </>
    )
}

export default Services