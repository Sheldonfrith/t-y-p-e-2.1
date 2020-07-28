const mysql = require('mysql2/promise');
const {DBConfig} = require('../global/config');

//QUERY DATABASE:::://
const queryDatabase = async (query) => {
    const connection = await mysql.createConnection({
        host: DBConfig.host,
        user: DBConfig.user,
        password: DBConfig.password,
        port: DBConfig.port,
        database: DBConfig.defaultDatabase,
    });
    const [rows,fields]  = await connection.execute(query);
    await connection.end();
    return rows;
}

//Queries that push to database
const testPushQuery = () => {
    const query1 = createTableQuery('testTable', [['col1', 'VARCHAR(30)'],['col2', 'VARCHAR(30)']]);
    const query2 = insertIntoQuery('testTable',['col1', 'col2'],['test successful','Column 2 value']);
    queryDatabase(query1).then(result => console.log(result));
    queryDatabase(query2).then(result => console.log(result));
}

const createTableQuery = (name, columns) => {
    const columnsList = columns.map(column => (String(column[0])+' '+String(column[1])));
    columnsList.join(', ');
    return  `CREATE TABLE ${name} (${columnsList});`;
    
}

const insertIntoQuery = (tableName, columns, values) => {
    columns.join(', ');
    values = values.map(value => JSON.stringify(value));
    values.join(', ');
    return `INSERT INTO ${tableName} (${columns}) VALUES (${values});`
}

//Queries that get from database
const testPullQuery = async () => {
    const result = await queryDatabase('SELECT * FROM testTable;');
    return await result[1];
}

exports.queryDatabase = queryDatabase;
exports.testPushQuery = testPushQuery;
exports.testPullQuery = testPullQuery;