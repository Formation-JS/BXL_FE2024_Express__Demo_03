# Demo 03 - Web API

## Setup
- Dans le terminal
```
npm init
npm i express morgan
npm i nodemon --save-dev
```

- Modifier le fichier `package.json`
```json
{
    "scripts": {
        "start": "node --env-file-if-exists=.env src/app.js",
        "dev": "nodemon --env-file=.env src/app.js",
        "test": "..."
    }
}
```

- Ajouter les fichiers et dossiers necessaires à l'application
```
/src
  /controllers
    demo.controller.js
  /routers
    index.js
    demo.router.js
  app.js
.env
.env.example
.gitignore
readme.md
```