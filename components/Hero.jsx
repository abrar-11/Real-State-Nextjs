import React from "react";
import Image from "next/image";
import Background from "../assets/images/background-img.jpg";
const Hero = () => {
   return (
      <div className="flex justify-between items-center flex-wrap my-20">
         {/* Content Starts */}

         <div className="sm:text-center lg:text-left w-full lg:w-6/12 ">
            <h1 className="font-extrabold text-gray-800   text-5xl">
               Time to Meet Your
            </h1>
            <h1 className=" font-extrabold text-emerald-600  text-6xl">
               New Home
            </h1>
            <p className="mt-3 text-base text-gray-500 sm:mt-5 sm:text-md sm:max-w-xl sm:mx-auto md:mt-5 md:text-md lg:mx-0">
               Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab
               praesentium dolorem dolor iste eveniet cupiditate minima.
               Voluptas perspiciatis nisi aliquid, repudiandae, laborum quod
               dolor consequuntur sapiente, rem reprehenderit veniam culpa!
            </p>
            <div className="mt-5 sm:mt-8 sm:flex sm:justify-center lg:justify-start">
               <div className="mt-3 sm:mt-0 ">
                  <a
                     href="#"
                     className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-emerald-700 bg-emerald-200 hover:bg-emerald-300 md:py-4 md:text-sm md:px-10"
                  >
                     Explore Properties
                  </a>
               </div>
            </div>
         </div>

         {/* Img Starts */}
         <div className="lg:w-1/2 hidden lg:block">
            <Image
               src={Background}
               className="h-full w-full object-cover sm:h-72 md:h-96 lg:w-full lg:h-full"
               style={{clipPath: "polygon(19% 0, 100% 0%, 100% 99%, 0% 100%)"}}
               alt="Home"
            />
         </div>
      </div>
   );
};

export default Hero;
