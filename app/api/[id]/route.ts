import connectDB from "@/app/lib/mongodb";
import Project from "@/models/projects";
import { NextRequest, NextResponse } from "next/server";


export async function DELETE(req: Request, { params }: { params: { id: string } }) {
  await connectDB(); // Connect to DB

  try {
    // 1️ Extract the ID from params
    const { id } = params;

    // 2️ Delete the project by ID
    const deletedProject = await Project.findByIdAndDelete(id);

    // 3 Check if project was found
    if (!deletedProject) {
      return NextResponse.json({ error: "Project not found" }, { status: 404 });
    }

    // 4️ Return success response
    return NextResponse.json({ message: "Project deleted successfully" });
  } catch (error) {
    console.error("Error deleting project:", error);
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
