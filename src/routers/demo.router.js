import { Router } from "express";
import demoController from "../controllers/demo.controller.js";

const demoRouter = Router();

// Le router de demo qui appelle la fonction hello grace a la const democontroller
demoRouter.get('/hello', demoController.hello);

export default demoRouter;