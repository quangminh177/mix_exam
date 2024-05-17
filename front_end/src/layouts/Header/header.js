import React, { useEffect } from "react";
import { Input, Button, Dropdown, Space } from "antd";
import "./header.css";
import {
  SettingOutlined,
  LogoutOutlined,
  SearchOutlined,
  UserOutlined,
} from "@ant-design/icons";
import avatar from "../../assets/icons/avatar.svg";
import { removeLocalStorage } from "../../utils/storageUtils";


const Header = (item) => {
  const handleLogOut = () => {
    removeLocalStorage('username');
    removeLocalStorage('token');
  };
  
  const items = [
    {
      label: (
        <a href="" style={{ display: "flex", justifyContent: "start" }}>
          Account
        </a>
      ),
      key: "0",
      icon: <UserOutlined />,
    },
    {
      label: (
        <a href="" style={{ display: "flex", justifyContent: "start" }}>
          Setting
        </a>
      ),
      key: "1",
      icon: <SettingOutlined />,
    },
    {
      label: (
        <a href="" style={{ display: "flex" }} onClick={handleLogOut}>
          Sign out
        </a>
      ),
      key: "2",
      icon: <LogoutOutlined />,
    },
  ];

  return (
    <>
      <header className="header">
        <span className="header-logo">MIX EXAM</span>
        <Input
          placeholder="Tìm kiếm nội dung"
          prefix={<SearchOutlined />}
          className="input-search"
        />
        <span className="user-button-header">
          {(!!item.token) ? <Dropdown
                menu={{
                items,
                }}
                trigger={["click"]}
            >
                <a onClick={(e) => e.preventDefault()}>
                  <Space>
                  <Button >{item.userName}</Button>
                  </Space>
                </a>
            </Dropdown>
            :<Button href="/login">Login</Button>
            }            
        </span>
      </header>
    </>
  );
};

export default Header;
