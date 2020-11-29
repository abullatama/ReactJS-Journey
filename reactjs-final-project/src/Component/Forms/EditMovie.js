import React, { useContext, useEffect } from 'react'
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

const EditMovie = () => {
    let History = useHistory()
    const [form] = Form.useForm()
    const [
        movie, setMovie, , , title, setTitle, description, setDescription, genre, setGenre, year, setYear, duration, setDuration, rating, setRating, review, setReview, image_url, setImage_url, currentIndex, setCurrentIndex, index, , input, setInput
    ] = useContext(MovieContext)
    const [user,] = useContext(UserContext)

    useEffect(() => {
        if (currentIndex === 0) {
            setCurrentIndex(1)
            axios.get(`https://backendexample.sanbersy.com/api/data-movie/${index}`, { headers: { "Authorization": `Bearer ${user.token}` } })
                .then(res => {
                    let data = res.data
                    setTitle(data.title)
                    setDescription(data.description)
                    setGenre(data.genre)
                    setYear(data.year)
                    setDuration(data.duration)
                    setRating(data.rating)
                    setReview(data.review)
                    setImage_url(data.image_url)
                })
            setInput({
                title: title,
                description: description,
                genre: genre,
                year: year,
                duration: duration,
                rating: rating,
                review: review,
                image_url: image_url,
            })
        }
        form.setFieldsValue({
            title: title,
            description: description,
            genre: genre,
            year: year,
            duration: duration,
            rating: rating,
            review: review,
            image_url: image_url
        });
    })

    const handleSubmitForm = () => {
        axios.put(`https://backendexample.sanbersy.com/api/data-movie/${index}`, {
            title: title,
            description: description,
            genre: genre,
            year: year,
            duration: duration,
            rating: rating,
            review: review,
            image_url: image_url
        }, { headers: { "Authorization": `Bearer ${user.token}` } })
            .then(res => {
                let dataMovie = movie.find(el => el.id === index)
                dataMovie.title = title
                dataMovie.description = description
                dataMovie.genre = genre
                dataMovie.year = year
                dataMovie.duration = duration
                dataMovie.rating = rating
                dataMovie.review = review
                dataMovie.image_url = image_url
                setMovie([...movie])
            }).catch((err) => {
                alert(err)
            })
        setTitle("")
        setDescription("")
        setGenre("")
        setYear("")
        setDuration("")
        setRating("")
        setReview("")
        setImage_url("")
        setInput({
            title: "", description: "", genre: "", year: "", duration: "", rating: "", review: "", image_url: ""
        })
        alert("Update Success!")
        History.push("/settings/movies")
    }

    const handleChange = (event) => {
        let value = event.target.value
        let name = event.target.name
        switch (name) {
            case "title": {
                setTitle(value)
                setInput({ ...input, title: title })
                break;
            }
            case "description": {
                setDescription(value)
                setInput({ ...input, title: description })
                break;
            }
            case "genre": {
                setGenre(value)
                setInput({ ...input, title: genre })
                break;
            }
            case "year": {
                setYear(value)
                setInput({ ...input, title: year })
                break;
            }
            case "duration": {
                setDuration(value)
                setInput({ ...input, title: duration })
                break;
            }
            case "rating": {
                setRating(value)
                setInput({ ...input, title: rating })
                break;
            }
            case "review": {
                setReview(value)
                setInput({ ...input, title: review })
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
                <h1 className="title">Edit Movie</h1>
                <Content
                    className="site-layout-background"
                    style={{
                        padding: 24,
                        margin: 0,
                        minHeight: 280,
                    }}
                >
                    {movie !== null &&
                        (<div className="addmovie">
                            <Form {...layout}
                                name="nest-messages"
                                initialValues={{
                                    title: title,
                                    description: description,
                                    genre: genre,
                                    year: year,
                                    duration: duration,
                                    rating: rating,
                                    review: review,
                                    image_url: image_url
                                }}
                                form={form}
                                onFinish={handleSubmitForm}
                            >
                                <Form.Item name="title" label="Title" value="abul" rules={[{ required: true }]} >
                                    <Input name="title" value={title} onChange={handleChange} />
                                </Form.Item>
                                <Form.Item name="description" label="Description" onChange={handleChange}>
                                    <Input.TextArea name="description" value={description} onChange={handleChange} />
                                </Form.Item>
                                <Form.Item name="genre" label="Genre" >
                                    <Input name="genre" value={genre} onChange={handleChange} />
                                </Form.Item>
                                <Form.Item name="year" label="Year">
                                    <Input type="number" name="year" value={year} onChange={handleChange} />
                                </Form.Item>
                                <Form.Item name="duration" label="Duration" >
                                    <Input type="number" name="duration" value={duration} onChange={handleChange} />
                                </Form.Item>
                                <Form.Item name="rating" label="Rating" >
                                    <Input type="number" name="rating" value={rating} onChange={handleChange} />
                                </Form.Item>
                                <Form.Item name="review" label="Review">
                                    <Input.TextArea name="review" value={review} onChange={handleChange} />
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

export default EditMovie