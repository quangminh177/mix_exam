import React, { useEffect, useState } from "react";
import { Row, Col, Form, Input, Button, Select, Checkbox } from "antd";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { httpPostData } from "../../api/common.api";

const { TextArea } = Input;

export default function CreateCourse() {
    const [name, setName] = useState('');
    const [code, setCode] = useState('');
    const navigate = useNavigate();
    // const [add, SetAdd] = useState(false);
    const HandleClick = async (e) =>{
        e.preventDefault();
        const values = {
            name: name,
            code: code,
        }
        console.log(values);
        await httpPostData('/create-course', values)
        .then((data)=>{
            console.log(data);
            navigate('/courses');
        })
        .catch(err=>console.log(err));
    }
    
    return (
        <div>
            <Col span={22} offset={1}>
                <h2>Tạo môn học</h2>
            <Form layout="horizontal">
                <Row>
                    <Col span={20}>
                        <Form.Item label="Tên môn học">
                        <Input 
                            value={name} 
                            name="name" 
                            onChange={(e)=>setName(e.target.value)}
                        />
                        </Form.Item>
                    </Col>
                    <Col span={20}>
                        <Form.Item label="Mã học phần">
                        <Input 
                            value={code} 
                            name="code" 
                            onChange={(e)=>setCode(e.target.value)}
                        />
                        </Form.Item>
                    </Col>
                </Row>
                <Row>
                <Col span={10}>
                    <Form.Item>
                    <Button type="primary" onClick={e=>HandleClick(e)}>Thêm</Button>
                    <Button>Hủy bỏ</Button>
                    </Form.Item>
                </Col>
                </Row>
            </Form>
            </Col>
    </div>
    );
}
