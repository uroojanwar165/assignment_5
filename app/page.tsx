import Image from "next/image";
import React from "react";
import Header from "@/components/Header";

export default function Home() {
  return (
    <div className = "h-screen">
      <Header/>
       <div className = "flex h-[80%]">
         <div className = "w-[60%] flex flex-col font-serif items-start m-24">
           <h2 className = "font-bold text-[#000000] text-[30px] w-[400px]">IMPECCABLE CRAFTSMANSHIP AND FINESSE</h2>
           <p className="text-[#A29875] w-[400px]">
           An example of intricate workmanship and detail, elegant necklaces and long and short chains form
           a part of our desirable collection.
           </p>
           <button className = "text-white bg-[#A29875] px-6 py-2 p-[10px] rounded-[10px] mt-6">Explore Now</button>
         </div>
         <div className = "w-[40%] flex flex-col justify-center item-start">
           <Image src={"/images/figma_image.png"} alt="figma image"
           width={300}
           height={300}/>
         </div>
       </div>
   </div>
  )
}
