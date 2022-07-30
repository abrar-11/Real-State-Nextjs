import React from "react";

const Hero = () => {
   return (
      <div>
         <section className="bg-gray-50 ">
            <div className="py-8 px-4 mx-auto max-w-screen-xl text-center lg:py-16 lg:px-12">
              
               <h1 className="mb-4 text-2xl font-medium tracking-tight leading-none text-gray-700 md:text-5xl lg:text-6xl ">
                 Time To Meet your
               </h1>
               <h1 className="mb-4 text-4xl font-bold tracking-tight leading-none text-emerald-700 md:text-5xl lg:text-6xl ">
                 New Home
               </h1>
               <p className="mb-8 text-lg font-normal text-gray-500 lg:text-xl sm:px-16 xl:px-48 ">
                  Here at Flowbite we focus on markets where technology,
                  innovation, and capital can unlock long-term value and drive
                  economic growth.
               </p>
               <div className="flex flex-col mb-8 lg:mb-16 space-y-4 sm:flex-row sm:justify-center sm:space-y-0 sm:space-x-4">
                  <a
                     href="#"
                     className="inline-flex justify-center items-center py-3 px-5 text-base font-medium text-center text-white rounded-lg  bg-emerald-600 hover:bg-primary-800 focus:ring-4 focus:ring-primary-300 "
                  >
                    Explore Properties
                     <svg
                        className="ml-2 -mr-1 w-5 h-5"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                        xmlns="http://www.w3.org/2000/svg"
                     >
                        <path
                           fill-rule="evenodd"
                           d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                           clip-rule="evenodd"
                        ></path>
                     </svg>
                  </a>

                  
                  
               </div>
            </div>
         </section>
      </div>
   );
};

export default Hero;
