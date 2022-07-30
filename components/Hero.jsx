import React from "react";
import Image from "next/image";
import Background from "../assets/images/background-img.jpg";
const Hero2 = () => {
   return (
      <div className="flex justify-between items-center flex-wrap my-20">
         {/* Content Starts */}

         <div class="sm:text-center lg:text-left w-6/12">
            <h1 class="font-extrabold text-gray-800   text-5xl">
               Time to Meet Your
            </h1>
            <h1 class=" font-extrabold text-emerald-600  text-6xl">
               New House
            </h1>
            <p class="mt-3 text-base text-gray-500 sm:mt-5 sm:text-md sm:max-w-xl sm:mx-auto md:mt-5 md:text-md lg:mx-0">
               Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab
               praesentium dolorem dolor iste eveniet cupiditate minima.
               Voluptas perspiciatis nisi aliquid, repudiandae, laborum quod
               dolor consequuntur sapiente, rem reprehenderit veniam culpa!
            </p>
            <div class="mt-5 sm:mt-8 sm:flex sm:justify-center lg:justify-start">
               <div class="mt-3 sm:mt-0 ">
                  <a
                     href="#"
                     class="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-emerald-700 bg-emerald-200 hover:bg-emerald-300 md:py-4 md:text-sm md:px-10"
                  >
                     Explore Properties
                  </a>
               </div>
            </div>
         </div>

         {/* Img Starts */}
         <div class="lg:w-1/2">
            <Image
               src={Background}
               class="h-full w-full object-cover sm:h-72 md:h-96 lg:w-full lg:h-full"
            />
         </div>
      </div>
   );
};

export default Hero2;
