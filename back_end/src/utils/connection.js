const connection = require("../config/database");

let getAllData = (tableName) => {
    return new Promise(async (resolve, reject) => {
        try {
            await connection.query('SELECT * FROM ??',tableName, (error, data) => {
                if (error) console.log(error);
                resolve(data);
            });
        }
        catch(e) {
            reject(e)
        }
    })
}

let insertTable = async(tableName, insertData) => {
    await connection.query('INSERT INTO ? SET ?',tableName, insertData, (err, results) => {
        if(err) console.log(err);
    })
}

module.exports = {
    getAllData: getAllData,
    insertTable: insertTable
}