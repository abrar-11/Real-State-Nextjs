import React from "react";
import { baseUrl, fetchApi } from "../../utils/fetchApi";

const Property = ({details}) => {

    // De structuring All necessary details

    const { price, rentFrequency, rooms, title, baths, area, agency, isVerified, description, type, purpose, furnishingStatus, amenities, photos } = details


   return <div>property Details</div>;
};

export default Property;

export const getServerSideProps = async({ params }) => {
   const id = params.propertyId;
   const data = await fetchApi(`${baseUrl}/properties/detail?externalID=${id}`);



   return {
      props: {
        details : data,
      },
   };
};
