import { useEffect, createContext, useState } from 'react'
import axios from 'axios'

export const MovieContext = createContext();

export const MovieProvider = props => {
    const [movie, setMovie] = useState(null)
    const [id, setId] = useState("")
    const [title, setTitle] = useState("")
    const [description, setDescription] = useState("")
    const [genre, setGenre] = useState("")
    const [year, setYear] = useState("")
    const [duration, setDuration] = useState("")
    const [rating, setRating] = useState("")
    const [review, setReview] = useState("")
    const [image_url, setImage_url] = useState("")
    const [currentIndex, setCurrentIndex] = useState(0)
    const [index, setIndex] = useState("")
    const [input, setInput] = useState({
        title: "", description: "", genre: "", year: "", duration: "", rating: "", review: "", image_url: ""
    })

    useEffect(() => {
        if (movie === null) {
            axios.get(`https://backendexample.sanbersy.com/api/data-movie`)
                .then(res => {
                    let data = res.data
                    setMovie(data.map(el => {
                        return {
                            id: el.id,
                            title: el.title,
                            description: el.description,
                            genre: el.genre,
                            year: el.year,
                            duration: el.duration,
                            rating: el.rating,
                            review: el.review,
                            image_url: el.image_url
                        }
                    }))
                })
        }
    })

    return (
        <>
            <MovieContext.Provider value={
                [
                    movie,
                    setMovie,
                    id,
                    setId,
                    title,
                    setTitle,
                    description,
                    setDescription,
                    genre,
                    setGenre,
                    year,
                    setYear,
                    duration,
                    setDuration,
                    rating,
                    setRating,
                    review,
                    setReview,
                    image_url,
                    setImage_url,
                    currentIndex,
                    setCurrentIndex,
                    index,
                    setIndex,
                    input,
                    setInput,
                ]}>
                {props.children}
            </MovieContext.Provider>
        </>
    )
}
