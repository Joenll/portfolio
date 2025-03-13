import connectDB from "@/app/lib/mongodb";
import Project from "@/models/projects";
import { NextRequest, NextResponse } from "next/server";
import mongoose from "mongoose"; //  Import for ObjectId validation

export async function DELETE(req: Request, { params }: { params: { id?: string } }) {
  await connectDB(); //  Ensure database is connected

  console.log(" Received DELETE request for ID:", params.id); //  Debugging step

  try {
    //  Check if ID exists and is a valid MongoDB ObjectId
    if (!params.id || !mongoose.Types.ObjectId.isValid(params.id)) {
      console.error(" Invalid or missing ID:", params.id);
      return NextResponse.json({ error: "Invalid ID" }, { status: 400 });
    }

    //  Delete project by ID
    const deletedProject = await Project.findByIdAndDelete(params.id);

    if (!deletedProject) {
      console.error(" Project not found for ID:", params.id);
      return NextResponse.json({ error: "Project not found" }, { status: 404 });
    }

    console.log(" Project deleted:", deletedProject);
    return NextResponse.json({ message: "Project deleted successfully" });

  } catch (error) {
    console.error(" Error deleting project:", error);
    return NextResponse.json({ error: "Internal Server Error" }, { status: 500 });
  }
}

export async function PUT(req: Request, { params }: { params: { id: string } }) {
  await connectDB(); // Connect to DB

  try {
    // 1️ Extract the ID from params
    const { id } = params;

    // 2️ Extract the updated data from request body
   const body = await req.json();
   const {projectName, desc} = body;

    // 3️ Perform the update operation
  const updatedProject = await Project.findByIdAndUpdate(id, {projectName, desc}, {new: true});

    // 4️ Check if project was found
    if (!updatedProject) {
      return NextResponse.json({ error: "Project not found" }, { status: 404 });
    }

    // 5️ Return success response with updated project
    return NextResponse.json({ message: "Project updated successfully", project: updatedProject });
  } catch (error) {
    console.error("Error updating project:", error);
    return NextResponse.json({ error: "Internal Server Error" }, { status: 500 });
  }
}


export async function GET(req: Request, { params }: { params: { id?: string } }) {
  await connectDB();

  console.log(" Received GET request for ID:", params.id); // Debugging

  if (!params.id) {
      return NextResponse.json({ error: "ID is required" }, { status: 400 });
  }

  try {
      const project = await Project.findById(params.id).lean();
      if (!project) {
          return NextResponse.json({ error: "Project not found" }, { status: 404 });
      }

      return NextResponse.json( project);
  } catch (error) {
      console.error(" Error fetching project:", error);
      return NextResponse.json({ error: "Internal Server Error" }, { status: 500 });
  }
}