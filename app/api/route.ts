import connectDB from "@/app/lib/mongodb";
import Project from "@/models/projects";

export async function GET() {
    
    await connectDB();

    const project = await Project.find({});
    return Response.json(project);
}