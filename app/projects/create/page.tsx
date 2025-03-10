'use client';

import { useState } from "react";
import router from "next/router";
import { redirect } from "next/navigation";

export default function CreateProject() {
    const [projectName, setProjectName] = useState("");
    const [desc, setDesc] = useState("");

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        const res = await fetch("/api/add", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({ projectName, desc }),
        });

        if (res.ok) {
            const project = await res.json();
            console.log("Project created:", project);
            redirect("/projects");
        } else {
            console.error("Error creating project");
        }
    };
    return (
        <form onSubmit={handleSubmit} className="max-w-md mx-auto mt-10 p-6 bg-gray-800 rounded-lg shadow-md">
            <div className="mb-4">
                <label htmlFor="projectName" className="block text-white font-bold mb-2">Project Name:</label>
                <input
                    type="text"
                    id="projectName"
                    value={projectName}
                    onChange={(e) => setProjectName(e.target.value)}
                    required
                    className="w-full px-3 py-2 text-gray-900 rounded-lg focus:outline-none focus:shadow-outline text-white"
                />
            </div>
            <div className="mb-4 text-white">
                <label htmlFor="desc" className="block text-white font-bold mb-2">Description:</label>
                <textarea
                    id="desc"
                    value={desc}
                    onChange={(e) => setDesc(e.target.value)}
                    required
                    className="w-full px-3 py-2 text-gray-900 rounded-lg focus:outline-none focus:shadow-outline text-white"
                />
            </div>
            <button type="submit" className="w-full bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-lg focus:outline-none focus:shadow-outline">
                Create Project
            </button>
        </form>
    );
}