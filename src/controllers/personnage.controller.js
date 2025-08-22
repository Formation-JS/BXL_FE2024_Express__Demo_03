import personnage from './../data/personnage.json' with { type: 'json' };

const personnageController = {

    // (GET)    /api/personnage
    showAll: (req, res) => {

        const result = personnage.map(perso => ({ id: perso.id, name: perso.name }));
        res.status(200).json(result);
    },

    // (GET)    /api/personnage/:id
    showById: (req, res) => {

        const id = parseInt(req.params.id);
        const result = personnage.find(perso => perso.id === id);

        if (!result) {
            res.sendStatus(404);
            return;
        }

        res.status(200).json(result);
    },

    // (POST)   /api/personnage
    add: (req, res) => {

        const id = Math.max(...personnage.map(perso => perso.id));

        const data = {
            ...req.body,
            id: id
        };
        personnage.push(data);

        // 201 - Created
        res.status(201)
           .location(`/api/personnage/${data.id}`)
           .json(data);
    },

    // (DELETE) /api/personnage/:id
    delete: (req, res) => {

        const id = parseInt(req.params.id);
        const index = personnage.findIndex(perso => perso.id == id);

        if(index === -1) {
            res.sendStatus(404);
            return;
        }

        personnage.splice(index, 1);
        res.sendStatus(204);
    }

};

export default personnageController;