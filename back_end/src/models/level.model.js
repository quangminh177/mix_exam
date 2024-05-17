const CommonModel = require("./common.model");

class LevelModel extends CommonModel{
    getTableName() {
        return 'level';
    }

    getAllData() {
        return `SELECT * FROM level `;
    }

    getDataById(userId) {
        return `SELECT * FROM course WHERE id = ${userId}`;
    }

}

module.exports = LevelModel;