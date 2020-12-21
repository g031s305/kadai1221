module.exports = {
    name: 'reminds', 
    columns: {
        remindid: {
            primary: true,
            type: 'int',
            generated: true,
        },
        userid: {
            type: 'int'
        },
        listid: {
            type: 'int'
        },
        contentid: {
            type: 'int'
        },
        remind: {
            type: 'date'
        },
    },
};