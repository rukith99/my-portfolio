import React from 'react';
import MyImage from '../Assets/my_image.jpg';
import Heart from '../Assets/Heart.png';
import { FaGithub, FaLinkedin, FaFacebookF, FaInstagram, FaBehance } from 'react-icons/fa';
import { SiGmail } from 'react-icons/si';
import Aos from "aos";
import "aos/dist/aos.css";
import { useEffect } from 'react';

const Home = () => {

    const social = [
        {
            id: 1,
            child: ( <FaLinkedin size={27}/> ),
            href: 'https://www.linkedin.com/in/rukith-ranasinghe-7b392972/',
        },
        {
            id: 2,
            child: ( <FaFacebookF size={25}/> ),
            href: 'https://www.facebook.com/rukith.ranasinghe.9/',
        },{
            id: 3,
            child: ( <FaInstagram size={27}/> ),
            href: 'https://www.instagram.com/rukiith/',
        },{
            id: 4,
            child: ( <FaBehance size={30}/> ),
            href: 'https://www.behance.net/rukithranasin',
        },{
            id: 5,
            child: ( <FaGithub size={27}/> ),
            href: 'https://github.com/rukith99',
        },{
            id: 6,
            child: ( <SiGmail size={27}/> ),
            href: 'mailto:rukith.ranasinghe@gmail.com',
        },
    ]

    useEffect(() => {
        Aos.init({duration: 1500});
    }, [])

    return (
        <div id="home" name="home" className="h-max w-full py-4 dark-back">

            <div data-aos="fade"  className="max-w-screen-xl mx-auto flex flex-col items-stretch justify-center h-full px-4 sm:pt-16 md:flex-row">

                <div className="flex flex-col justify-center h-full lg:w-[1500px] w-full"> 
                    <div className="flex">
                        <h3 className="text-md sm:text-2xl pt-10 pb-4 font-logo font-color1 font-light">
                            Hey There ! I'm <a href="#/" target="_blank" rel="noreferrer" className="font-name sm:text-4xl text-3xl text-teal-400 cursor-text">Rukith Ranasinghe</a>
                        </h3>
                        <img src={Heart} alt="my profile" className="w-12 h-12 sm:w-16 sm:h-16 mt-12 sm:mt-8 mb-8 mx-10 animate-bounceSlow" />
                    </div>
                     {/* <h2 className="text-4xl sm:text-6xl font-extrabold font-logo bg-gradient-to-r from-teal-500 via-green-400 to-green-500 bg-clip-text text-transparent"> */}
                     <h2 className="text-4xl sm:text-7xl font-light font-hero text-slate-500 hover:text-slate-300 duration-300 mb-2">
                        UI DESIGNER,
                    </h2>
                    <h2 className="text-4xl sm:text-7xl font-light font-hero text-slate-500 hover:text-slate-300 duration-300 mb-2">
                        UI DEVELOPER &
                    </h2>
                    <h2 className="text-4xl sm:text-7xl font-light font-hero text-slate-500 hover:text-slate-300 duration-300">
                        SOLUTION PROVIDER
                    </h2>
                    <p className="font-color2 my-6 py-2 px-4 rounded-lg max-w-md font-normal back-gray1 text-base sm:text-lg font-main">
                        BSc (Hons) in <a href="https://www.nibm.lk/programmes/bsc-hons-computing/" target="_blank" rel="noreferrer" className="font-medium text-sm sm:text-base text-teal-400">Computer Science</a><br/>
                        Undergraduate at <a href="https://www.nibm.lk/" target="_blank" rel="noreferrer" className="font-medium text-sm sm:text-base text-teal-400">NIBM - Colombo, Sri Lanka</a>
                    </p>
                    
                    <h4 className="font-color2 text-base sm:text-lg mt-4 font-logo">Get in touch</h4>
                    <div className="flex justify-between lg:mt-2 pt-4 lg:pt-4 border-t-[1.5px] border-white border-opacity-5">
                        {social.map(({ id, child, href}) =>(
                            <a href={href} className=" font-color2 hover:text-white hover:scale-125 duration-300" target="_blank" rel="noreferrer">{child}</a>
                        ))}
                    </div>
                </div>
                <div className="sm:ml-12 mt-6 sm:mt-20">
                    <img src={MyImage} alt="my profile"
                    className="rounded-lg w-full mix-blend-screen" />
                </div>
            </div>
        </div>
    )
}

export default Home
