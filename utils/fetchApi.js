import axios from "axios";

export const baseUrl = "https://bayut.p.rapidapi.com";

export const fetchApi = async (url) => {
    console.log("inside")
   const {data} = await axios.get(url, {
      headers: {
         "X-RapidAPI-Key":    process.env.API_KEY,
         "X-RapidAPI-Host": "bayut.p.rapidapi.com",
      },
   });
   console.log("data",data)
   return data;
};


