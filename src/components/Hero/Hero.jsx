import React from "react";
import carPng from "../../assets/car1.png";

const Hero = () => {
    return (
        <div className="dark:bg-black
        dark:text-whit duration-300">
            <div className="container min-h-[620px]">
                <div className="grid
             place-itme-center grid-cols1
             sm:grid-cols-2">
                    <div className="order-1
                    sm:order-2">
                        <img src={carPng} alt="" />
                    </div>
                    <div className="order-2
                    sm:order-1" >
                        <p>Effortless</p>
                        <h1>Car Rental</h1>
                        <p>Lorem ipsum dolor sit amet,</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Hero;