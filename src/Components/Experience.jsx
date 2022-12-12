import React from 'react';
import html from "../Assets/HTML.png"
import css from "../Assets/CSS.png"
import js from "../Assets/JS.png"
import csharp from "../Assets/CSharp.png"
import vueImage from "../Assets/VUE.png"
import reactImage from "../Assets/React.png"
import tailwindImage from "../Assets/Tailwind.png"
import figma from "../Assets/Figma.png"
import adobexd from "../Assets/AdobeXD.png"

const Experience = () => {

    const techs = [
        {
            id: 1,
            src: html,
            title: 'HTML',
            // style: 'shadow-red-500'
        },
        {
            id: 2,
            src: css,
            title: 'CSS',
            // style: 'shadow-blue-500'
        },
        {
            id: 3,
            src: js,
            title: 'JavaScript',
            // style: 'shadow-yellow-500'
        },
        {
            id: 4,
            src: csharp,
            title: 'C#',
            // style: 'shadow-sky-500'
        },
        {
            id: 5,
            src: vueImage,
            title: 'Vue JS',
            // style: 'shadow-green-500'
        },
        {
            id: 6,
            src: reactImage,
            title: 'React JS',
            // style: 'shadow-cyan-300'
        },
        {
            id: 7,
            src: tailwindImage,
            title: 'Tailwind CSS',
            // style: 'shadow-cyan-400'
        },
        {
            id: 8,
            src: figma,
            title: 'Figma',
            // style: 'shadow-red-500'
        },
        {
            id: 9,
            src: adobexd,
            title: 'Adobe XD',
            // style: 'shadow-pink-600'
        }
    ]

    return (
        <div id="experience" name="experience" className="dark-back w-full h-max">
            <div className="max-w-screen-lg mx-auto p-4 flex flex-col justify-center w-full font-color1">
                <div className="mt-10 lg:mt-20">
                    <div className="text-center">
                    <p className="text-4xl sm:text-6xl font-extrabold font-main text-white border-b-2 border-cyan-500 p-2 inline">
                        Experience
                    </p>
                    </div>
                    <p className="text-base sm:text-2xl text-center font-semibold mt-16 text-sky-400 first:last:  font-logo">
                        Technologies I've experienced in
                    </p>
                </div>
                <div className="w-full grid grid-cols-3 sm:grid-cols-5 gap-8 sm:gap-20 text-center py-4 px-12 sm:px-0
                border-t-2 border-white border-opacity-5 pt-8 border-b-2 pb-8 mt-8">

                    {
                        techs.map(({id, src, title, style}) => (
                            <div key={id} className={`hover:scale-110 duration-300 rounded-lg ${style}`}>
                                <img className="w-52 mx-auto pt-2 sm:pt-6" src={src} alt="" />
                                <p className="mt-4 text-sm pb-2 sm:pb-4 sm:text-lg font-color1 font-main">{title}</p>
                            </div>
                        ) )
                    }
                </div>
            </div>
        </div>
    )
}

export default Experience
