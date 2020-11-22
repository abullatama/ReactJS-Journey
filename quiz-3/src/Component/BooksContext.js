import { useState, useEffect, createContext } from 'react'
import axios from 'axios'
import React from 'react'

export const BookContext = createContext();

export const DataBooks = props => {
    const [dataBook, setDataBook] = useState(null)
    const [prevIndex, setPrevIndex] = useState(0)
    const [title, setTitle] = useState("")
    const [description, setDescription] = useState("")
    const [review, setReview] = useState("")
    const [release_year, setRelease_year] = useState(2020)
    const [totalPage, setTotalPage] = useState("")
    const [price, setPrice] = useState("")
    const [image_url, setImageUrl] = useState("")
    const [inputBook, setInputBook] = useState([])
    const [index, setIndex] = useState()
    const [username, setUsername] = useState()
    const [password, setPassword] = useState()
    const [statusLogin, setStatusLogin] = useState(null)
    const [search, setSearch] = useState()


    useEffect(() => {
        if (dataBook === null) {
            axios.get(`http://backendexample.sanbercloud.com/api/books`)
                .then(res => {
                    let data = res.data
                    setDataBook(data.map(el => {
                        return {
                            created_at: el.created_at,
                            description: el.description,
                            id: el.id,
                            image_url: el.image_url,
                            price: el.price,
                            release_year: el.release_year,
                            review: el.review,
                            title: el.title,
                            totalPage: el.totalPage,
                            updated_at: el.updated_at
                        }
                    }))
                })
            console.log(dataBook)
        }
    })

    return (
        <>
            <BookContext.Provider value={
                [
                    dataBook,
                    setDataBook,
                    prevIndex,
                    setPrevIndex,
                    title,
                    setTitle,
                    description,
                    setDescription,
                    review,
                    setReview,
                    release_year,
                    setRelease_year,
                    totalPage,
                    setTotalPage,
                    price,
                    setPrice,
                    image_url,
                    setImageUrl,
                    inputBook,
                    setInputBook,
                    index,
                    setIndex,
                    username,
                    setUsername,
                    password,
                    setPassword,
                    statusLogin,
                    setStatusLogin,
                    search,
                    setSearch
                ]}>
                {props.children}
            </BookContext.Provider>
        </>
    )
}
