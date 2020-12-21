require('dotenv').config();
const typeorm = require('typeorm');
const EntitySchema = typeorm.EntitySchema;
const connection = typeorm.createConnection({
    type: 'postgres',
    host: 'localhost',
    port: 5432,
    username: 'postgres',
    password: process.env.TYPEORM_PASSWORD || 'postgres',
    database: 'myapp',
    logging: true,
    synchronize: false,
    entities: [
        new EntitySchema(require('./entity/users_test')),
        (require('./entity/users')),
        (require('./entity/team')),
        (require('./entity/lists')),
        (require('./entity/contents.js')),
        (require('./entity/reminds')),
    ],
});
module.exports = connection;