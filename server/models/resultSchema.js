import mongoose from "mongoose";
const { Schema } = mongoose;

/** Result Schema */
const ResultSchema = new Schema({
    username: { type: String, required: true },
    results: { type: Array, default: [] },
    attempts: { type: Number, default: 0 },
    points: { type: Number, default: 0 },
    achieved: { type: String, default: '' },
    createdAt: { type: Date, default: Date.now }
});

export default mongoose.model('Result', ResultSchema);
