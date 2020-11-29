import { Layout, Menu } from 'antd';
import { LockOutlined, LaptopOutlined } from '@ant-design/icons';
import { Link } from "react-router-dom";

import '../Asset/CSS/SideBar.css'

const { SubMenu } = Menu;
const { Sider } = Layout;


function SideBar() {

    return (
        <Sider width={200} className="site-layout-background"
            breakpoint="sm"
            collapsedWidth="0"
            onBreakpoint={broken => {
                console.log(broken);
            }}
            onCollapse={(collapsed, type) => {
                console.log(collapsed, type);
            }}
        >
            <Menu
                mode="inline"
                defaultOpenKeys={['sub1']}
                style={{ height: '100%', borderRight: 0 }}
            >
                <SubMenu key="sub1" icon={<LaptopOutlined />} title="List Data">
                    <Menu.Item ><Link key="1" to="/settings/movies">Movies</Link></Menu.Item>
                    <Menu.Item ><Link key="2" to="/settings/games">Games</Link></Menu.Item>
                </SubMenu>
                <Menu.Item icon={<LockOutlined />} key="5">
                    <Link key="3" to="/settings/changePassword">
                        Change Password
                    </Link>
                </Menu.Item>
            </Menu>
        </Sider >
    )
}

export default SideBar
