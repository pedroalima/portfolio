import mongoose from "mongoose";

const EducationSchema = new mongoose.Schema({
    curso: String,
    ano: String,
    faculdade: String,
}, { timestamps: true });

const Education = mongoose.models.Education || mongoose.model("Education", EducationSchema);

export default Education;