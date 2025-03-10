import Link from "next/link";
import React from "react";
import Projects from "../projects/page";
import About from "../about/page";

export default function Nav(){
    return(
        
        
        <div>
            <nav className="flex justify-between items-center mt-5 mr-7 text-white ">
            <h1 className="ml-4 text-4xl ">
                Portfolio
            </h1>
            
             <div className="flex justify-end mr-7 flex gap-4 text-gray-400 ">
             <div className=" group hover:shadow-lg hover:border-transparent ">
                <Link href="/" className="flex-col flex gap-4 group-hover:text-white">
                Home
                </Link>
                </div>

             <div className=" group hover:shadow-lg hover:border-transparent ">
                <Link href="/projects" className="flex-col flex gap-4 group-hover:text-white">
                Projects
                </Link>
                </div>

                <div className=" group hover:shadow-lg hover:border-transparent ">
                <Link href="/about" className="flex-col flex gap-4 group-hover:text-white">
                About
                </Link>
                </div>

                
            </div>

            </nav>
        </div>
    )
}