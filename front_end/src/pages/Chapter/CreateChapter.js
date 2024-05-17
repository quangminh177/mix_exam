import React, { useEffect, useState } from "react";
import { Row, Col, Form, Input, Button, Select, Checkbox } from "antd";
import { useNavigate } from "react-router-dom";
import { httpGetData, httpPostData } from "../../api/common.api";
const { Option } = Select;
const { TextArea } = Input;

export default function CreateChapter() {
    const [form] = Form.useForm();
    const [name, setName] = useState('');
    const [number, setNumber] = useState('');
    const [refresh, setRefresh] = useState(false);
    let [courseList, setCourse] = useState([]);

    useEffect(() => {
        async function fetchData() {
            const courseData = await httpGetData(`/courses`);
            setCourse(courseData);
        }
        fetchData();
    }, [refresh]);

    const navigate = useNavigate();
    const handleSubmit = async (values) => {
        const chapterData = {
            course_id: values.course_id,
            chapter_name: values.chapter_name,
            chapter_number: values.chapter_number
        };
        await httpPostData('/create-chapter', chapterData)
        .then((data)=>{
            console.log(data)
        })
        .catch(err=>console.log(err));
        navigate('/course/' + values.course_id + '/chapters');
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
                            allowClear
                        >
                            {courseList.map(course => <Option value={course.id}>{course.name}</Option>)}
                        </Select>
                        </Form.Item>
                    </Col>
                    <Col span={20}>
                        <Form.Item label="Tên chương" name="chapter_name">
                        <Input/>
                        </Form.Item>
                    </Col>
                    <Col span={20}>
                        <Form.Item label="Số thứ tự chương" name="chapter_number">
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
