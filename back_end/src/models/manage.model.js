const User = require('./user.model');
const Level = require('./level.model');
const Course = require('./course.model');
const Chapter = require('./chapter.model');
const Exam = require('./exam.model');
const ExamQuestion = require('./exam_question.model');
const Question = require('./question.model');
const Answer = require('./answer.model');
const Section = require('./section.model');

AdminMapping = {
    User,
    Level,
    Course,
    Exam,
    ExamQuestion,
    Question,
    Answer,
    Chapter,
    Section
};

UserMapping = {
    Question,
    Answer
};

const classFactory = {
    user: 'User',
    subject: 'Subject',
    course: 'Course',
    exam: 'Exam',
    exam_question: 'ExamQuestion',
    question: 'Question',
    answer: 'Answer',
    chapter: 'Chapter',
    section: 'Section',
    level: 'Level',
}

exports.managerModelAdmin = function (table) {
    var nameConvert = classFactory[table];
    if (!!nameConvert) {
        var tableSelect = new AdminMapping[nameConvert]();
        if (!!tableSelect) return tableSelect;
    }
    return false;
};
  
exports.managerModelUser = function (table) {
    var nameConvert = classFactory[table];
    if (!!nameConvert) {
        var tableSelect = new UserMapping[nameConvert]();
        if (!!tableSelect) return tableSelect;
    }
    return false;
};