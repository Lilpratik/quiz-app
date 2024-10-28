import Questions from "../models/questionSchema.js";
import Result from "../models/resultSchema.js";
import questions, { answer } from "../database/data.js";

/** get all questions */
export async function getQuestions(req, res) {
    try {
        let q = await Questions.find();
        if (q.length === 0) {
            await Questions.insertMany({ questions, answers: answer });
            q = await Questions.find();
        }
        res.json(q);
    } catch (error) {
        res.json({ error });
    }
}

/** insert all questions */
export async function insertQuestions(req, res) {
    try {
        await Questions.insertMany({ questions, answers: answer });
        res.json({ msg: "Questions inserted successfully!" });
    } catch (error) {
        res.json({ error });
    }
}

/** delete all questions */
export async function dropQuestions(req, res) {
    try {
        await Questions.deleteMany();
        res.json({ msg: "Questions Deleted Successfully!" });
    } catch (error) {
        res.json({ error });
    }
}

/** get all results */
export async function getResult(req, res) {
    try {
        const r = await Result.find();
        res.json(r);
    } catch (error) {
        res.json({ error });
    }
}

/** post a result */
export async function storeResult(req, res) {
    try {
        const { username, result, attempts, points, achieved } = req.body;
        if (!username || !result) {
            return res.json({ error: "Data Not Provided!" });
        }
        const newResult = await Result.create({ username, result, attempts, points, achieved });
        res.json({ msg: "Result saved successfully!", result: newResult });
    } catch (error) {
        res.json({ error });
    }
}

/** delete all results */
export async function dropResult(req, res) {
    try {
        await Result.deleteMany();
        res.json({ msg: "Results Deleted Successfully!" });
    } catch (error) {
        res.json({ error });
    }
}
