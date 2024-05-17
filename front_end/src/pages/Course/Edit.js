import React, { useEffect, useState } from "react";
import { Row, Col, Form, Input, Button, Select, Checkbox } from "antd";
import { httpGetData, httpUpdateData } from "../../api/common.api";
import { useNavigate } from "react-router-dom";
const { TextArea } = Input;

export default function EditCourse() {
    const [courseData, setCourse] = useState([]);
    const [refresh, setRefresh] = useState(false);
    const url = window.location.pathname;
    const id = url.split("/")[2];
    const navigate = useNavigate();

    useEffect(() => {
        async function fetchData() {
            const data = await httpGetData(`/course/${id}`);
            setCourse(data[0]);
            console.log(data[0]);
        }
        fetchData();
    }, [refresh]);

    const handleOnChangeInput = (event, para) => {
        let preState = {...courseData};
        preState[para] = event.target.value;
        setCourse({...preState});
    }

    const handleSubmit = async () => {
        let {id, ...newData} = courseData;
        newData['old_id'] = id;
        newData['update_at'] = new Date();
        newData['update_id'] = 1;
        console.log("New data: ", newData);
        const isUpdate = await httpUpdateData(`/course/${id}/update`, newData);
        if(isUpdate) {
            navigate('/courses')
        }
        else {
            alert('Đang có lỗi')
        }
    }

    return (
        <div>
            <Col span={22} offset={1}>
                <h2>Chỉnh sửa môn học</h2>
            <Form layout="horizontal">
                <Row>
                    <Col span={20}>
                        <Form.Item label="Tên môn học">
                        <Input value={courseData ? courseData.name : ""} name="name" onChange={event => handleOnChangeInput(event, 'name')}/>
                        </Form.Item>
                    </Col>
                    <Col span={20}>
                        <Form.Item label="Mã học phần">
                        <Input value={courseData ? courseData.code : ""} name="code" onChange={event => handleOnChangeInput(event, 'code')}/>
                        </Form.Item>
                    </Col>
                </Row>
                <Row>
                <Col span={10}>
                    <Form.Item>
                    <Button type="primary" onClick={handleSubmit}>Lưu</Button>
                    <Button onClick={() => navigate('/courses')}>Hủy bỏ</Button>
                    </Form.Item>
                </Col>
                </Row>
            </Form>
            </Col>
    </div>
    );
}
