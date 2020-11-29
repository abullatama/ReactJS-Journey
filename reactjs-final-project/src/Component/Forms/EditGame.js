import React, { useContext, useEffect } from 'react'
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

const EditGame = () => {
    let History = useHistory()
    const [form] = Form.useForm()
    const [
        game, setGame, , , name, setName, genre, setGenre, release, setRelease, platform, setPlatform, singlePlayer, setSinglePlayer, multiPlayer, setMultiPlayer, image_url, setImage_url, currentIndex, setCurrentIndex, index, , input, setInput
    ] = useContext(GameContext)
    const [user,] = useContext(UserContext)

    useEffect(() => {
        if (currentIndex === 0) {
            setCurrentIndex(1)
            console.log(index)
            axios.get(`https://backendexample.sanbersy.com/api/data-game/${index}`, { headers: { "Authorization": `Bearer ${user.token}` } })
                .then(res => {
                    let data = res.data
                    setName(data.name)
                    setGenre(data.genre)
                    setRelease(data.release)
                    setPlatform(data.platform)
                    setSinglePlayer(data.singlePlayer)
                    setMultiPlayer(data.multiplayer)
                    setImage_url(data.image_url)
                })
            setInput({
                name: name,
                genre: genre,
                release: release,
                platform: platform,
                singlePlayer: singlePlayer,
                multiPlayer: multiPlayer,
                image_url: image_url,
            })
        }
        form.setFieldsValue({
            name: name,
            genre: genre,
            release: release,
            platform: platform,
            singlePlayer: singlePlayer,
            multiPlayer: multiPlayer,
            image_url: image_url
        });
        console.log(multiPlayer)
    })

    const handleSubmitForm = () => {
        axios.put(`https://backendexample.sanbersy.com/api/data-game/${index}`, {
            name: name,
            genre: genre,
            release: release,
            platform: platform,
            singlePlayer: singlePlayer,
            multiplayer: multiPlayer,
            image_url: image_url
        }, { headers: { "Authorization": `Bearer ${user.token}` } })
            .then(res => {
                let dataGame = game.find(el => el.id === index)
                dataGame.name = name
                dataGame.genre = genre
                dataGame.release = release
                dataGame.platform = platform
                dataGame.singlePlayer = singlePlayer
                dataGame.multiPlayer = multiPlayer
                dataGame.image_url = image_url
                setGame([...game])
            }).catch((err) => {
                alert(err)
            })
        setName("")
        setGenre("")
        setRelease("")
        setPlatform("")
        setSinglePlayer("")
        setMultiPlayer("")
        setImage_url("")
        setInput({
            name: "", genre: "", release: "", platform: "", singlePlayer: "", multiPlayer: "", image_url: ""
        })
        alert("Update Success!")
        History.push("/settings/games")
    }

    const handleChange = (event) => {
        let value = event.target.value
        let name = event.target.name
        switch (name) {
            case "name": {
                setName(value)
                setInput({ ...input, name: name })
                break;
            }
            case "genre": {
                setGenre(value)
                setInput({ ...input, genre: genre })
                break;
            }
            case "release": {
                setRelease(value)
                setInput({ ...input, release: release })
                break;
            }
            case "platform": {
                setPlatform(value)
                setInput({ ...input, platform: platform })
                break;
            }
            case "singlePlayer": {
                setSinglePlayer(value)
                setInput({ ...input, singlePlayer: singlePlayer })
                break;
            }
            case "multiPlayer": {
                setMultiPlayer(value)
                setInput({ ...input, multiPlayer: multiPlayer })
                break;
            }
            case "image_url": {
                setImage_url(value)
                setInput({ ...input, title: image_url })
                break;
            }
            default: { break; }
        }
    }

    return (
        <>
            <Sidebar />
            <Layout style={{ padding: '0 24px 24px' }}>
                <h1 className="title">Edit Game</h1>
                <Content
                    className="site-layout-background"
                    style={{
                        padding: 24,
                        margin: 0,
                        minHeight: 280,
                    }}
                >
                    {game !== null &&
                        (<div className="addmovie">
                            <Form {...layout}
                                name="nest-messages"
                                initialValues={{
                                    name: name,
                                    genre: genre,
                                    release: release,
                                    platform: platform,
                                    singlePlayer: singlePlayer,
                                    multiPlayer: multiPlayer,
                                    image_url: image_url
                                }}
                                form={form}
                                onFinish={handleSubmitForm}
                            >
                                <Form.Item name="name" label="Name" rules={[{ required: true }]} >
                                    <Input name="name" value={name} onChange={handleChange} />
                                </Form.Item>
                                <Form.Item name="genre" label="Genre" onChange={handleChange}>
                                    <Input.TextArea name="genre" value={genre} onChange={handleChange} />
                                </Form.Item>
                                <Form.Item name="release" label="Release" >
                                    <Input name="release" value={release} onChange={handleChange} />
                                </Form.Item>
                                <Form.Item name="platform" label="Platform">
                                    <Input name="platform" value={platform} onChange={handleChange} />
                                </Form.Item>
                                <Form.Item name="singlePlayer" label="Singleplayer" >
                                    <Input type="number" name="singlePlayer" value={singlePlayer} onChange={handleChange} />
                                </Form.Item>
                                <Form.Item name="multiPlayer" label="Multiplayer" >
                                    <Input type="number" name="multiPlayer" value={multiPlayer} onChange={handleChange} />
                                </Form.Item>
                                <Form.Item name="image_url" label="Image URL">
                                    <Input.TextArea name="image_url" value={image_url} onChange={handleChange} />
                                </Form.Item>
                                <Form.Item wrapperCol={{ ...layout.wrapperCol, offset: 8 }}>
                                    <Button type="primary" htmlType="submit">
                                        Update
                                    </Button>
                                </Form.Item>
                            </Form>
                        </div>)
                    }
                </Content>
            </Layout>
        </>
    )
}

export default EditGame