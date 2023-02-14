import React from 'react'
import p1 from "../Assets/proj1.png"
import p2 from "../Assets/proj2.png"
import p3 from "../Assets/proj3.png"
import Aos from "aos";
import "aos/dist/aos.css";
import { useEffect } from 'react';

const Portfolio = () => {

    useEffect(() => {
        Aos.init({duration: 1500});
    }, [])

  return (
    <div id="portfolio" name="portfolio" className="dark-back w-full h-max overflow-hidden">
        <div className="max-w-screen-xl mx-auto p-4 flex flex-col justify-center w-full font-color1">
            <div data-aos="fade" className="mt-10 lg:mt-20">
                <div className="text-center">
                <p className="text-4xl sm:text-6xl pt-20 font-medium font-basic text-white inline">
                    Portfolio <span className="font-logo sm:text-6xl text-4xl text-amber-500 cursor-text">.</span>
                </p>
                </div>
                <p className="text-base sm:text-2xl text-center font-normal mt-6 mb-16 text-amber-500 font-basic">
                    Freely inspired design projects
                </p>
            </div>
            <div className="lg:grid md:grid grid-cols-2 grid-rows-3 gap-24 justify-between sm:pt-14 pt-2">
                <div data-aos="zoom-out"  className="">
                    <img src={p1} alt="" loading="lazy" className="rounded-lg w-3/4 font-color1 mx-auto lg:mt-4 lg:ml-10"/>
                </div>
                <div data-aos="fade-left" className="mt-4 lg:mt-0 text-center lg:text-left lg:border-r-2 lg:border-amber-400 lg:border-opacity-10">
                    <h4 className="py-4 sm:text-base lg:text-3xl font-basic mt-4 font-normal text-white lg:mr-10">Sampath Vishwa App Design<span className="font-logo sm:text-3xl text-base text-amber-500 cursor-text ml-2">.</span></h4>
                    <p className=" indent-6 text-justify text-sm sm:text-base font-basic mt-4 mb-8 lg:mt-12 lg:mb-16 font-color2 mx-auto lg:mr-10">
                                Here is my project of redesigning the mobile app for
                                well-known bank called Sampath Bank in Sri Lanka.
                                Currently the "Sampath Vishwa" the mobile banking app
                                is only available for android users.
                                So I decided to design user interfaces for the
                                iOS devices. I used the android user interfaces as the 
                                references and redesign the mobile app as suitable for
                                iOS interface.
                                Please click the link below to check the full project on Behance.                             
                    </p>
                    <a href="https://www.behance.net/gallery/159063705/iOS-User-Interface-for-Sampath-Vishwa-App" target="_blank" rel="noreferrer" className="text-base text-amber-500 font-logo font-medium animate-pulse hover:animate-none">View full project</a>
                </div>
                <div data-aos="fade-right" className="mt-14 lg:mt-0 text-center lg:text-left lg:border-l-2 lg:border-amber-400 lg:border-opacity-10">
                    <h4 className="py-4 sm:text-base lg:text-3xl font-basic mt-4 font-normal text-white lg:ml-10">
                        Absolute Beverages App Design <span className="font-logo sm:text-3xl text-base text-amber-500 cursor-text ml-2">.</span>
                    </h4>
                    <p className="text-justify indent-6 sm:text-base text-sm font-basic mt-8 mb-8 lg:mt-12 lg:mb-16 mx-auto lg:ml-10 font-color2">
                            The Absolute Beverages is a mobile app for purchase beverages 
                            through online. Users can simply log in to the app and 
                            they can buy their favorite products and also can add them 
                            to the cart. Got inspired after saw some designs and 
                            brandings about beverages and done this concept design of iOS mobile app interfaces. 
                            It is not a complete design project, but it is consist of 4 major page designs. 
                            Hope to develop it as a full design project in future.
                            Please click the link below to check the full project on Behance.  
                    </p>  
                    <a href="https://www.behance.net/gallery/159225747/Absolute-Beverages-iOS-Concept-App"  target="_blank" rel="noreferrer" className="text-base text-amber-500 font-logo font-medium lg:ml-10 animate-pulse hover:animate-none">View full project</a>  
                </div>
                <div data-aos="zoom-out"  className="">
                    <img src={p2} alt="" loading="lazy" className="rounded-lg w-3/4 font-color1 mx-auto lg:mr-10 mt-8 lg:mt-4"/>
                </div>
                <div data-aos="zoom-out"  className="mt-16 lg:mt-4">
                    <img src={p3} alt="" loading="lazy" className="rounded-lg w-3/4 font-color1 mx-auto lg:ml-10"/>
                </div>
                <div data-aos="fade-left" className="mt-4 lg:mt-0 text-center lg:text-left lg:border-r-2 lg:border-amber-400 lg:border-opacity-10">
                    <h4 className="py-4 sm:text-base lg:text-3xl font-basic mt-4 font-normal text-white lg:mr-10">
                        NIKE Boots Store App Design <span className="font-logo sm:text-3xl text-base text-amber-500 cursor-text ml-2">.</span>
                    </h4>
                    <p className="indent-6 text-justify sm:text-base text-sm font-basic mt-4 mb-8 lg:mt-12 lg:mb-16 mx-4 lg:mx-auto lg:mr-10 font-color2">
                                NIKE is one of the leading manufacturer in shoes
                                for both men and women even for kids. Also they
                                have a huge reputation in sports industry and the
                                football is their main sport. Currently they only have
                                one website for purchasing all kind of shoes. So I
                                decided to design some iOS user interfaces for
                                NIKE Football Boots purchasing app which is really
                                easy to buy products for football players.
                                Its not a complete design project, but you can check
                                the demonstration of few interfaces using below link. 
                    </p>
                    <a href="https://www.behance.net/gallery/159678531/NIKE-Boots-Store"  target="_blank" rel="noreferrer" className="text-base text-amber-500 font-logo font-medium animate-pulse hover:animate-none">View full project</a>
                </div>
            </div>
        </div>
    </div>           
  )
}

export default Portfolio