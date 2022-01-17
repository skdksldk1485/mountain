import React, { useState } from 'react';
import logo from '.././src_assets/mountain-logo.png';
import { Link } from 'react-router-dom';
import { Menu, Avatar } from 'antd';
import { UserOutlined } from '@ant-design/icons';
import styled from 'styled-components';

const Nav = styled.div`
  padding: 10px;
  font-size: 18px;
  font-weight: bold;
`;

const Logo = styled.img`
  width: 50px;
`;

const Navbar = () => {
  const [current, setCurrent] = useState('main');

  const handleClick = e => {
    setCurrent(e.key);
  };
  return (
    <Nav>
      <Menu onClick={handleClick} selectedKeys={[current]} mode="horizontal">
        <Menu.Item key="main">
          <Link to="/">
            <img src={logo} alt="logo" style={{ width: '50px' }} />
          </Link>
        </Menu.Item>

        <Menu.Item key="search">
          <Link to="/search">산 검색</Link>
        </Menu.Item>

        <Menu.Item key="community">
          <Link to="/community">커뮤니티</Link>
        </Menu.Item>

        <Menu.Item key="login">
          <Link to="/login">
            <Avatar
              style={{
                backgroundColor: 'var(--color-dark-green)',
                cursor: 'pointer',
              }}
              icon={<UserOutlined />}
            />
          </Link>
        </Menu.Item>
      </Menu>
    </Nav>
  );
};

export default Navbar;
