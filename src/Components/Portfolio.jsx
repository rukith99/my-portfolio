import React from 'react'
import p1 from "../Assets/proj1.png"
import p2 from "../Assets/proj2.png"
import p3 from "../Assets/proj3.jpg"

const Portfolio = () => {
  return (
    <div id="portfolio" name="portfolio" className="dark-back w-full h-max">
        <div className="max-w-screen-lg mx-auto p-4 flex flex-col justify-center w-full font-color1">
            <div className="mt-10 lg:mt-20">
                <div className="text-center">
                <p className="text-4xl sm:text-6xl font-extrabold font-main text-white border-b-2 border-cyan-500 p-2 inline">
                    Portfolio
                </p>
                </div>
                <p className="text-base sm:text-2xl text-center font-semibold mt-16 mb-16 text-sky-400 font-logo">
                    Freely inspired design projects
                </p>
            </div>
            <div className="lg:grid md:grid grid-cols-2 grid-rows-3 gap-24 justify-between border-t-2 border-white border-opacity-5 pt-8 border-b-2 pb-8">
                <div className="">
                    <img src={p1} alt="" loading="lazy" className="rounded-lg w-3/4 font-color1 hover:scale-105 duration-300 mx-auto lg:mt-4 lg:ml-10"/>
                </div>
                <div className="mt-4 lg:mt-0 text-center lg:text-left">
                    <h4 className="py-4 sm:text-lg lg:text-2xl font-logo font-semibold border-b-2 border-sky-400 lg:mr-10 ">Sampath Vishwa App Design</h4>
                    <p className=" indent-6 text-justify text-sm font-logo mt-4 mb-8 text-gray-300 mx-auto lg:mr-10">
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
                    <a href="https://www.behance.net/gallery/159063705/iOS-User-Interface-for-Sampath-Vishwa-App" target="_blank" rel="noreferrer" className="text-base text-sky-400 font-logo font-medium animate-pulse hover:animate-none">View full project</a>
                </div>
                <div className="mt-14 lg:mt-0 text-center lg:text-left">
                    <h4 className="py-4 sm:text-base lg:text-2xl font-logo font-semibold border-b-2 border-sky-400 lg:ml-10">
                        Absolute Beverages App Design
                    </h4>
                    <p className="text-justify indent-6 text-sm font-logo mt-4 mb-8 mx-auto lg:ml-10 text-gray-300">
                            The Absolute Beverages is a mobile app for purchase beverages 
                            through online. Users can simply log in to the app and 
                            they can buy their favorite products and also can add them 
                            to the cart. Got inspired after saw some designs and 
                            brandings about beverages and done this concept design of iOS mobile app interfaces. 
                            It is not a complete design project, but it is consist of 4 major page designs. 
                            Hope to develop it as a full design project in future.
                            Please click the link below to check the full project on Behance.  
                    </p>  
                    <a href="https://www.behance.net/gallery/159225747/Absolute-Beverages-iOS-Concept-App"  target="_blank" rel="noreferrer" className="text-base text-sky-400 font-logo font-medium lg:ml-10 animate-pulse hover:animate-none">View full project</a>  
                </div>
                <div className="">
                    <img src={p2} alt="" loading="lazy" className="rounded-lg w-3/4 font-color1 hover:scale-105 duration-300 mx-auto lg:mr-10 mt-8 lg:mt-4"/>
                </div>
                <div className="mt-16 lg:mt-4">
                    <img src={p3} alt="" loading="lazy" className="rounded-lg w-3/4 font-color1 hover:scale-105 duration-300 hover:shadow-md mx-auto lg:ml-10"/>
                </div>
                <div className="mt-4 lg:mt-0 text-center lg:text-left">
                    <h4 className="py-4 sm:text-base lg:text-2xl font-logo font-semibold border-b-2 border-sky-400 lg:mr-10">
                        NIKE Boots Store App Design
                    </h4>
                    <p className="indent-6 text-justify text-sm font-logo mt-4 mb-8 mx-auto lg:mr-10 text-gray-300">
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
                    <a href="https://www.figma.com/file/FQxQHhfYoEp33VAwrdC1Gg/NIKE?t=KpXFGU2ecpcngHnS-1"  target="_blank" rel="noreferrer" className="text-base text-sky-400 font-logo font-medium animate-pulse hover:animate-none">View full project</a>
                </div>
            </div>
        </div>
    </div>           
  )
}

export default Portfolio