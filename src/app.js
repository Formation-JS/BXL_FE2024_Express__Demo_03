import express from "express";
import apiRouter from "./routers/index.js";
import morgan from "morgan";

// Setup
const app = express();
const { PORT, NODE_ENV } = process.env;

// Middlewares
//? Logger
app.use(morgan('tiny'));
//? Fichier du dossier "public"
app.use('/public', express.static('public'))
//? Récuperation des données JSON (POST, PUT, PATCH) -> req.body
app.use(express.json());

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