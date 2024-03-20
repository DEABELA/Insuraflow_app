import React from "react";
import { Layout, Menu, Breadcrumb, Card } from "antd";
import {
  DesktopOutlined,
  PieChartOutlined,
  FileOutlined,
  TeamOutlined,
  UserOutlined,
} from "@ant-design/icons";

const { Header, Content, Footer, Sider } = Layout;
const { SubMenu } = Menu;

const Admin = () => {
  return (
    <Layout style={{ minHeight: "100vh" }}>
      <Sider collapsible style={{ background: "white" }}>
        <div className="logo" />
        <Menu theme="light" defaultSelectedKeys={["1"]} mode="inline">
          <Menu.Item key="1" icon={<PieChartOutlined />}>
            Dashboard
          </Menu.Item>
          <SubMenu key="sub1" icon={<UserOutlined />} title="Users">
            <Menu.Item key="2">User 1</Menu.Item>
            <Menu.Item key="3">User 2</Menu.Item>
          </SubMenu>
          <Menu.Item key="4" icon={<DesktopOutlined />}>
            Devices
          </Menu.Item>
          <Menu.Item key="5" icon={<FileOutlined />}>
            Files
          </Menu.Item>
          <Menu.Item key="6" icon={<TeamOutlined />}>
            Teams
          </Menu.Item>
        </Menu>
      </Sider>
      <Layout className="site-layout">
        <Content style={{ margin: "0 16px" }}>
          <Breadcrumb style={{ margin: "16px 0" }}>
            <Breadcrumb.Item>User</Breadcrumb.Item>
            <Breadcrumb.Item>Dashboard</Breadcrumb.Item>
          </Breadcrumb>
          <div
            className="site-layout-background"
            style={{ padding: 24, minHeight: 360 }}
          >
            <Card title="Dashboard" bordered={false}>
              Dashboard Content Goes Here
            </Card>
          </div>
        </Content>
        <Footer style={{ textAlign: "center" }}>
          Ant Design Dashboard ©2024 Created by You
        </Footer>
      </Layout>
    </Layout>
  );
};

export default Admin;
