import React from "react";
import Property from "../components/Property";
const PropertyContainer = ({ properties }) => {
   return (
      <>
         <div className="">
            <h1>Properties For Sale</h1>
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
