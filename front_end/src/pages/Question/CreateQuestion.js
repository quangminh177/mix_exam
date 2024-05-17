import React, { useEffect, useState } from "react";
import { Row, Col, Form, Input, Button, Select, Checkbox } from "antd";
import { httpGetData, httpPostData } from "../../api/common.api";
import { useNavigate } from "react-router-dom";
const { TextArea } = Input;
const { Option } = Select;

export default function CreateQuestion() {
    const [form] = Form.useForm();
    let [courseList, setCourse] = useState([]);
    let [chapterList, setChapter] = useState([]);
    let [sectionList, setSection] = useState([]);
    let [levelList, setLevel] = useState([]);
    const [refresh, setRefresh] = useState(false);
    const navigate = useNavigate();

    
    useEffect(() => {
        async function fetchData() {
            const courseData = await httpGetData(`/courses`);
            const levelData = await httpGetData(`/levels`);
            setCourse(courseData);
            setLevel(levelData);
        }
        fetchData();
    }, [refresh]);

    const onCourseChange = async (id) => {
        if (id !== undefined || id === 0){
            const chapterData = await httpGetData(`/list-chapters/${id}`);
            setChapter(chapterData);
        }
        else setChapter([])
    }

    const onChapterChange = async(id) => {
        if(id !== undefined || id === 0) {
            const sectionData = await httpGetData(`/list-sections/${id}`);
            setSection(sectionData);
            console.log(sectionData);
        }
        else setSection([])
    }

    const handleSubmit = async (values) => {
        const answerData = [];
        const questionData = {
            section_id: values.section_id,
            question_name: values.question_name,
            level_id: values.level_id
        }
        let newQuestionId;
        await httpPostData('/create-question', questionData)
        .then((data)=>{
            newQuestionId = data.return[0];
        })
        .catch(err=>console.log(err));
        for (let i = 0; i < 4; i++) {
            answerData[i] = {
                answer_name: values[`answer${i+1}`],
                correct_answer: values[`answer${i+1}Right`] ? 1 : 0,
                question_id: newQuestionId
            }
            await httpPostData('/create-answer', answerData[i])
            .then((data)=>{
                console.log(data)
            })
            .catch(err=>console.log(err));
        }
        navigate('/questions');
    }

    return (
        <div>
            <Col span={22} offset={1}>
                <h2>Tạo câu hỏi</h2>
            <Form layout="horizontal" onFinish={handleSubmit} form={form}>
                <Row>
                    <Col span={10}>
                        <Form.Item label="Môn học" name="course_id">
                        <Select
                        placeholder="Chọn môn học"
                        onChange={id => onCourseChange(id)}
                        allowClear
                        >
                            {courseList.map(course => <Option value={course.id}>{course.name}</Option>)}
                        </Select>
                        </Form.Item>
                    </Col>
                    <Col span={10} offset={2}>
                        <Form.Item label="Chương" name="chapter_id">
                        <Select
                        placeholder="Chọn chương"
                        onChange={id => onChapterChange(id)}
                        allowClear
                        >
                            {chapterList.map(chapter => <Option value={chapter.id}>{chapter.chapter_name}</Option>)}
                        </Select>
                        </Form.Item>
                    </Col>
                </Row>
                <Row>
                    <Col span={10}>
                        <Form.Item label="Phần" name='section_id'>
                        <Select
                        placeholder="Chọn phần"
                        allowClear
                        >
                            {sectionList.map(section => <Option value={section.id}>{section.section_name}</Option>)}
                        </Select>
                        </Form.Item>
                    </Col>
                    <Col span={10} offset={2}>
                        <Form.Item label="Độ khó" name='level_id'>
                        <Select
                        placeholder="Chọn độ khó"
                        allowClear
                        >
                            {levelList.map(level => <Option value={level.id}>{level.level}</Option>)}
                        </Select>
                        </Form.Item>
                    </Col>
                </Row>
                <Row>
                    <Col span={20}>
                        <Form.Item label="Câu hỏi" name="question_name">
                        <TextArea rows={4} />
                        </Form.Item>
                    </Col>
                </Row>
                <p>Đáp án</p>
                <Row>
                    <Col span={10}>
                        <Form.Item label="1" name="answer1">
                            <Input />
                        </Form.Item>
                        <Form.Item name="answer1Right" valuePropName="checked">
                            <Checkbox></Checkbox>
                        </Form.Item>
                    </Col>
                    <Col span={10} offset={2}>
                        <Form.Item label="2" name="answer2">
                            <Input />
                        </Form.Item>
                        <Form.Item name="answer2Right" valuePropName="checked">
                            <Checkbox></Checkbox>
                        </Form.Item>
                    </Col>
                </Row>

                <Row>
                    <Col span={10}>
                        <Form.Item label="3" name="answer3">
                            <Input />
                        </Form.Item>
                        <Form.Item name="answer3Right" valuePropName="checked">
                            <Checkbox></Checkbox>
                        </Form.Item>
                    </Col>
                    <Col span={10} offset={2}>
                        <Form.Item label="4" name="answer4">
                            <Input />
                        </Form.Item>
                        <Form.Item name="answer4Right" valuePropName="checked">
                            <Checkbox></Checkbox>
                        </Form.Item>
                    </Col>
                </Row>

                <Row>
                <Col span={10}>
                    <Form.Item>
                    <Button type="primary" htmlType="submit">Tạo</Button>
                    <Button onClick={() => form.resetFields()}>Hủy bỏ</Button>
                    </Form.Item>
                </Col>
                </Row>
            </Form>
            </Col>
        </div>
    );
}
