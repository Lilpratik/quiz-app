import { Router } from "express";
import * as controller from "../controller/controller.js";

const router = Router();

// Define routes for questions
router.route('/questions')
    .get(controller.getQuestions)      // Fetch questions
    .post(controller.insertQuestions)  // Insert questions
    .delete(controller.dropQuestions); // Drop questions

// Define routes for results
router.route('/result')
    .get(controller.getResult)         // Fetch result
    .post(controller.storeResult)      // Store result
    .delete(controller.dropResult);    // Drop result

export default router;
