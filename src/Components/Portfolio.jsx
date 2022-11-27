import React from 'react'
import p1 from "../Assets/proj1.jpg"
import p2 from "../Assets/proj2.jpg"
import p3 from "../Assets/proj3.jpg"

const Portfolio = () => {
  return (
    <div id="portfolio" name="portfolio" className="dark-back w-full h-max">
        <div className="max-w-screen-lg mx-auto p-4 flex flex-col justify-center w-full font-color1">
            <div className="mt-10 lg:mt-20">
                <div className="text-center">
                <p className="text-4xl sm:text-6xl font-bold font-logo text-white border-b-2 border-cyan-500 p-2 inline">
                    Portfolio
                </p>
                </div>
                <p className="text-base sm:text-2xl text-center font-semibold mt-16 mb-16 text-sky-400 font-logo">
                    Freely inspired design projects
                </p>
            </div>
            <div className="lg:grid md:grid grid-cols-2 grid-rows-3 gap-24 justify-between border-t-2 border-white border-opacity-5 pt-8 border-b-2 pb-8">
                <div className="">
                    <img src={p1} alt="" loading="lazy" className="rounded-t-lg w-3/4 border-b-4 border-sky-400 font-color1 hover:scale-105 duration-300 mx-auto lg:ml-10"/>
                </div>
                <div className="mt-4 lg:mt-0 text-center lg:text-left">
                    <h4 className="py-4 sm:text-lg lg:text-2xl font-logo font-semibold border-b-2 border-sky-400 lg:mr-10 ">Redesign for Sampath Vishwa App</h4>
                    <p className=" indent-6 text-justify text-sm font-logo mt-4 mb-8 text-gray-300 mx-auto lg:mr-10">
                                Here is my project of redesigning the mobile app for
                                well-known bank called Sampath Bank in Sri Lanka.
                                Currently the "Sampath Vishwa" the mobile banking app
                                is only available for android users.
                                So I decided to design user interfaces for the
                                iOS devices. I used the android user interfaces as the 
                                references and redesign the mobile app as suitable for
                                iOS interface.
                                Please click the link below to ckeck the full project on Figma                             
                    </p>
                    <a href="https://www.figma.com/file/RIt37N89APiur5r1NUc9gj/Untitled?node-id=0%3A1&t=KpXFGU2ecpcngHnS-1" target="_blank" rel="noreferrer" className="text-base text-sky-400 font-logo font-medium animate-pulse hover:animate-none">View full project</a>
                </div>
                <div className="mt-14 lg:mt-0 text-center lg:text-left">
                    <h4 className="py-4 sm:text-base lg:text-2xl font-logo font-semibold border-b-2 border-sky-400 lg:ml-10">
                        Simply Beverages Concept App 
                    </h4>
                    <p className="text-justify indent-6 text-sm font-logo mt-4 mb-8 mx-auto lg:ml-10 text-gray-300">
                            The Simply Orange Juice Company is an American fruit juice company
                            based in Apopka, Florida that was founded in 2001 and
                            is a brand of The Coca-Cola Company. 
                            So got inspired after saw their logo and brandings
                            and decided to do a concept design of iOS mobile app interfaces for
                            Simply Beverages online purchasing app. The project still in
                            the developing stages hope to update it in near future.
                            Please click the link below to ckeck the full project on Figma  
                    </p>  
                    <a href="https://www.figma.com/file/oshEsGGLTq99KtzFPxVWwH/Simply-Beverages?t=KpXFGU2ecpcngHnS-1"  target="_blank" rel="noreferrer" className="text-base text-sky-400 font-logo font-medium lg:ml-10 animate-pulse hover:animate-none">View full project</a>  
                </div>
                <div className="">
                    <img src={p2} alt="" loading="lazy" className="rounded-t-lg w-3/4 border-b-4 border-sky-400 font-color1 hover:scale-105 duration-300 mx-auto lg:mr-10 mt-8 lg:mt-0"/>
                </div>
                <div className="mt-16 lg:mt-10">
                    <img src={p3} alt="" loading="lazy" className="rounded-t-lg w-3/4 border-b-4 border-sky-400 font-color1 hover:scale-105 duration-300 hover:shadow-md mx-auto lg:ml-10"/>
                </div>
                <div className="mt-4 lg:mt-0 text-center lg:text-left">
                    <h4 className="py-4 sm:text-base lg:text-2xl font-logo font-semibold border-b-2 border-sky-400 lg:mr-10">
                        NIKE Boots Store Concept App
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