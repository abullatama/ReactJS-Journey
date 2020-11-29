import { Form, Input, Button, Checkbox } from 'antd';
import { UserOutlined, LockOutlined, MailOutlined } from '@ant-design/icons';
import React, { useContext, useState } from "react"
import axios from "axios"
import { useHistory } from "react-router-dom";

import { UserContext } from "../Context/UserContext"


import '../Asset/CSS/Login.css'

const Register = () => {
    let History = useHistory()
    const [user, setUser] = useContext(UserContext)
    const [input, setInput] = useState({ name: "", email: "", password: "" })

    const handleSubmit = () => {
        axios.post("https://backendexample.sanbersy.com/api/register", {
            name: input.name,
            email: input.email,
            password: input.password
        }).then(
            (res) => {
                var user = res.data.user
                var token = res.data.token
                var currentUser = { name: user.name, email: user.email, token }
                setUser(currentUser)
                localStorage.setItem("user", JSON.stringify(currentUser))
            }
        ).catch((err) => {
            alert(err)
        })
        alert("you have successfully registered")
        History.push("/")
    }

    const handleChange = (event) => {
        let value = event.target.value
        let name = event.target.name
        switch (name) {
            case "username": {
                setInput({ ...input, name: value })
                console.log(user)
                break;
            }
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
        console.log(input)
    }

    return (
        <>
            <div className="login-page">
                <div className="login">
                    <h2 style={{ textAlign: "center", marginBottom: 20, color: "white" }}><b>REGISTER</b></h2>
                    <Form
                        name="normal_login"
                        className="login-form"
                        initialValues={{ remember: true }}
                        onFinish={handleSubmit}
                    >
                        <Form.Item
                            name="username"
                            rules={[{ required: true, message: 'Please input your Username!' }]}
                        >
                            <Input prefix={<UserOutlined className="site-form-item-icon" />} placeholder="Username" name="username" onChange={handleChange} value={input.name} />
                        </Form.Item>
                        <Form.Item
                            name="email"
                            rules={[{ required: true, message: 'Please input your email!' }]}
                        >
                            <Input prefix={<MailOutlined className="site-form-item-icon" />} placeholder="Email" name="email" onChange={handleChange} value={input.email} />
                        </Form.Item>
                        <Form.Item
                            name="password"
                            rules={[{ required: true, message: 'Please input your Password!' }]}
                        >
                            <Input.Password
                                prefix={<LockOutlined className="site-form-item-icon" />} name="password" onChange={handleChange} value={input.password}
                                type="password"
                                placeholder="Password"
                            />
                        </Form.Item>
                        <Form.Item>
                            <Form.Item name="remember" valuePropName="checked" >
                                <Checkbox style={{ color: "white" }}>Remember me</Checkbox>
                            </Form.Item>
                        </Form.Item>
                        <Form.Item>
                            <Button type="danger" className="login-form-button" onClick={handleSubmit}>
                                Register
                            </Button><br />
                        </Form.Item>
                    </Form>
                </div>
            </div>
        </>
    )
}

export default Register