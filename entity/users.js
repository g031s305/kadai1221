module.exports = {
    name: 'users', 
    columns: {
        userid: {
            primary: true,
            type: 'int',
            generated: true,
        },
        username: {
            type: 'varchar',
            unique: true
        },
        password: {
            type: 'varchar'
        },
    },
};