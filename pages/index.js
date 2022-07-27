import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

import { baseUrl,fetchApi } from '../utils/fetchApi'


export default function Home({forSale}) {
  console.log(forSale)
  return (
    <div className="">
      <Head>
        <title>Real State Nextjs Application</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head> 

     Real State Application Nextjs
    </div>
  )
}



export const  getStaticProps= async() =>{
  const forSale = await fetchApi(`${baseUrl}/properties/list?locationExternalIDs=5002&purpose=for-sale&hitsPerPage=9`);
  // const forRent = await fetchApi(`${baseUrl}/properties/list?locationExternalIDs=5002&purpose=for-rent&hitsPerPage=9`);


  return {
    props:{
      forSale : forSale?.hits,
      // forRent : forRent?.hits,
    }
  }
}