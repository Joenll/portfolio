import { Schema, model, models, Document } from "mongoose";

// Define an interface for the project details
interface ProjectDetails extends Document {
    projectName: string;
    desc: string;
}

// Define the schema using the interface
const projectSchema = new Schema<ProjectDetails>({
    projectName: { type: String, required: true },
    desc: { type: String, required: true }
});

// Create and export the model
const Project = models.Project || model<ProjectDetails>("Project", projectSchema, "project");
export default Project;