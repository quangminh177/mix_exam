const { managerModelAdmin } = require('../models/manage.model');
const table = 'exam';
const knex = require('../config/knex');

let ExamController = {};
/**
 * Returns jwt token if valid email and password is provided
 *
 * @param {object} req
 * @param {object} res
 * @returns {*}
 */

ExamController.getDataToTable = async (req, res) => {
    let selectedTable = managerModelAdmin(table);
    // Get data
    let data = await selectedTable.getAllData();
    data.map(item => {
        let createRaw = new Date(item.created_at);
        let updateRaw = new Date(item.update_at);
        item.created_at = createRaw.toLocaleString('vi-VN');
        item.update_at = updateRaw.toLocaleString('vi-VN');
    })
    if(!data) res.status(404).json({
        message: 'Error'
    })
    else {
        res.status(200).json(data)
    }
}

ExamController.mixExam = (req,res) =>{
    let questionMixExam = req.body;
    let mixQuestion = [];
    for(let i=0 ;i<questionMixExam.length;i++){
        questionMixExam[i].mix_answers = [];
        for(let j = 0; j < questionMixExam[i].answers.length; j++){
            let h = Math.floor(Math.random() * questionMixExam[i].answers.length);
            questionMixExam[i].mix_answers.push(questionMixExam[i].answers[h]);
            questionMixExam[i].answers.splice(h,1); 
            j--;
        }
        questionMixExam[i].answers = questionMixExam[i].mix_answers;
        delete questionMixExam[i].mix_answers;
        let k = Math.floor(Math.random() * questionMixExam.length);
        mixQuestion.push(questionMixExam[k]);
        questionMixExam.splice(k,1); 
        i--;
    }
    console.log(mixQuestion);
    res.status(200).json(mixQuestion);
       
}

ExamController.createExam = async (req, res) => {
    let selectedTable = managerModelAdmin(table);
    let {exam_date, ...examData} = req.body.exam;
    let year = Number(examData.semester.slice(0, -1));
    let school_year = `${year} - ${year + 1}`;
    // Root exam number
    let examOrigin = examData.exam_origin;
    // Mix exam number
    const examNumber = Math.floor(Math.random() * 1000);
    if (examOrigin === 0) {
        examOrigin = examNumber;
    }
    let dataInsert = {
        course_id: examData.course_id,
        semester: examData.semester,
        school_year : school_year,
        exam_type: examData.exam_type,
        exam_origin: examOrigin,
        exam_number: examNumber,
        created_id: 1,
        created_at: new Date(),
        update_id: 1,
        update_at: new Date(),
        delete_flag: 0,
        old_id: 0,
    }
    const isAdd = await selectedTable.insertDataToDb(dataInsert, table);
    if(!isAdd) res.status(404).json({
        message: 'Error'
    })
    else res.status(200).json({
        success: true,
        message: "Bạn đã thêm đề thi thành công",
        return: {exam_origin: examOrigin}
    });
    let examQuestionData = req.body.examQuestion;
    examQuestionData.map(async (question, index) => {
        let dataMixAnswers = "";
        question.answers.map(async (answer,index) =>{
            if(index === 3){
                dataMixAnswers += answer.id;
            }
            else{
                dataMixAnswers += answer.id + ',';
            }
        })
        let dataInsertQuestion = {
            exam_id: isAdd[0],
            question_id: question.id,
            answer_mix: dataMixAnswers,
            created_id: 1,
            created_at: new Date(),
            update_id: 1,
            update_at: new Date(),
            delete_flag: 0,
            old_id: 0,
        }
        await knex('exam_question')
        .insert(dataInsertQuestion)
    })
}

ExamController.getQuestionsToCreateExam = async (req, res)=>{
    let exam_question = [];
    if(!!req.body.easy) {
        await knex('question')
        .where({
            section_id: req.body.section_id,
            level_id: 2,
        })
        .select('question.id', 'question.question_name')
        .then(data =>{
            console.log(data);
            for(let i = 0; i<req.body.easy; i++){
                let k = Math.floor(Math.random() * data.length); 
                exam_question.push(data[k]);
            }
        })
    }
    if(!!req.body.medium) {
        await knex('question')
        .where({
            section_id: req.body.section_id,
            level_id: 1,
        })
        .select('question.id', 'question.question_name')
        .then(data =>{
            for(let i = 0; i < req.body.medium; i++){
                let k = Math.floor(Math.random() * data.length); 
                exam_question.push(data[k]);
            }
        })
    }
    if(!!req.body.hard) {
        await knex('question')
        .where({
            section_id: req.body.section_id,
            level_id: 0,
        })
        .select('question.id', 'question.question_name')
        .then(data =>{
            for(let i = 0; i<req.body.hard; i++){
                let k = Math.floor(Math.random() * data.length); 
                exam_question.push(data[k]);
            }
        })
    }
    for(let i = 0; i<exam_question.length; i++){
        await knex('answer')
             .where({question_id: exam_question[i].id})
             .select('answer.id', 'answer.answer_name')
             .then(data => exam_question[i].answers = data);
    }
    res.json(exam_question)
}

ExamController.getDataById = async(req, res) => {
    let selectedTable = managerModelAdmin(table);
    let id = req.params.id;
    // Get data
    let data = await selectedTable.getDataById(id);
    if(!data) res.status(404).json({
        message: 'Error'
    })
    else {
        res.status(200).json(data)
    }
}

ExamController.getQuestionsByExamId = async(req, res) => {
    let selectedTable = managerModelAdmin(table);
    let id = req.params.id;
    // Get data
    let data = await selectedTable.getQuestionsById(id);
    if(!data) res.status(404).json({
        message: 'Error'
    })
    else {
        res.status(200).json(data)
    }
}

module.exports = ExamController;