import React, { useEffect, useState } from "react";
import { Row, Col, Form, Input, Button, Select, Checkbox, Space, DatePicker, InputNumber } from "antd";
import { httpGetData, httpPostData } from "../../api/common.api";
import {renderQuestion } from "../../utils/renderQuestion";
import './CreateExam.css';
import { showNoti, showNotiError, showNotiSuccess } from "../../components/Notification";

const { TextArea } = Input;
const { Option } = Select;

const CreateExam = () => {
    const [form1] = Form.useForm();
    const [form2] = Form.useForm();
    const dateFormat = 'DD/MM/YYYY';

    let [courseList, setCourse] = useState([]);
    let [chapterList, setChapter] = useState([]);
    let [sectionList, setSection] = useState([]);
    let [questionList, setQuestion] = useState([]);
    let [examData, setExam] = useState([]);
    let [examOrigin, setNumber] = useState(0);


    const [refresh, setRefresh] = useState(false);
    let courseId;

    useEffect(() => {
        async function fetchData() {
            const courseData = await httpGetData(`/courses`);
            setCourse(courseData);
        }
        fetchData();
    }, [refresh]);

    // Form section
    const onChapterChange = async(id) => {
        if(id !== undefined || id === 0) {
            const sectionData = await httpGetData(`/list-sections/${id}`);
            setSection(sectionData);
            console.log(sectionData);
        }
        else setSection([])
    }

    const handleSubmitExamType = async (values) => {
        document.getElementById("form-exam-type").style.display = 'none';
        document.getElementById("form-question-select").style.display = 'block';
        courseId = values.course_id;
        let courseData = [];
        if(!!courseId || courseId === 0) {
            const chapterData = await httpGetData(`/list-chapters/${courseId}`);
            setChapter(chapterData);
            courseData = await httpGetData(`/course/${courseId}`);
        }
        const data = {
            course_name: courseData[0].name,
            course_code: courseData[0].code,
            semester: values.semester,
            exam_type: values.exam_type,
            exam_date: values.exam_date
        }
        setExam(values);
        addTitleToTable(data);
        console.log(examOrigin);
    }

    const handleSubmitAddQuestion = async (values) => {
        let {chapter_id, ...inputData} = values;
        await httpPostData('/questions-exam', inputData)
        .then(data => {
            addQuestionToTable(data);
            const newData = questionList.concat(data);
            setQuestion(newData);
        })
        .catch(e => console.log(e))
    }

    const backToExamPage = () => {
        form2.resetFields();
        document.getElementById("form-exam-type").style.display = 'block';
        document.getElementById("form-question-select").style.display = 'none';
    } 

    // Exam section
    const addTitleToTable = (data) => {
        const queryHTML = `
                        <div class="school center col-6">
                            <p class="upper">Trường Đại học Bách Khoa Hà Nội</p>
                            <p class="upper bold">Trường Điện Điện Tử</p>
                            <p class="number">
                                <span>Đề số: </span>
                                <span>Tổng số trang: </span>
                            </p>
                        </div>
                        <div class="exam-title center bold col-6">
                            <p class="exam-name upper">Đề thi ${data.exam_type} ${data.semester}</p>
                            <p>Học phần: <span class="exam-course">${data.course_code} - ${data.course_name}</span></p>
                            <p>Ngày thi: ${data.exam_date}</p>
                            <p class="exam-warning">(Được sử dụng tài liệu)</p>
                        </div>
            `
        document.querySelector('.exam-header').innerHTML += queryHTML;
    }

    const addQuestionToTable = (data) => {
        const questions = data;
        if(!!questions) {
            let questionQuantity = questionList.length;
            questions.map((question, index) => {
                const content = document.querySelector('.exam-questions');
                renderQuestion(content, question, questionQuantity + index)
            })
        }
    }

    const submitExam = async() => {
        examData.exam_origin = examOrigin;
        console.log(examData);
        console.log(questionList);
        let data = {
            exam: examData,
            examQuestion: questionList
        }
        await httpPostData('/create-exam', data)
        .then (data => {
            let origin = data.return.exam_origin;
            setNumber(origin);
            showNotiSuccess("Bạn đã tạo đề thi thành công");
        })
        .catch (e => showNotiError(e.message))
    }

    const mixQuestion = async() => {
        document.querySelector('.exam-questions').innerHTML = '';
        await httpPostData('/mix-exam', questionList)
        .then(data=>{
            setQuestion(data);
            data.map((question, index) => {
                const content = document.querySelector('.exam-questions');
                renderQuestion(content, question, index);
            })
        })
        .catch(err => console.log(err));
    }

    const refreshExam = () => {
        document.querySelector('.exam-header').innerHTML = '';
        document.querySelector('.exam-questions').innerHTML = '';
        setExam([]);
        setQuestion([]);    
    }

    return(
        <div className='container'>
            <div className='create-section col-6'>
                <h3 className="heading">Tạo đề thi</h3>
                {/* Form chọn môn học */}
                <div className='form-exam-type' id="form-exam-type">
                <Form layout="horizontal" onFinish={handleSubmitExamType} form={form1}>
                <Row>
                    <Col span={20} offset={2}>
                        <Form.Item label="Môn học" name="course_id">
                        <Select
                        placeholder="Chọn môn học"
                        allowClear
                        >
                            {courseList.map(course => <Option value={course.id}>{course.name}</Option>)}
                        </Select>
                        </Form.Item>
                    </Col>
                </Row>
                <Row>
                    <Col span={20} offset={2}>
                        <Form.Item label="Kỳ học" name="semester">
                            <Input placeholder="Chọn kỳ học"></Input>
                        </Form.Item>
                    </Col>
                </Row>
                <Row>
                    <Col span={20} offset={2}>
                        <Form.Item label="Loại đề thi" name="exam_type">
                            <Select placeholder='Chọn loại đề thi' allowClear>
                                <Option value='Giữa kỳ'></Option>
                                <Option value='Cuối kỳ'></Option>
                            </Select>
                        </Form.Item>
                    </Col>
                </Row>
                <Row>
                    <Col span={20} offset={2}>
                        <Form.Item label="Ngày thi" name="exam_date">
                            <Input placeholder="Chọn ngày thi"></Input>
                            {/* <DatePicker placeholder="Chọn ngày thi" format={dateFormat}/> */}
                        </Form.Item>
                    </Col>
                </Row>
                <Row>
                <Col span={20} offset={2}>
                    <Form.Item>
                        <Button type="primary" htmlType="submit">Tiếp</Button>
                        <Button onClick={() => form1.resetFields()}>Hủy bỏ</Button>
                    </Form.Item>
                </Col>
                </Row>
                </Form>
                </div>
                {/* Form chọn câu hỏi */}
                <div className='form-question-select' id="form-question-select">
                    <Row>
                        <Col span={20} offset={2}>
                        <Button onClick={() => backToExamPage()}>Quay lại</Button>
                        </Col>
                    </Row>
                    <Form layout="horizontal" onFinish={handleSubmitAddQuestion} form={form2}>
                    <Row>
                        <Col span={20} offset={2}>
                            <Form.Item label="Chương học" name="chapter_id">
                            <Select
                            placeholder="Chọn chương học"
                            onChange={id => onChapterChange(id)}
                            allowClear
                            >
                                {chapterList.map(chapter => <Option value={chapter.id}>{chapter.chapter_name}</Option>)}
                            </Select>
                            </Form.Item>
                        </Col>
                    </Row>
                    <Row>
                        <Col span={20} offset={2}>
                            <Form.Item label="Phần học" name="section_id">
                            <Select
                            placeholder="Chọn phần học"
                            allowClear
                            >
                                {sectionList.map(section => <Option value={section.id}>{section.section_name}</Option>)}
                            </Select>
                            </Form.Item>
                        </Col>
                    </Row>
                    <Row>
                        <Col span={20} offset={2}>
                            <Form.Item label="Số câu dễ" name="easy">
                                <InputNumber placeholder="Chọn số câu dễ"></InputNumber>
                            </Form.Item>
                        </Col>
                    </Row>
                    <Row>
                        <Col span={20} offset={2}>
                            <Form.Item label="Số câu trung bình" name="medium">
                                <InputNumber placeholder="Chọn số câu trung bình"></InputNumber>
                            </Form.Item>
                        </Col>
                    </Row>
                    <Row>
                        <Col span={20} offset={2}>
                            <Form.Item label="Số câu khó" name="hard">
                                <InputNumber placeholder="Chọn số câu khó"></InputNumber>
                            </Form.Item>
                        </Col>
                    </Row>
                    <Row>
                    <Col span={20} offset={2}>
                        <Form.Item>
                            <Button type="primary" htmlType="submit">Thêm</Button>
                            <Button onClick={() => form2.resetFields()}>Hủy bỏ</Button>
                        </Form.Item>
                    </Col>
                    </Row>
                    </Form>
                </div>
            </div>
            <div className='exam-section col-6'>
                <h3 className="heading">Đề thi</h3>
                <div className="exam-btn">
                    <Button type="primary" htmlType="submit" onClick={submitExam}>Lưu</Button>
                    <Button onClick={mixQuestion} className="btn-mix">Trộn</Button>
                    <Button onClick={refreshExam}>Hủy bỏ</Button>
                </div>
                <div className="exam" id="exam-content" >
                    <div className="exam-header"></div>
                    <div className="exam-questions"></div>
                </div>
            </div>
            <div className="exam-answers">

            </div>
        </div>
    )
}

export default CreateExam;