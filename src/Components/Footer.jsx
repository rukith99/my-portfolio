import React from 'react'

const Footer = () => {
  return (
    <div className="sm:grid md:flex lg:flex lg:mx-auto text-center sm:mx-auto md:justify-between w-full h-50 sm:h-100 px-4 sm:pt-16 pt-24 pb-16 dark-back font-main font-color2">
        <div className="md:text-base lg:text-lg md:text-center">
            <h2 className="lg:ml-24 sm:pb-2 font-basic text-white font-semibold">Rukith<span className='text-amber-400 ml-2 font-logo font-semibold'>.</span></h2>
        </div>
        <div className="md:text-base lg:text-lg md:text-center">
            <h4 className="sm:pb-2 font-basic">I'm based in Kalutara, Sri Lanka</h4>
        </div>
        <div className="md:text-base lg:text-lg md:text-center">
            <h2 className="lg:mr-24 sm:pb-2 font-basic">@ Rukith Ranasinghe - 2022</h2>
        </div>
    </div>
  )
}

export default Footer