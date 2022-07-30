import React from "react";
import Property from "../components/Property";
const PropertyContainer = ({ properties ,title }) => {
    // console.log(properties);
   return ( 
      <>
         <div className="my-12">
            <h1 className="text-center text-3xl font-semibold text-gray-700 py-8">Properties For {title}</h1>
            <div className="flex justify-center items-center flex-wrap gap-7" >
               {properties.map((property, index) => {
                  return <Property data={property} key={index} />;
               })}
            </div>
         </div>
      </>
   );
};

export default PropertyContainer;
