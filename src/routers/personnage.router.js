import { Router } from "express";
import personnageController from "../controllers/personnage.controller.js";


const personnageRouter = Router();

// /api/personnage
personnageRouter.route('/')
    .get(personnageController.showAll)
    .post(personnageController.add);

// /api/personnage/:id
personnageRouter.route('/:id')
    .get(personnageController.showById)
    .delete(personnageController.delete);

export default personnageRouter;