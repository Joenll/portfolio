import Link from "next/link";
import React from "react";

export default function Page(){
  return (
    <>
      <main>
        <div className="flex flex-col justify-center items-center text-white py-9 text-6xl mt-9 w-full">
          <div className="grid grid-cols-3 ml-5">
            <h1 className="pt-5 place-self-auto ">Hey, I'm Jo.</h1>
            </div>
         
          <div className="grid grid-cols-2 gap-9 mt-9 text-2xl text-gray-300 w-full max-w-4xl">
           
            <p className="text-left mt-17 gap-2">
              An intern from   <img src="/123.png" width={130} className="inline-block mt-4 px-3" />
              
             
              aspiring to be a professional web developer.
            </p>
            
            <img src="/images.jpg" width={250} height={250} className="justify-self-end rounded-lg border-5 border-gray-400 "/>
          </div>

          <div className="grid grid-cols-6 ml-20">
            <Link href="/projects">
              <button type="button" className="rounded-full border border-black bg-blue-500 py-1.5 px-5 text-black transition-all hover:bg-black hover:text-yellow-500 text-center text-2xl font-inter flex items-center justify-center  ">
                My Projects
              </button>  
            </Link>
          </div>
        </div> 
      </main>
    </>
  )
}