import mongoose from "mongoose";

export default async function connect() {
    try {
        await mongoose.connect(process.env.ATLAS_URI, {
            useNewUrlParser: true,
            useUnifiedTopology: true
        });
        console.log("Database connected");
    } catch (error) {
        console.log("Database connection failed", error);
        throw error;  // rethrow to handle in calling function
    }
}
