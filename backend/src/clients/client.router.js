const {Router} = require('express');
const service = require('./client.service');


const path = '/clients';


const create = async (req, res) => {
    let client = req.body;
    console.log({client});
    client = await service.create(client);
    res.json(client);
}

const findAll = async (req, res) => {
    const clients = await service.findAll();
    res.json(clients);
}

const findById = async (req, res) => {
    const id = +req.params.id;
    const client = await service.findById(id);
    res.json(client);
}

const addRoutes = (app) => {
    const router = Router();

    router.post('/', create)
    // router.put('/:id', update)
    // router.delete('/:id', destroy)
    router.get('/:id', findById)
    router.get('/', findAll)


    app.use(path, router);
}

module.exports = {
    addRoutes
}