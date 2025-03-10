'use client';

import React, { useEffect, useState, useCallback } from "react";
import Link from "next/link";

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


    

    const handleclick = async () => {
        const res =  await fetch(`/api/${body}`);
        return Response.json(res);
    }

    return (
        <main>
            <div className="flex justify-center items-center text-white py-9 text-6xl mt-9 w-full">
                <div className="mt-9 text-gray-300 w-full max-w-4xl">
                    <div className="flex justify-start gap-5 inline-flex">
                        <h1 className="pt-5 text-4xl">Projects</h1>

                        <Link href="/projects/create" className="place-self-start mt-6">
                                                <button
                                                    type="button"
                                                    className="rounded-md border border-black bg-gray-500 py-1.5 px-5 text-black transition-all hover:bg-green-600 hover:text-white text-center text-sm font-inter flex items-center justify-center"
                                                >
                                                    + Add
                                                </button>
                                            </Link>
                  
                    </div>
                    <div className="text-2xl mt-9">
                        {error ? (
                            <p className="text-red-500">{error}</p>
                        ) : (
                            <table className="min-w-full bg-gray-800">
                                <thead>
                                    <tr>
                                        <th className="py-2 px-4 border-b border-gray-700">No.</th>
                                        <th className="py-2 px-4 border-b border-gray-700">Project Name</th>
                                        <th className="py-2 px-4 border-b border-gray-700">Description</th>
                                        <th className="py-2 px-4 border-b border-gray-700">Actions</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {projects.map((project, index) => (
                                        <tr key={project.id} className="hover:bg-gray-700">
                                            <td className="py-2 px-4 border-b border-gray-700">{index + 1}</td>
                                            <td className="py-2 px-4 border-b border-gray-700">{project.projectName}</td>
                                            <td className="py-2 px-4 border-b border-gray-700">{project.desc}</td>
                                            <td>

                                            <Link href="/projects/create" className="place-self-start mt-6">
                                                <button
                                                    type="button"
                                                    className="rounded-md border border-black bg-gray-500 py-1.5 px-5 text-black transition-all hover:bg-yellow-600 hover:text-white text-center text-sm font-inter flex items-center justify-center"
                                                >
                                                    + Edit
                                                </button>
                                            </Link>

                                           
                                                    <button onClick={handleclick}
                                                        type="button"
                                                        className="rounded-md border border-black bg-gray-500 py-1.5 px-5 text-black transition-all hover:bg-red-600 hover:text-white text-center text-sm font-inter flex items-center justify-center"
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