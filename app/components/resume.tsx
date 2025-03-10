import Link from "next/link";
import React from "react";
import Projects from "../projects/page";
import About from "../about/page";

export default function Resume(){
    return(
        <div className="flex  flex-col md:flex-row">
            <aside className="w-ful md:w-1/3 h-auto bg-black- text-white">
            <img src="/shrek.jpg" className="w-full rounded-lg" />
                <h1 className="mt-8 text-2xl  text-center ">ABOUT ME</h1>
                <p className=" mt-3 w-sm text-center  ">Ako si Jo</p>
            </aside>
            <main className="w-full md:w-2/3 p-5 bg-gray-200 flex flex-col items-center ">
                <h1 className=" filter drop-shadow-lg  text-4xl place-content-start bg-clip-text text-transparent bg-gradient-to-r from-blue-900 to-yellow-500 font-sans uppercase">Jonelle Manalastas</h1>
                
                <p className="text-gray-500 mt-3">San Pedro, Mallig, Isabela</p>
                <p className="text-gray-500">jonelle.aretex@gmail.com</p>
                <p className="text-gray-500">+(63) 9193797014</p>


            <div className="w-full text-left mt-9 ">
                <h1 className="font-thin text-3xl ml-9"> EXPERIENCE</h1>
            </div>
            <div >
            <p className="text-gray-500 mt-3 w-md text-left font-bold">Door-to-Door Sales Representative</p>
            <p className="text-gray-500  w-md text-left italic">2019 - Family Business - Various Provinces</p>
            <p className="text-gray-500  w-md  text-left break-normal">Promoted & Sold home products, including plastic tables,chairs and buckets, through door-to-door sales campaigns</p>    
            </div>


            <div className="w-full text-left mt-9 ">
                <h1 className="font-thin text-3xl ml-9"> EDUCATION</h1>
            </div>
            <div>
            <p className="text-gray-500 mt-3 w-md text-left font-bold">TERTIARY (2021 - PRESENT)</p>
            <p className="text-gray-500  w-md text-left italic">ISABELA STATE UNIVERSITY MAIN CAMPUS</p>
            <p className="text-gray-500  w-md  text-left break-normal">San Fabian, Echague, Isabela</p>
            <p className="text-gray-500  w-md  text-left break-normal">Bachelor of Science in Information Technology</p>        
            

            <p className="text-gray-500 mt-3 w-md text-left font-bold">SECONDARY (2015 - 2021)</p>
            <p className="text-gray-500  w-md text-left italic">MALLIG PLAINS NATIONAL HIGHSCOOL</p>
            <p className="text-gray-500  w-md  text-left break-normal">Centro 1, Mallig, Isabela</p>
            <p className="text-gray-500  w-md  text-left break-normal">Junior High School</p>        

            <p className="text-gray-500 mt-3 w-md text-left font-bold">ELEMENTARY (2009 - 2015)</p>
            <p className="text-gray-500  w-md text-left italic">SAN PEDRO ELEMENTARY SCHOOL</p>
            <p className="text-gray-500  w-md  text-left break-normal">San Pedro, Mallig, Isabela</p>
            </div>

            </main>
        </div>
    )
}