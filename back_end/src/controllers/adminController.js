const { managerModelAdmin } = require('../models/manage.model');

let AdminController = {};
/**
 * Returns jwt token if valid email and password is provided
 *
 * @param {object} req
 * @param {object} res
 * @returns {*}
 */

AdminController.getDataToEdit = async(req, res) => {
    let {table, id} = req.params;
    let selectedTable = managerModelAdmin(table);
    // Get SQL Query
    let sql = selectedTable.getDataById(id);
    let data = await selectedTable.queryDatabase(sql);
    if(!data) res.status(404).json({
        message: 'Error'
    })
    else {
        res.status(200).json(data)
    }
}

AdminController.updateData = async(req, res) => {
    let insertData = req.body;
    let {table, id} = req.params;
    insertData.update_id = 1;
    insertData.update_at = new Date();
    let selectedTable = managerModelAdmin(table);
    // Get SQL Query
    let isUpdate = await selectedTable.updateDataById(insertData, table, id);
    if(!isUpdate) res.status(404).json({
        message: 'Error'
    })
    else {
        res.status(200).json({
            message: 'Update data successful'
        })
    }
}

module.exports = AdminController;
