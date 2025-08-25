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

## API RestFull

### Interaction avec des ressources 
- **GET** : Récuperation
- **POST** : Création
- **PUT** : Modification complete
- **PATCH** : Modification partiel
- **DELETE** : Suppression
- **HEAD** : Vérification de l'existance

### Achitecture REST
- **Client & Serveur**
- **Stateless** : Ne concerve pas l'état du client.
- **Cacheable** : Mise en cache possible des réponse.
- **Interface uniforme** : Endpoint standardisé avec les verbes.
- **Systeme en couche**

### Bréve liste des codes de réponse
**Succes**
- 200 : OK
- 201 : Created
- 204 : OK (No data)

**Erreur requête**
- 400 : Bad request
- 404 : Not found

**Erreur serveur**
- 500 : Internal error
- 501 : Not implemented

## Les endpoints pour la démo
Web API sur le theme des personnes de Disney
```
(GET)    /api/personnage
(GET)    /api/personnage/:id
(POST)   /api/personnage
(DELETE) /api/personnage/:id
```

## Logiciel pour tester le serveur API
- **Thunder Client _(Extension pour VSCode)_** https://www.thunderclient.com/  
  Intégré à VSC, mais certaines options sont payantes
- **Postman** https://www.postman.com/downloads/  
  Application à installer et version Web.
- **Insomnia** https://insomnia.rest/  
  Application à installer. Necessite un compte pour avoir plusieurs "collection" de requêtes.
- **Bruno** https://www.usebruno.com/  
  Application à installer et extension VSCode. Fichier au format `.bru` ajoutable au projet.