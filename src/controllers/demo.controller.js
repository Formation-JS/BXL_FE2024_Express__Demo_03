
// initialisation du controller
const demoController = {

    hello: (req, res) => {
        const today = new Date()
        res.json({ message :` Hello ${today.toLocaleDateString()}` })

    }
}

export default demoController;