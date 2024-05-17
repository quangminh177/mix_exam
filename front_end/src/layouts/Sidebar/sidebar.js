import { UnorderedListOutlined, FileTextOutlined, UserOutlined, HomeOutlined, QuestionCircleOutlined, UsergroupAddOutlined} from '@ant-design/icons';
import { Breadcrumb, Layout, Menu, theme} from 'antd';
import React, { useState } from 'react';
import { useNavigate } from "react-router-dom";
import MenuBar from '../../components/MenuBar/menubar';

const { Header, Content, Sider } = Layout;


const MenuList = () => [
  {
    key: "/",
    title: "Trang chủ",
    icon: <HomeOutlined />,
    isHide: false,
    url: "/",
  },
  {
    key: "/manage_exam",
    title: "Quản lí đề thi",
    icon: <FileTextOutlined />,
    isHide: false,
    children: [
      {
        key: "/manage_exam/my_exam",
        title: "Đề thi",
        isHide: false,
        url: "/exams",
      },
      {
        key: "/manage_exam/create_exam",
        title: "Tạo đề thi",
        isHide: false,
        url: "/create-exam",
      },
    ],
  },
  {
    key: "/manage_courses",
    title: "Quản lí môn học",
    icon: <UnorderedListOutlined />,
    isHide: false,
    children: [
      {
        key: "courses/my_course",
        title: "Môn học của tôi",
        isHide: false,
        url: "/courses",
      },
      {
        key: "/create-course",
        title: "Tạo môn học",
        isHide: false,
        url: "/create-course",
      },
    ],
  },
  {
    key: "/manage_questions",
    title: "Quản lí câu hỏi",
    icon: <QuestionCircleOutlined />,
    isHide: false,
    children: [
      {
        key: "questions",
        title: "Câu hỏi",
        isHide: false,
        url: "/questions",
      },
      {
        key: "/create-question",
        title: "Tạo câu hỏi",
        isHide: false,
        url: "/create-question",
      },
    ],
  },
  {
    key: "/manage_users",
    title: "Quản lí người dùng",
    icon: <UsergroupAddOutlined />,
    isHide: false,
    children: [
      {
        key: "users",
        title: "Người dùng",
        isHide: false,
        url: "/users",
      },
      {
        key: "/create-user",
        title: "Tạo người dùng",
        isHide: false,
        url: "/create-user",
      },
    ],
  },
  {
    key: "/my_account",
    title: "Tài khoản",
    icon: <UserOutlined />,
    isHide: false,
    url: "/account",
  },
];

const Sidebar = ({children}) => {
  const {
    token: { colorBgContainer },
  } = theme.useToken();

  const navigate = useNavigate();

  return (
    <Sider
        width={200}
        style={{ background: colorBgContainer,}}
    >
        {/* <Menu
        mode="inline"
        defaultSelectedKeys={['1']}
        defaultOpenKeys={['sub1']}
        style={{
            height: '100%',
            borderRight: 0,
        }}
        items={MenuList()}
        /> */}
        <MenuBar menuList={MenuList()} mode="inline" />
    </Sider>
  )
    
};
export default Sidebar;