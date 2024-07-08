const { Sider } = Layout;
import { sideBarItemGenerator } from "../../utils/sideBarItemGenerator";
import { adminPaths } from "../../routes/admin.routes";
import { Layout, Menu } from "antd";

const Sidebar = () => {
  return (
    <Sider breakpoint="lg" collapsedWidth="0">
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
        items={sideBarItemGenerator(adminPaths, "admin")}
      />
    </Sider>
  );
};

export default Sidebar;
