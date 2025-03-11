import connectDB from "@/app/lib/mongodb";
import Project from "@/models/projects";
import { NextResponse } from "next/server";

export async function GET() {
    await connectDB();
  
    try {
      const projects = await Project.find().lean(); // Convert Mongoose objects to plain JS
  
      const formattedProjects = projects.map((project) => ({
        id: String(project._id), // Convert _id to id
        projectName: project.projectName,
        desc: project.desc,
      }));
  
      console.log("API Response:", formattedProjects); //  Debugging step
      return NextResponse.json(formattedProjects);
    } catch (error) {
      console.error(" Error fetching projects:", error);
      return NextResponse.json({ error: "Internal Server Error" }, { status: 500 });
    }
  }