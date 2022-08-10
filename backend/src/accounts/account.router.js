const {Router} = require('express');
const accounts = require('./account.data');

const path = '/accounts';

const findAll = async (req, res) => {
    res.json(accounts);
}

const findById = async (req, res) => {
    const id = +req.params.id;
    const account = accounts.find(account => account.id === id);
    res.json({...account, counter: req.counter});
}

const addRoutes = (app) => {
    const router = Router();

    router.get('/:id', findById)
    router.get('/', findAll)


    app.use(path, router);
}

module.exports = {
    addRoutes
}