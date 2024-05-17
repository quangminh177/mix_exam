const connection = require("../config/database");
const CommonModel = require("./common.model");
const knex = require("../config/knex");

class SectionModel extends CommonModel{
    getTableName() {
        return 'section';
    }

    getAllData() {
        return `SELECT * FROM section WHERE delete_flag = 0`;
    }

    getDataById(id) {
        return `SELECT * FROM section WHERE id = ${id} AND delete_flag = 0`;
    }

    async displayByChapterId(chapterId) {
        let data = await knex('section')
                        .join('chapter', 'section.chapter_id','=', `chapter.id`)
                        .join('course', 'chapter.course_id','=', `course.id`)
                        .select('section.*','chapter.course_id','chapter.chapter_name','course.name as course_name')
                        .where('section.delete_flag', '0')
                        .where('section.chapter_id', `${chapterId}`)
                        // .orderBy('id');
        return data;
    }

}

module.exports = SectionModel;