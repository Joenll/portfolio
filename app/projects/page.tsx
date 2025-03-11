'use client';

import React, { useEffect, useState, useCallback } from "react";
import Link from "next/link";
import Project from "@/models/projects";

export default function Projects() {
    interface Project {
        id: string;
        projectName: string;
        desc: string;
    }


    

    const [projects, setProjects] = useState<Project[]>([]);
    const [error, setError] = useState<string | null>(null);

    const fetchProjects = useCallback(async () => {
        try {
            const res = await fetch("/api");
            if (!res.ok) {
                throw new Error("Failed to fetch projects");
            }
            const data = await res.json();
            setProjects(data);
        } catch (error) {
            if (error instanceof Error) {
                setError(error.message);
            } else {
                setError("An unknown error occurred");
            }
        }
    }, []);

    useEffect(() => {
        fetchProjects();
    }, [fetchProjects]);





    const handleclick = async (id: string | undefined) => {
        if (!id) {
          console.error(" handleClick received undefined ID!");
          return;
        }
      
        console.log(` Sending DELETE request to: /api/project/${id}`);
      
        try {
          const res = await fetch(`/api/project/${id}`, {
            method: "DELETE",
            headers: { "Content-Type": "application/json" },
          });
      
          const result = await res.json();
          console.log("Server Response:", result); // Debugging step
      
          if (!res.ok) {
            throw new Error(`Failed to delete project: ${res.status} ${res.statusText}`);
          }
      
          console.log("Project deleted successfully");
          setProjects((prevProjects) => prevProjects.filter((project) => project.id !== id));
        } catch (error) {
          console.error(" Can't Delete Project:", error);
        }
      };
      useEffect(() =>{
        console.log("Updated:", projects);
    }, [projects]);





    return (
        <main>
            <div className="flex justify-center items-center text-white py-9 text-6xl mt-9 w-full">
                <div className="mt-9 text-gray-300 w-full max-w-4xl">
                    <div className="flex justify-start gap-5 inline-flex">
                        <h1 className="pt-5 text-4xl">Projects</h1>

                        <Link href="/projects/create" className="place-self-start mt-6">
                                                <button
                                                    type="button"
                                                    className="text-white rounded-md border border-black bg-gray-500 py-1.5 px-5 text-black transition-all hover:bg-green-600 hover:text-white text-center text-sm font-inter flex items-center justify-center"
                                                >
                                                    + Add
                                                </button>
                                            </Link>
                  
                    </div>
                    <div className="text-2xl mt-9">
                        {error ? (
                            <p className="text-red-500">{error}</p>
                        ) : (
                            <table className="min-w-full bg-gray-800 border-separate border-spacing-2 border border-gray-400 table-auto border-spacing-2 md:border-spacing-4 border-collapse border-separate border border-white ">
                                <thead>
                                    <tr>
                                        <th className="py-2 px-4 border-b border-gray-700 border border-white">No.</th>
                                        <th className="py-2 px-4 border-b border-gray-700 border border-white">Project Name</th>
                                        <th className="py-2 px-4 border-b border-gray-700 border border-white">Description</th>
                                        <th className="py-2 px-7 border-b border-gray-700 border border-white">Actions</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {projects.map((project, index) => (
                                        
                                        <tr key={project.id} >
                                            <td className="py-2 px-4 border-b border-gray-700">{index + 1}</td>
                                            <td className="py-2 px-4 border-b border-gray-700">{project.projectName}</td>
                                            <td className="py-2 px-4 border-b border-gray-700">{project.desc}</td>

                                         
                                            <td className="flex justify-center items-center gap-2">

                                            <Link href="/projects/create" className="place-self-start mt-6">
                                                <button
                                                    type="button"
                                                    className="text-white rounded-md border border-black bg-gray-500 mb-6 py-1.5 px-5 text-black transition-all hover:bg-yellow-600 hover:text-white text-center text-sm font-inter flex items-center justify-center"
                                                >
                                                    + Edit
                                                </button>
                                            </Link>

                                           
                                            <button
                                                type="button"
                                                onClick={() => {
                                                    console.log(" Rendered Project:", project);
                                                    console.log(` Button clicked for ID: ${project.id}`);
                                                    handleclick(project.id);
                                                }}
                                                className="text-white rounded-md border border-black bg-gray-500 py-1.5 px-5 text-black transition-all hover:bg-red-600 hover:text-white text-center text-sm font-inter flex items-center justify-center"
                                                >
                                                - Remove
                                                </button>
                                             
                                            </td>
                                            
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        )}
                    </div>
                </div>
            </div>
            <div className="flex justify-center items-center mr-200">
                <Link href="/" className="place-self-start">
                    <button
                        type="button"
                        className="rounded-md border border-black bg-blue-500 py-1.5 px-5 text-black transition-all hover:bg-black hover:text-yellow-500 text-center text-2xl font-inter flex items-center justify-center"
                    >
                        Back
                    </button>
                </Link>
            </div>
        </main>
    );
}