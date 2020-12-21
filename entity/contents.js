module.exports = {
    name: 'contents', 
    columns: {
        contentid: {
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
        contentname: {
            type: 'varchar'
        },
        deadline: {
            type: 'date'
        },
        status: {
            type: 'int'
        },
        priority: {
            type: 'int'
        },
        teamid: {
            type: 'int'
        },
    },
};