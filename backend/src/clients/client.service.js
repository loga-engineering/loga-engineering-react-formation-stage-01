// const clients = require('./client.data');
const {ClientModel} = require('./client.model');

const create = async (client) => {
    client = await ClientModel.create(client);

    return client;
}

const findAll = async () => {
    const clients = await ClientModel.findAll();

    return clients;
}

const findById = async (id) => {
    id = +id;
    const client = await ClientModel.findOne({where: {id}});

    console.log({client});

    return client;
}


module.exports = {
    findAll, findById, create
}
