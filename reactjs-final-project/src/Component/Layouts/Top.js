import React, { useContext } from "react"
import { Layout, Menu } from 'antd';
import { Link, useHistory } from "react-router-dom";

import { UserContext } from "../Context/UserContext";
import logo from '../Asset/Image/logo-netflix.png'
import '../Asset/CSS/Top.css'

const { Header } = Layout;


function Top() {
    let History = useHistory()
    const [user, setUser] = useContext(UserContext)
    const handleLogout = () => {
        setUser(null)
        localStorage.removeItem("user")
        History.push("/login")
    }

    return (
        <Layout>
            <Header className="header">
                <div className="logo">
                    <img src={logo} alt="logo" />
                </div>
                <Menu className="menu" theme="dark" mode="horizontal">
                    <Menu.Item key="1"><Link to="/">Home</Link></Menu.Item>
                    <Menu.Item key="2"><Link to="/movies">Movies</Link></Menu.Item>
                    <Menu.Item key="3"><Link to="/games">Games</Link></Menu.Item>
                    {user && <Menu.Item key="4"><Link to="/settings/movies">Settings</Link></Menu.Item>}
                    {user === null && <Menu.Item key="5"><Link to="/login">Login</Link></Menu.Item>}
                    {user && <Menu.Item key="6" onClick={handleLogout}>Logout</Menu.Item>}
                </Menu>
            </Header>
        </Layout>
    )
}

export default Top