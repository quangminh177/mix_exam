const CommonModel = require("./common.model");
const knex = require("../config/knex");

class ChapterModel extends CommonModel{
    getTableName() {
        return 'chapter';
    }

    getAllData() {
        return `SELECT * FROM chapter WHERE delete_flag = 0`;
    }

    getDataById(id) {
        return `SELECT * FROM chapter WHERE id = ${id} AND delete_flag = 0`;
    }

    async displayByCourseId(courseId) {
        let data = await knex('chapter')
                        .join('course', 'chapter.course_id','=', `course.id`)
                        .select('chapter.*','course.name as course_name')
                        .where('chapter.delete_flag', '0')
                        .where('chapter.course_id', `${courseId}`)
                        // .orderBy('id');
        return data;
    }

    update(req, res) {

    }

    delete() {

    }

}

module.exports = ChapterModel;