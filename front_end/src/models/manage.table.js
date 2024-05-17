import courseTable from "./table/course.table";
import examTable from "./table/exam.table";
import questionTable from "./table/question.table";
import userTable from "./table/user.table";
import chapterTable from "./table/chapter.table";
import sectionTable from "./table/section.table";


const classesFactory = {
    courseTable,
    examTable,
    questionTable,
    userTable,
    chapterTable,
    sectionTable
};

const classesFactoryMapping = {
    courses: "courseTable",
    exams: "examTable",
    questions: "questionTable",
    users: "userTable",
    chapters: "chapterTable",
    sections: "sectionTable"
};

const tableNameMapping = {
    courses: "môn học",
    exams: "đề thi",
    questions: "câu hỏi",
    users: "người dùng",
    chapters: "chương học",
    sections: "phần học"
};

export const exportColumnTable = (table, callBack, getColumnSearchProps) => {
    let nameConverted = classesFactoryMapping[table];
    if (!!nameConverted) {
        let tableSelected = new classesFactory[nameConverted]();
        if(!!tableSelected) return tableSelected.getColumnShow(callBack, getColumnSearchProps);
    }
    return [];
}

export const exportDataTable = (table, fatherId) => {
    let nameConverted = classesFactoryMapping[table];
    if (!!nameConverted) {
        let tableSelected = new classesFactory[nameConverted]();
        if(!!tableSelected) return tableSelected.getDataShow(fatherId);
    }
    return [];
}

export const exportTableName = (table) => {
    let nameConverted = tableNameMapping[table];
    if(!!nameConverted) return nameConverted 
    else
        return '';
}