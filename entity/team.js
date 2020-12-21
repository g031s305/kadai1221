module.exports = {
    name: 'team', 
    columns: {
        id: {
            primary: true,
            type: 'int',
            generated: true,
        },
        teamname: {
            type: 'varchar'
        },
        userid: {
            type: 'int'
        },
    },
};