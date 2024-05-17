import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { httpGetData } from "../../api/common.api";
import { Row, Col, Form, Input, Button, Select, Checkbox, Space, DatePicker, InputNumber } from "antd";
import { DownloadOutlined } from '@ant-design/icons';
import styles from './Exam.css';
import { Export2Word, exportAnswerLetter, exportToPdf, renderQuestion } from "../../utils/renderQuestion";
import { showNoti } from "../../components/Notification";

const Exam  = () => {
    const url = window.location.pathname;
    const id = url.split("/")[2];
    const navigate = useNavigate();
    const [examData, setExam] = useState([]);
    const [questionData, setQuestion] = useState([]);
    const [refresh, setRefresh] = useState(false);
    const questionQuantity = 1;

    useEffect(() => {
        async function fetchData() {
            const data = await httpGetData(`/exam/${id}`);
            setExam(data[0]);   
            const questionData = await httpGetData(`/exam-questions/${id}`);
            setQuestion(questionData);
        }
        fetchData();
    }, [refresh]);


    return (
        <>
            <div className="btn-download">
                <Button onClick={() => {if(examData && questionData) exportToPdf('exam-content', examData, 'Đề')}}><DownloadOutlined />Tải xuống</Button>
                <Button onClick={() => {if(examData && questionData) exportToPdf('table-answer', examData, 'Đáp án đề')}}><DownloadOutlined />Tải đáp án</Button>
            </div>
            <div className="exam-content" id="exam-content" >
                    <div className="exam-header">
                        <div className="school center col-6">
                            <p className="upper">Trường Đại học Bách Khoa Hà Nội</p>
                            <p className="upper bold">Trường Điện Điện Tử</p>
                            <p className="number">
                                <span>Mã đề: {examData.exam_number}</span>
                                <span>Tổng số trang: 1</span>
                            </p>
                        </div>
                        <div className="exam-title center bold col-6">
                            <p className="exam-name upper">Đề thi {examData.exam_type} {examData.semester}</p>
                            <p>Học phần: <span class="exam-course">{examData.course_code} - {examData.course_name}</span></p>
                            <p>Ngày thi: </p>
                            <p className="exam-warning">(Được sử dụng tài liệu)</p>
                        </div>
                    </div>
                    {questionData.map((question, index) => {
                        const content = document.querySelector('.exam-content');
                        renderQuestion(content, question, index);
                        // Render answer table
                        const table = document.querySelector('.table-answer-content');
                        const queryHTML = `<td class="true-answer-item"><b>Câu ${index + 1}. ${exportAnswerLetter(question.correct_index)}</b></td>`;
                        table.innerHTML += queryHTML;   
                    })
                    }
            </div>
            <div className="table-answer" id="table-answer">
                <div className="table-answer-title"><span className="upper">Bảng đáp án</span> Đề {examData.exam_type} {examData.semester} môn {examData.course_name} <div>Mã đề {examData.id}</div></div>
                <table className="table-answer-content">
                </table>
            </div>
        </>
    )
}

export default Exam;
