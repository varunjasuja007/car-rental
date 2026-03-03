import React from "react";
import carPng from "../../assets/car1.png";
import yellowCarPng from "../../assets/car.png";


const Hero = ({ theme }) => {
    return (
        <div className="dark:bg-black
        dark:text-white duration-300 relative z-0">
            <div className="container mx-auto px-12 min-h-[620px] flex items-center">"
                <div className="grid
             place-items-center grid-cols-1
             sm:grid-cols-2">
                    <div
                        data-aos="zoom-in"
                        data-aos-duration="1300"

                        className="order-1
                    sm:order-2">
                        <img src={theme === "dark" ?
                            carPng : yellowCarPng} alt=""
                            className="relative -z-10 max-h-[600px] sm:scale-125
                            drop-shadow-[2px_20px_6px_rgba(0,0,0,0.45)]" />
                    </div>
                    <div className="order-2
                    sm:order-1 space-y-5 sm:pr-32 " >
                        <p
                            data-aos="fade-up"
                            data-aos-delay="0"
                            className="text-primary
                        text-2xl font-serif">
                            Effortless</p>
                        <h1
                            data-aos="fade-up"
                            data-aos-delay="600"
                            className="text-5xl lg:text-7xl
                             font-semibold
                            font-serif ">
                            Car Rental</h1>
                        <p
                            data-aos="fade-up"
                            data-aos-delay="1000"
                        >Hello, Welcome to our Store!
                            Rent a car from wide range of self drive cars
                            providers available online.
                            Drive safe with _______ Cars!
                        </p>
                        <button
                            data-aos="fade-up"
                            data-aos-delay="1500"
                            className="btn 
                        bg-primary text-black px-6 py-2 rounded-md 
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