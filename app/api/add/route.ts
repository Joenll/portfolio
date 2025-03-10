import connectDB from "@/app/lib/mongodb";
import Project from "@/models/projects";
import { NextRequest, NextResponse } from "next/server";
import { json } from "stream/consumers";

export async function POST(req: NextRequest, res: NextResponse){
    await connectDB();

    try{
        const {projectName, desc} = await req.json();
        
        const project = await Project.create({
            projectName,
            desc
        });

        return NextResponse.json(project, { status: 201 });
    }catch (error) {
        console.error("Error creating project:", error);
}

}