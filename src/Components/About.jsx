import React from 'react'
import '../index.css';
import Aos from "aos";
import "aos/dist/aos.css";
import { useEffect } from 'react';

const About = () => {

    useEffect(() => {
        Aos.init({duration: 1500});
    }, [])

    return (
        <div id="about" name="about" className="w-full h-max dark-back">
            <div data-aos="fade-up" className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
                <div className="pb-8 mt-12 lg:mt-32 min-h-fit">
                    <div className="text-center"> 
                    <p className="text-3xl sm:text-6xl pt-20 font-light font-hero text-slate-500 inline border-b border-teal-400">
                        A B O U T
                    </p>
                    </div>
                    <div className="lg:flex items-center justify-between text-sm sm:text-lg mt-16 back-gray1 font-logo font-light font-color1 px-4 py-12 rounded-lg">
                        <div className="text-justify lg:mx-10">
                            <p className=" indent-6">
                                Hi there, I'm Rukith Ranasinghe 23 year old Sri Lanka 
                                based UI Designer and an Engineer. Currently I'm a 
                                Computer Science undergraduate at National Institute of Business Management
                                Colombo, Sri Lanka. I'm passionate about all the creative things.
                                I was previously a trainee full stack developer in a company for about
                                6 months period and now I'm searching for my passionate job opportunity
                                as a UI/UX Intern. 
                            </p>
                        </div>
                        <br/>
                        <div className="text-justify lg:mx-10">
                            <p className=" indent-6">
                                I consider my self as a creative, hardworking, passionate for
                                create designs, friendly person and a team player.
                                It is my ability to think of innovative ideas, user focused
                                solutions and my creative way of thinking drives my passion for 
                                user interfaces and user experiences.
                                As a passionate for all the creative things, I really like to
                                sketching portraits and also doing photography.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default About
