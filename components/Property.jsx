import millify from "millify";
import Link from "next/link";
import React from "react";
import { MdVerifiedUser, MdOutlineBed } from "react-icons/md";
import { BiBath } from "react-icons/bi";
const Property = ({ data }) => {
   const {
      coverPhoto,
      price,
      rentFrequency,
      rooms,
      title,
      baths,
      area,
      isVerified,
      externalID,
   } = data;

   const displayPrice = () => {
      return rentFrequency
         ? millify(price) + `/ ${rentFrequency}`
         : millify(price);
   };

   const displayTitle = () => {
      return title.length > 45 ? title.substring(0, 35) + "..." : title;
   };

   return (
      <>
         <Link href={`/property/${externalID}`}>
            <div className=" shadow p-2 md:h-[22rem] w-96 max-w-sm">
               <div className=" overflow-hidden h-48">
                  <img
                     src={coverPhoto.url}
                     alt=""
                     className="w-full h-full   rounded-md object-cover"
                  />
               </div>
               <div className="my-4 px-3">
                  <p className="text-md flex items-center">
                     {isVerified && (
                        <MdVerifiedUser className="text-emerald-600 inline-block mr-1" />
                     )}

                     <span className="font-medium text-gray-700">
                        AED {displayPrice()}
                     </span>
                  </p>
                  <div className="flex space-x-2 my-2">
                     <p className="text-md flex items-center ">
                        <MdOutlineBed className="w-5 h-5 text-gray-500 mr-1 " />
                        <span className="text-sm">{rooms}</span>
                     </p>
                     <p className="text-md flex items-center">
                        <BiBath className="w-5 h-5 text-gray-500 mr-1 " />
                        <span className="text-sm">{baths}</span>
                     </p>
                  </div>
                  <p className="text-emerald-800 text-sm mb-2">
                     {millify(area)} sqft For Sale
                  </p>
                  <p className="text-sm">{displayTitle()}</p>
               </div>
            </div>
         </Link>
      </>
   );
};

export default Property;
