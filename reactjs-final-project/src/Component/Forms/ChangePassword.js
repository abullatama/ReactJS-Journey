import React, { useContext, useState } from 'react'
import { Layout, Form, Input, Button } from 'antd';
import Sidebar from '../Layouts/SideBar'
import axios from 'axios'
import { useHistory } from "react-router-dom";

import { UserContext } from '../Context/UserContext'
import '../Asset/CSS/SetMovie.css'

const { Content } = Layout;
const layout = {
    labelCol: { span: 8 },
    wrapperCol: { span: 16 },
};

const ChangePassword = () => {
    let History = useHistory()
    const [user,] = useContext(UserContext)
    const [input, setInput] = useState({ currentPassword: "", newPassword: "", confirmPassword: "" })
    const [currentPassword, setCurrentPassword] = useState("")
    const [newPassword, setNewPassword] = useState("")
    const [confirmPassword, setConfirmPassword] = useState("")


    const handleSubmit = () => {
        console.log(user.input)
        axios.post(`https://backendexample.sanbersy.com/api/change-password`, input, { headers: { "Authorization": `Bearer ${user.token}` } })
            .then(res => {
                console.log(user)
            })
        alert("Password changed successfully!")
        History.push("/")
    }

    const handleChange = (event) => {
        let name = event.target.name
        let value = event.target.value
        switch (name) {
            case "currentPassword": {
                setCurrentPassword(value)
                setInput({ ...input, current_password: value })
                break;
            }
            case "newPassword": {
                setNewPassword(value)
                setInput({ ...input, new_password: value })
                break;
            }
            case "confirmPassword": {
                setConfirmPassword(value)
                setInput({ ...input, new_confirm_password: value })
                break;
            }
            default: { break; }
        }
    }

    return (
        <>
            <Sidebar />
            <Layout style={{ padding: '0 24px 24px' }}>
                <h1 className="title">Change Password</h1>
                <Content
                    className="site-layout-background"
                    style={{
                        padding: 24,
                        margin: 0,
                        minHeight: 280,
                    }}
                >
                    <div className="addmovie">
                        <Form {...layout} name="nest-messages" onFinish={handleSubmit} >
                            <Form.Item name={['currentPassword']} label="Current Password" rules={[{ required: true }]}>
                                <Input name="currentPassword" value={currentPassword} onChange={handleChange} />
                            </Form.Item>
                            <Form.Item name={['newPassword']} label="New Password">
                                <Input name="newPassword" value={newPassword} onChange={handleChange} />
                            </Form.Item>
                            <Form.Item name={['confirmPassword']} label="Confirm Password">
                                <Input name="confirmPassword" value={confirmPassword} onChange={handleChange} />
                            </Form.Item>
                            <Form.Item wrapperCol={{ ...layout.wrapperCol, offset: 10 }}>
                                <Button type="primary" htmlType="submit">
                                    update
                                </Button>
                            </Form.Item>
                        </Form>
                    </div>
                </Content>
            </Layout>
        </>
    )
}

export default ChangePassword