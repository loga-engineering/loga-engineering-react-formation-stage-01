const {sequelize, Sequelize, defaultOptions} = require('../db/db');

const ClientModel = sequelize
    .define('ClientModel', {
        id: {type: Sequelize.BIGINT, primaryKey: true, autoIncrement: true},
        firstName: {type: Sequelize.STRING},
        lastName: {type: Sequelize.STRING},
        email: {type: Sequelize.STRING},
        age: {type: Sequelize.INTEGER},
        address: {type: Sequelize.STRING},
    }, {
        ...defaultOptions,
        tableName: 'clients',
    });

module.exports = {
    ClientModel,
};
