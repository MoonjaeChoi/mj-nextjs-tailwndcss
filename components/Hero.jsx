import React from "react"
import { heroImg } from "@/assets"
import Image from 'next/image'
//import { useCountUp } from 'react-countup'

const Hero = () => {

    // useCountUp({ ref: 'experience', start: 0, end: 6, duration: 2, })
    // useCountUp({ ref: 'success', start: 0, end: 100, duration: 2, })
    // useCountUp({ ref: 'clients', start: 0, end: 300, duration: 2, })
    // useCountUp({ ref: 'projects', start: 0, end: 1200, duration: 2, })

     return ( 
     <section className="pt-0" id="about">
        <div className="container pt-14">
            <div className="md:flex items-center justify-between sm:flex-col. md:flex-row">
                {/*  ================  hero left content ================ */}
                <div className="w-full md:basis-1/2">
                    <h5 data-aos="fade-right"
                        data-aos-duration="1500"
                        className="text-headingColor font-[600] text-[16px]">
                            Hello welcome
                        </h5>
                        <h1 data-aos="fade-up"
                            data-aos-duration="1500"
                            className="text-headingColor font-[800] text-[1.8rem] sm:text-[40px] leading-[35px] sm:leading-[46px] mt-5"
                            >I'm Moonjae Choi <br />
                            Software Developer
                        </h1>

                        <div
                          data-aos="fade-up"
                          data-aos-delay="200"
                          data-aos-duration="1800"
                          className="flex items-center gap-6 mt-7">
                            <button className="bg-primaryColor text-white font-[500] py-2 px-4 rounded-[8px] hover:font-[500] hover:bg-smalltextColor hover:text-white ease-in duration-700">
                                <a className="flex items-center gap-2" href='#contact'>
                                    <i className="ri-mail-line"></i> Hire me
                                </a>
                            </button>
                            <a className="text-smallTextColor font-[600] text-[16px] border-b border-solid border-smallTextColor"
                               href="#portfolio">
                                See portfolio
                               </a>
                        </div>

                        <p data-aos="fade-left"
                           data-aos-duration="1500"
                           className="flex gap-2 text-headingColor font-[500] text-[15px] leading-7 sm:pl-14 sm:pr-10 mt-12">
                            <span>
                                <i class="ri-command-fill"></i>
                            </span>
                            Lorem ipsum dolor sit amet consectetur adipjsicinj elit. Quo, minima eaque? Quaerat fuga tenetur eligendi placeat doloremque!
                           </p>

                           <div className="flex items-center gap-9 mt-14">
                                <span className="text-smallTextColor text-[15px] font-[600]">
                                    Follow me:
                                </span>
                                <span>
                                    <a href="#youtube"
                                       className="text-smallTextColor text-[18px] font-[600]">
                                        <i class="ri-youtube-line"></i>
                                    </a>
                                </span>
                                <span>
                                    <a href="https://github.com/MoonjaeChoi/"
                                       className="text-smallTextColor text-[18px] font-[600]">
                                        <i class="ri-github-fill"></i>
                                    </a>
                                </span>
                                <span>
                                    <a href="#facebook"
                                       className="text-smallTextColor text-[18px] font-[600]">
                                        <i class="ri-facebook-line"></i>
                                    </a>
                                </span>
                                <span>
                                    <a href="#instagram"
                                       className="text-smallTextColor text-[18px] font-[600]">
                                        <i class="ri-instagram-line"></i>
                                    </a>
                                </span>
                                <span>
                                    <a href="https://www.linkedin.com/in/moonjae/"
                                       className="text-smallTextColor text-[18px] font-[600]">
                                        <i class="ri-linkedin-box-line"></i>
                                    </a>
                                </span>
                           </div>
                      </div>
                    {/*  ================  hero left content end ================ */}
                    {/*  ================  hero img ================ */}
                    <div className="basis-1/3 mt-10 sm:mt-0">
                        <figure className="flex items-center justify-center">
                            <Image src={heroImg} alt='' />
                        </figure>
                    </div>
                    {/*  ================  hero img end ================ */}
                    {/*  ================  hero content right ================ */}
                    <div className="md:basis-1/5 flex justify-between text-center mt-10 flex-wrap gap-3 md:mt-0 md:flex-col md:justify-end md:text-end">
                        <div className="mb-10">
                            <h2 className="text-headingColor font-[700] text-[32px]">
                                {/* <span id="experience" />+ */}
                                {/* <CountUp start={0} end={6} duration={2} suffix="+" /> */}
                            </h2>
                            <h4 className="text-headingColor font-[600] text-[18px]">
                                Years of Experience
                            </h4>
                        </div>
                        <div className="mb-10">
                            <h2 className="text-headingColor font-[700] text-[32px]">
                                {/* <span id="success" />% */}
                                {/* <CountUp start={0} end={100} duration={2} suffix="%" /> */}
                            </h2>
                            <h4 className="text-headingColor font-[600] text-[18px]">
                                Success Rate
                            </h4>
                        </div>
                        <div className="mb-10">
                            <h2 className="text-headingColor font-[700] text-[32px]">
                                {/* <span id="clients" />+ */}
                                {/* <CountUp start={0} end={150} duration={2} suffix="+" /> */}
                            </h2>
                            <h4 className="text-headingColor font-[600] text-[18px]">
                                Happy Clients
                            </h4>
                        </div>
                        <div className="mb-10">
                            <h2 className="text-headingColor font-[700] text-[32px]">
                                {/* <span id="projects" />+ */}
                                {/* <CountUp start={0} end={250} duration={2} suffix="+" /> */}
                            </h2>
                            <h4 className="text-headingColor font-[600] text-[18px]">
                                Projects Completed
                            </h4>
                        </div>
                    </div>
                    {/*  ================  hero content right end ================ */}
                </div>
            </div>
    </section>
   )
}

export default Hero