const knex = require('../config/knex');
const { managerModelAdmin } = require('../models/manage.model');
const table = 'level';

let LevelController = {};
/**
 * Returns jwt token if valid email and password is provided
 *
 * @param {object} req
 * @param {object} res
 * @returns {*}
 */

LevelController.getDataToTable = async (req, res) => {
    let selectedTable = managerModelAdmin(table);
    // Get data
    let sql = selectedTable.getAllData();
    let data = await selectedTable.queryDatabase(sql);

    if(!data) res.status(404).json({
        message: 'Error'
    })
    else {
        res.status(200).json(data)
    }
}

module.exports = LevelController;