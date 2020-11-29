import React, { useContext } from 'react'
import { Layout, Form, Input, Button } from 'antd';
import Sidebar from '../Layouts/SideBar'
import axios from 'axios'
import { useHistory } from "react-router-dom";

import { GameContext } from '../Context/GameContext'
import { UserContext } from '../Context/UserContext'
import '../Asset/CSS/SetMovie.css'

const { Content } = Layout;
const layout = {
    labelCol: { span: 8 },
    wrapperCol: { span: 16 },
};

const AddGame = () => {
    let History = useHistory()
    const [game, setGame, , , name, , genre, , release, , platform, , singlePlayer, , multiPlayer, , image_url, , , , , , input, setInput
    ] = useContext(GameContext)
    const [user,] = useContext(UserContext)

    const handleSubmit = () => {
        axios.post(`https://backendexample.sanbersy.com/api/data-game`, input, { headers: { "Authorization": `Bearer ${user.token}` } })
            .then(res => {
                let el = res.data
                setGame([...game, {
                    id: el.id,
                    name: el.name,
                    genre: el.genre,
                    release: el.release,
                    platform: el.platform,
                    singlePlayer: el.singlePlayer,
                    multiPlayer: el.multiplayer,
                    image_url: el.image_url,
                }])
            })
        alert("New game added successfully!")
        History.push("/settings/games")
    }

    const handleChange = (event) => {
        let value = event.target.value
        let name = event.target.name
        switch (name) {
            case "name": {
                setInput({ ...input, name: value })
                break;
            }
            case "genre": {
                setInput({ ...input, genre: value })
                break;
            }
            case "release": {
                setInput({ ...input, release: value })
                break;
            }
            case "platform": {
                setInput({ ...input, platform: value })
                break;
            }
            case "singleplayer": {
                setInput({ ...input, singlePlayer: value })
                break;
            }
            case "multiplayer": {
                setInput({ ...input, multiplayer: value })
                break;
            }
            case "image_url": {
                setInput({ ...input, image_url: value })
                break;
            }
            default: { break; }
        }
    }

    return (
        <>
            <Sidebar />
            <Layout style={{ padding: '0 24px 24px' }}>
                <h1 className="title">Add New Games</h1>
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
                            <Form.Item name={['name']} label="Name" rules={[{ required: true }]}>
                                <Input name="name" value={name} onChange={handleChange} />
                            </Form.Item>
                            <Form.Item name={['genre']} label="Genre">
                                <Input name="genre" value={genre} onChange={handleChange} />
                            </Form.Item>
                            <Form.Item name={['release']} label="Release">
                                <Input name="release" value={release} onChange={handleChange} />
                            </Form.Item>
                            <Form.Item name={['platform']} label="Platform" >
                                <Input name="platform" value={platform} onChange={handleChange} />
                            </Form.Item>
                            <Form.Item name={['singleplayer']} label="Singleplayer">
                                <Input type="number" min="0" max="1" name="singleplayer" value={singlePlayer} onChange={handleChange} />
                            </Form.Item>
                            <Form.Item name={['multiplayer']} label="Multiplayer" >
                                <Input type="number" min="0" max="1" name="multiplayer" value={multiPlayer} onChange={handleChange} />
                            </Form.Item>
                            <Form.Item name={['image_url']} label="Image URL">
                                <Input name="image_url" value={image_url} onChange={handleChange} />
                            </Form.Item>
                            <Form.Item wrapperCol={{ ...layout.wrapperCol, offset: 10 }}>
                                <Button type="primary" htmlType="submit">
                                    Submit
                                </Button>
                            </Form.Item>
                        </Form>
                    </div>
                </Content>
            </Layout>
        </>
    )
}

export default AddGame