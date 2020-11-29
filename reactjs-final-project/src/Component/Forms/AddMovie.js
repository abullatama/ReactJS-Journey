import React, { useContext } from 'react'
import { Layout, Form, Input, Button } from 'antd';
import Sidebar from '../Layouts/SideBar'
import axios from 'axios'
import { useHistory } from "react-router-dom";

import { MovieContext } from '../Context/MovieContext'
import { UserContext } from '../Context/UserContext'
import '../Asset/CSS/SetMovie.css'

const { Content } = Layout;
const layout = {
    labelCol: { span: 8 },
    wrapperCol: { span: 16 },
};

const AddMovie = () => {
    let History = useHistory()
    const [
        movie, setMovie, , , title, , description, , genre, , year, , duration, , rating, , review, , image_url, , , , , , input, setInput
    ] = useContext(MovieContext)
    const [user,] = useContext(UserContext)

    const handleSubmit = () => {
        axios.post(`https://backendexample.sanbersy.com/api/data-movie`, input, { headers: { "Authorization": `Bearer ${user.token}` } })
            .then(res => {
                let el = res.data
                setMovie([...movie, {
                    id: el.id,
                    title: el.title,
                    description: el.description,
                    genre: el.genre,
                    year: el.year,
                    duration: el.duration,
                    rating: el.rating,
                    review: el.review,
                    image_url: el.image_url
                }])
            })
        alert("New movie added successfully!")
        History.push("/settings/movies")
    }

    const handleChange = (event) => {
        let value = event.target.value
        let name = event.target.name
        switch (name) {
            case "title": {
                setInput({ ...input, title: value })
                break;
            }
            case "description": {
                setInput({ ...input, description: value })
                break;
            }
            case "genre": {
                setInput({ ...input, genre: value })
                break;
            }
            case "year": {
                setInput({ ...input, year: value })
                break;
            }
            case "duration": {
                setInput({ ...input, duration: value })
                break;
            }
            case "rating": {
                setInput({ ...input, rating: value })
                break;
            }
            case "review": {
                setInput({ ...input, review: value })
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
                <h1 className="title">Add New Movie</h1>
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
                            <Form.Item name={['title']} label="Title" rules={[{ required: true }]}>
                                <Input name="title" value={title} onChange={handleChange} />
                            </Form.Item>
                            <Form.Item name={['description']} label="Description">
                                <Input.TextArea name="description" value={description} onChange={handleChange} />
                            </Form.Item>
                            <Form.Item name={['genre']} label="Genre" >
                                <Input name="genre" value={genre} onChange={handleChange} />
                            </Form.Item>
                            <Form.Item name={['year']} label="Year">
                                <Input type="number" name="year" value={year} onChange={handleChange} />
                            </Form.Item>
                            <Form.Item name={['duration']} label="Duration" >
                                <Input type="number" name="duration" value={duration} onChange={handleChange} />
                            </Form.Item>
                            <Form.Item name={['rating']} label="Rating" >
                                <Input type="number" name="rating" value={rating} onChange={handleChange} />
                            </Form.Item>
                            <Form.Item name={['review']} label="Review">
                                <Input.TextArea name="review" value={review} onChange={handleChange} />
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

export default AddMovie