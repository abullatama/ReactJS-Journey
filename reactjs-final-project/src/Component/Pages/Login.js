import { Form, Input, Button, Checkbox } from 'antd';
import { MailOutlined, LockOutlined } from '@ant-design/icons';
import { Link } from "react-router-dom";
import React, { useContext, useState } from "react"
import { UserContext } from "../Context/UserContext"
import axios from "axios"

import '../Asset/CSS/Login.css'

const Login = () => {
    const [, setUser] = useContext(UserContext)
    const [input, setInput] = useState({ email: "", password: "" })

    const handleSubmit = () => {
        axios.post("https://backendexample.sanbersy.com/api/user-login", {
            email: input.email,
            password: input.password
        }).then(
            (res) => {
                var user = res.data.user
                var token = res.data.token
                var currentUser = { name: user.name, email: user.email, token }
                setUser(currentUser)
                localStorage.setItem("user", JSON.stringify(currentUser))
                alert("Welcome")
            }
        ).catch((err) => {
            alert("Incorrect Username or Password")
        })
    }

    const handleChange = (event) => {
        let value = event.target.value
        let name = event.target.name
        switch (name) {
            case "email": {
                setInput({ ...input, email: value })
                break;
            }
            case "password": {
                setInput({ ...input, password: value })
                break;
            }
            default: { break; }
        }
    }

    return (
        <>
            <div className="login-page">
                <div className="login">
                    <h2 style={{ textAlign: "center", marginBottom: 20, color: "white" }}><b>LOGIN</b></h2>
                    <Form
                        name="normal_login"
                        className="login-form"
                        initialValues={{ remember: true }}
                        onFinish={handleSubmit}
                    >
                        <Form.Item
                            name="email"
                            rules={[{ required: true, message: 'Please input your Email!' }]}
                        >
                            <Input prefix={<MailOutlined className="site-form-item-icon" />} placeholder="Email" onChange={handleChange} value={input.email} name="email" />
                        </Form.Item>
                        <Form.Item
                            name="password"
                            rules={[{ required: true, message: 'Please input your Password!' }]}
                        >
                            <Input.Password
                                prefix={<LockOutlined className="site-form-item-icon" />} onChange={handleChange} value={input.password} name="password"
                                type="password"
                                placeholder="Password"
                            />
                        </Form.Item>
                        <Form.Item>
                            <Form.Item name="remember" valuePropName="checked" >
                                <Checkbox style={{ color: "white" }}>Remember me</Checkbox>
                                <a className="login-form-forgot" href="/login">
                                    Forgot password
                                </a>
                            </Form.Item>
                        </Form.Item>
                        <Form.Item>
                            <Button type="danger" htmlType="submit" className="login-form-button" >
                                Log in
                            </Button><br />
                            <span style={{ color: "white" }}>Are you new in here? </span>
                            <Link key="5" to="/register">register now!</Link>
                        </Form.Item>
                    </Form>
                </div>
            </div>
        </>
    )
}

export default Login