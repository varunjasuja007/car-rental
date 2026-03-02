import React from "react";
import carPng from "../../assets/car1.png";

const Hero = () => {
    return (
        <div className="dark:bg-black
        dark:text-white duration-300">
            <div className="container min-h-[620px]
            flex">
                <div className="grid
             place-itme-center grid-cols1
             sm:grid-cols-2">
                    <div className="order-1
                    sm:order-2">
                        <img src={carPng} alt="" />
                    </div>
                    <div className="order-2
                    sm:order-1 " >
                        <p className="text-primary
                        text-2xl font-serif">
                            Effortless</p>
                        <h1
                            className="text-5xl lg:text-7xl
                             font-semibold
                            font-serif ">
                            Car Rental</h1>
                        <p>Hello, Welcome to our Store!
                            Rent a car from wide range of self drive cars
                            providers available online.
                            Drive safe with Sanitised Cars!
                        </p>
                        <button className="btn 
                        bg-primary text-black px-6 py-2 reound-md 
                        hover:bg-primary/80
                        duration-300">Get Started
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Hero;