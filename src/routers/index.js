import { Router } from "express";
import demoRouter from "./demo.router.js";

// Router pour tous les centraliser 
const apiRouter = Router()

// Utilisation des autres routers avec leurs préfixes
apiRouter.use('/demo', demoRouter);

// Ne pas oublier l'export :p
export default apiRouter;