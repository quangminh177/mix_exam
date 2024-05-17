const CommonModel = require("./common.model");

class CourseModel extends CommonModel{
    getTableName() {
        return 'course';
    }

    getAllData() {
        return `SELECT * FROM course WHERE delete_flag = 0`;
    }

    getDataToTable() {
        return `SELECT id, name, code FROM course WHERE delete_flag = 0`;
    }

    getDataById(userId) {
        return `SELECT * FROM course WHERE id = ${userId} AND delete_flag = 0`;
    }

}

module.exports = CourseModel;