import React from "react";
import car1 from "../../assets/car3.png";
import car2 from "../../assets/car11.png";
import car3 from "../../assets/car4.png";

const CarListData = [
    {
        name: "BMW UX",
        price: 100,
        image: car1,
        aosDelay: "0",
    },
    {
        name: "KIA UX",
        price: 140,
        image: car2,
        aosDelay: "500",
    },
    {
        name: "BMW UX",
        price: 100,
        image: car3,
        aosDelay: "1000",
    },
];

const CarList = () => {
    return (
        <div className="pb-24 pt-12 bg-white dark:bg-dark dark:text-white">
            <div className="container">
                {/* heading */}
                <h1
                    data-aos="fade-up"
                    className="text-3xl md:text-4xl font-semibold font-serif mb-3"
                >
                    Lorem ipsum dolor sit.
                </h1>

                <p data-aos="fade-up" className="text-sm pb-10">
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                </p>

                {/* Car Listing cards */}
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-16">
                    {CarListData.map((car, index) => {
                        return (
                            <div
                                key={index}
                                data-aos="fade-up"
                                data-aos-duration={car.aosDelay}
                                className="space-y-3 border-2 border-gray-300
                                 hover:border-primary p-3 rounded-xl relative group"
                            >
                                <div className="w-full h-[120px]">
                                    <img
                                        className="w-full h-[120px] object-contain 
                                        sm:translate-x-8 group-hover:sm:translate-x-16 duration-700"
                                        src={car.image}
                                        alt={car.name}
                                    />
                                </div>

                                <div className="space-y-2">
                                    <h1 className="text-primary font-semibold">
                                        {car.name}
                                    </h1>

                                    <div>
                                        <p>${car.price}/Day</p>
                                        <a href="#">Details</a>
                                    </div>
                                </div>

                                <p className="text-xl font-semibold absolute top-0 left-3">
                                    12KM
                                </p>
                            </div>
                        );
                    })}
                </div>

                {/* Button */}
                <div
                    className="grid place-content-center mt-8">
                    <button className="px-6 py-2 bg-yellow-400 text-black rounded-lg 
                     hover:bg-yellow-500
                     transition duration-300 shadow-md">
                        Get Started
                    </button>
                </div>
            </div>
        </div>
    );
};

export default CarList;