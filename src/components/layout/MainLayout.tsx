import { Layout, Menu } from "antd";
const { Header, Content, Footer, Sider } = Layout;
import { Outlet } from "react-router-dom";
import { adminSidebarItems } from "../../routes/admin.routes";

const MainLayout = () => {
  return (
    <div>
      <Layout>
        <Sider
          breakpoint="lg"
          collapsedWidth="0"
          onBreakpoint={(broken) => {
            console.log(broken);
          }}
          onCollapse={(collapsed, type) => {
            console.log(collapsed, type);
          }}
        >
          <div
            style={{
              font: "bold",
              color: "white",
              height: "4rem",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
            className=""
          >
            PH Uni
          </div>
          <Menu
            theme="dark"
            mode="inline"
            defaultSelectedKeys={["4"]}
            items={adminSidebarItems}
          />
        </Sider>
        <Layout style={{ height: "100vh" }}>
          <Header style={{ padding: 0 }} />
          <Content style={{ margin: "24px 16px 0" }}>
            <div
              style={{
                padding: 24,
                minHeight: 360,
              }}
            >
              <Outlet></Outlet>
            </div>
          </Content>
          <Footer style={{ textAlign: "center" }}>
            Ant Design ©{new Date().getFullYear()} Created by Ant UED
          </Footer>
        </Layout>
      </Layout>
    </div>
  );
};

export default MainLayout;
