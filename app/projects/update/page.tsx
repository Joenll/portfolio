'use client';

import { useEffect, useState } from "react";
import  { useRouter } from "next/navigation";
import { redirect, useSearchParams } from "next/navigation";

export default function UpdateProject() {
    const router = useRouter();
    const searchParams = useSearchParams();
    const id = searchParams.get("id"); //  Extract `id` from URL query

    console.log("Project ID:", id);

    const [projectName, setProjectName] = useState("");
    const [desc, setDesc] = useState("");
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        if (!id) return;

        //  Fetch existing project data for pre-filling the form
        const fetchProject = async () => {
            try {
                const res = await fetch(`/api/project/${id}`);
                if (!res.ok) throw new Error("Failed to fetch project");

                const project = await res.json();
                setProjectName(project.projectName);
                setDesc(project.desc);
                setLoading(false);
            } catch (error) {
                console.error("Error fetching project:", error);
            }
        };

        fetchProject();
    }, [id]);

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        if (!id) {
            console.error(" Project ID is missing!");
            return;
        }

        const res = await fetch(`/api/project/${id}`, {
            method: "PUT",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ projectName, desc }),
        });

        if (res.ok) {
            const updatedProject = await res.json();
            console.log(" Project updated:", updatedProject);
            router.push("/projects"); //  Correct way to navigate in client components
        } else {
            console.error(" Error updating project");
        }
    };
    if(loading){
        return <p className="text-white text-center">Loading...</p>
    }

    return (
        <form onSubmit={handleSubmit} className="max-w-md mx-auto mt-10 p-6 bg-gray-600 rounded-lg shadow-md">
            <div className="mb-4">
                <label htmlFor="projectName" className="block text-white font-bold mb-2">Project Name:</label>
                <input
                    type="text"
                    
                    value={projectName}
                    onChange={(e) => setProjectName(e.target.value)}
                    className="w-full px-3 py-2 text-gray-900 rounded-lg hover:-white focus:outline-white focus:shadow-outline text-white"
                />
            </div>
            <div className="mb-4 text-white">
                <label htmlFor="desc" className="block text-white font-bold mb-2">Description:</label>
                <textarea
                    
                    value={desc}
                    onChange={(e) => setDesc(e.target.value)}
                    className="w-full px-3 py-2 text-gray-900 rounded-lg focus:outline-white focus:shadow-outline text-white"
                />
            </div>
            <button type="submit" className="w-full bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-lg focus:outline-none focus:shadow-outline">
                Update Project
            </button>
        </form>
    );
}