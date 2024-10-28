import mongoose from "mongoose";
const { Schema } = mongoose;

/** Question Schema */
const QuestionSchema = new Schema({
    questions: { type: Array, default: [] }, // array to hold question objects
    answers: { type: Array, default: [] },    // array to hold answer indexes
    createdAt: { type: Date, default: Date.now }
});

export default mongoose.model('Question', QuestionSchema);
