import React from "react";
import { baseUrl, fetchApi } from "../../utils/fetchApi";
import { MdVerifiedUser, MdOutlineBed } from "react-icons/md";
import { BiBath } from "react-icons/bi";
import ImageSlider from "../../components/ImageSlider";
import millify from "millify";
import { calcLength } from "framer-motion";

const Property = ({ details }) => {
   // De structuring All necessary details
   // console.log(details);
   const {
      price,
      rentFrequency,
      rooms,
      title,
      baths,
      area,
      agency,
      isVerified,
      description,
      type,
      purpose,
      furnishingStatus,
      photos,
   } = details;

   const displayPrice = () => {
      return rentFrequency
         ? millify(price) + `/ ${rentFrequency}`
         : millify(price);
   };

   return (
      <>
         <div className="container my-16 w-10/12 mx-auto">
            {/* Photo SLider */}
            <ImageSlider photos={photos} />

            <div className="my-4 ">
               <p className="text-md flex items-center">
                  {isVerified && (
                     <MdVerifiedUser className="text-emerald-600 inline-block mr-1" />
                  )}

                  <span className="font-medium text-gray-700 text-lg">
                     AED {displayPrice()}
                  </span>
               </p>
               <div className="flex space-x-2 my-2">
                  <p className="text-md flex items-center ">
                     <MdOutlineBed className="w-5 h-5 text-gray-500 mr-1 " />
                     <span className="text-md">{rooms}</span>
                  </p>
                  <p className="text-md flex items-center">
                     <BiBath className="w-5 h-5 text-gray-500 mr-1 " />
                     <span className="text-md">{baths}</span>
                  </p>
               </div>
               <p className="text-emerald-800 text-md mb-2">
                  {millify(area)} sqft For Sale
               </p>
               <p className="text-lg text-red-700">{title}</p>
            </div>

            <div className="my-3">
               <h1 className="text-3xl text-gray-700 mb-4">
                  Project Description
               </h1>

               <p className="text-md">{description}</p>
            </div>

            <div className="flex space-x-4 mb-3">
               <p className="text-md text-emerald-700">Furnishing Status : </p>
               <p>{furnishingStatus}</p>
            </div>
            <div className="flex space-x-4">
               <p className="text-md text-emerald-700">Purpose : </p>
               <p>{purpose}</p>
            </div>
         </div>
      </>
   );
};

export default Property;

export const getServerSideProps = async ({ params }) => {
   const id = params.propertyId;
   const data = await fetchApi(`${baseUrl}/properties/detail?externalID=${id}`);

   return {
      props: {
         details: data,
      },
   };
};
