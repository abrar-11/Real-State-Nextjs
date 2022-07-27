import axios from "axios";

export const baseUrl = "https://bayut.p.rapidapi.com";

export const fetchApi = async (url) => {
    console.log("inside")
   const {data} = await axios.get(url, {
      headers: {
         "X-RapidAPI-Key": "17911df630msh5762bd5cd10aa51p1c70b9jsna4b24278ee58",
         "X-RapidAPI-Host": "bayut.p.rapidapi.com",
      },
   });
   console.log("data",data)
   return data;
};


