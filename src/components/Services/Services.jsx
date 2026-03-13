import React from "react"

const skillData = [

    {
        name: "Best Price",
        icon: (
            <FaCameraRetro className="text-5xl
                text-primary group-hover:text-black
                duration-300" />
        ),
        link: "#",
        description: "dhwgfhwb cbwhc ejbdh m",
        aosDelay: "0"
    },

]

const Services = () => {
    return (
        <div className="py-14 dark:bg-black
    dark:text-white sm:min-h[600px] sm:grid 
    sm:place-items-center">
            <div className="container">
                <div className="pb-12"></div>
                <h1 className="text-3xl font-semibold
            text-center font-serif sm:text-4xl">
                    Why Choose Us</h1>
            </div>
            <div className=" grid grid-cols1 sm:grid-cols2
             md:grid-cols3 gap-4">
                <div className="data-aos:fade-up">


                </div>
            </div>



        </div>

    )
};

export default Services;