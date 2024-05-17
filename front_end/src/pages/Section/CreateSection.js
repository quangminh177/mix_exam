import React, { useEffect, useState } from "react";
import { Row, Col, Form, Input, Button, Select, Checkbox } from "antd";
import { useNavigate } from "react-router-dom";
import { httpGetData, httpPostData } from "../../api/common.api";
const { Option } = Select;

const { TextArea } = Input;

export default function CreateSection() {
    const [form] = Form.useForm();
    let [courseList, setCourse] = useState([]);
    let [chapterList, setChapter] = useState([]);
    const [refresh, setRefresh] = useState(false);
    
    useEffect(() => {
        async function fetchData() {
            const courseData = await httpGetData(`/courses`);
            setCourse(courseData);
        }
        fetchData();
    }, [refresh]);
    
    const navigate = useNavigate();

    const onCourseChange = async (id) => {
        if (id !== undefined || id === 0){
            const chapterData = await httpGetData(`/list-chapters/${id}`);
            setChapter(chapterData);
        }
        else setChapter([])
    }

    const handleSubmit = async (values) => {
        const sectionData = {
            chapter_id: values.chapter_id,
            section_name: values.section_name
        };
        await httpPostData('/create-section', sectionData)
        .then((data)=>{
            console.log(data)
        })
        .catch(err=>console.log(err));
        navigate('/course/chapter/' + values.chapter_id + '/sections');
    }
    
    return (
        <div>
            <Col span={22} offset={1}>
                <h2>Tạo chương học</h2>
            <Form layout="horizontal" onFinish={handleSubmit} form={form}>
                <Row>
                    <Col span={20}>
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
                    <Col span={20}>
                        <Form.Item label="Chương học" name="chapter_id">
                        <Select
                        placeholder="Chọn chương học"
                        allowClear
                        >
                            {chapterList.map(chapter => <Option value={chapter.id}>{chapter.chapter_name}</Option>)}
                        </Select>
                        </Form.Item>
                    </Col>
                    <Col span={20}>
                        <Form.Item label="Tên phần" name="section_name" >
                        <Input/>
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
