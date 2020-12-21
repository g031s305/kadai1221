module.exports = {
    name: 'lists', 
    columns: {
        listid: {
            primary: true,
            type: 'int',
            generated: true,
        },
        userid: {
            type: 'int'
        },
        listname: {
            type: 'varchar'
        },
    },
};