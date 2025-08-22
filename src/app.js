import express from "express";
import apiRouter from "./routers/index.js";
import morgan from "morgan";

// Setup
const app = express();
const { PORT, NODE_ENV } = process.env;

//TODO Middlewares

// Routing
app.use('/api', apiRouter);

// Start Web API
app.listen(PORT, (error) => {
    if (error) {
        console.log("Une erreur est survenue !");
        console.log(error);
        return;
    }

    console.log(`Le serveur écoute sur le port ${PORT} [${NODE_ENV}]`);
});