import { useContext } from 'react'
import axios from 'axios'
import React from 'react'
import { BookContext } from './BooksContext'
import './css/books.css'

const DataBooks = () => {
    const [
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
        search,
        setSearch
    ] = useContext(BookContext)


    const handleChange = (event) => {
        let typeOfInput = event.target.name
        console.log(typeOfInput)
        switch (typeOfInput) {
            case "title":
                {
                    setTitle(event.target.value)
                    setInputBook({ ...inputBook, title: event.target.value });
                    break
                }
            case "description":
                {
                    setDescription(event.target.value)
                    setInputBook({ ...inputBook, description: event.target.value });
                    break
                }
            case "review":
                {
                    setReview(event.target.value)
                    setInputBook({ ...inputBook, review: event.target.value });
                    break
                }
            case "release_year":
                {
                    setRelease_year(event.target.value)
                    setInputBook({ ...inputBook, release_year: event.target.value });
                    break
                }
            case "totalPage":
                {
                    setTotalPage(event.target.value)
                    setInputBook({ ...inputBook, totalPage: event.target.value });
                    break
                }
            case "price":
                {
                    setPrice(event.target.value)
                    setInputBook({ ...inputBook, price: event.target.value });
                    break
                }
            case "image_url":
                {
                    setImageUrl(event.target.value)
                    setInputBook({ ...inputBook, image_url: event.target.value });
                    break
                }
            case "search":
                {
                    setSearch(event.target.value)
                    break
                }
            default:
                { break; }
        }
    }

    const handleSubmitForm = (e) => {
        e.preventDefault()
        if (prevIndex === 0) {
            axios.post(`http://backendexample.sanbercloud.com/api/books`, inputBook)
                .then(res => {
                    let el = res.data
                    setDataBook([...dataBook, {
                        id: el.id,
                        title: el.title,
                        description: el.description,
                        review: el.review,
                        release_year: el.release_year,
                        totalPage: el.totalPage,
                        price: el.price,
                        image_url: el.image_url,
                    }])
                    console.log(el)
                })
            setTitle("")
            setDescription("")
            setReview("")
            setRelease_year("")
            setTotalPage("")
            setPrice("")
            setImageUrl("")
            setInputBook({})
        } else if (prevIndex === 1) {
            axios.put(`http://backendexample.sanbercloud.com/api/books/${index}`, inputBook)
                .then(() => {
                    let databook = dataBook.find(el => el.id === index)
                    databook.title = title
                    databook.description = description
                    databook.review = review
                    databook.release_year = release_year
                    databook.totalPage = totalPage
                    databook.price = price
                    databook.image_url = image_url
                    setDataBook([...dataBook])
                })
            setPrevIndex(0)
            setTitle("")
            setDescription("")
            setReview("")
            setRelease_year("")
            setTotalPage("")
            setPrice("")
            setImageUrl("")
            setInputBook({})
        }
    }

    const handleFormUpdate = (e) => {
        e.preventDefault()
        let index = e.target.value
        setPrevIndex(1)
        axios.get(`http://backendexample.sanbercloud.com/api/books/${index}`)
            .then(res => {
                let data = res.data
                setTitle(data.title)
                setDescription(data.description)
                setReview(data.review)
                setRelease_year(data.release_year)
                setTotalPage(data.totalPage)
                setPrice(data.price)
                setImageUrl(data.image_url)
                setInputBook({})
                setIndex(data.id)
            })
        let input = {
            title: title,
            description: description,
            review: review,
            release_year: release_year,
            totalPage: totalPage,
            price: price,
            image_url: image_url,
        }
        setInputBook(input)
    }

    const handleDelete = (e) => {
        e.preventDefault()
        const index = parseInt(e.target.value)
        axios.delete(`http://backendexample.sanbercloud.com/api/books/${index}`)
            .then(() => {
                const newDataBook = dataBook.filter(el => {
                    return index !== el.id
                })
                setDataBook(newDataBook)
            })
    }

    const handleSearch = (e) => {
        let index = e.event.value
        axios.get(`http://backendexample.sanbercloud.com/api/books`)
            .then(res => {
                let databook = res.data
                databook = dataBook.find(el => el.title === index)
                databook.title = title
                databook.description = description
                databook.review = review
                databook.release_year = release_year
                databook.totalPage = totalPage
                databook.price = price
                databook.image_url = image_url
                setDataBook([...dataBook])
            })
    }

    return (
        <>
            <section>
                {dataBook !== null &&
                    (<div className="books">
                        <form onSubmit={handleSearch} id="search">
                            <input name="search" value={search} onChange={handleChange} />
                            <button type="submit">Search</button>
                        </form>
                        <h2>Daftar Buku</h2>
                        <table className="DataTable">
                            <thead>
                                <tr>
                                    <td>No</td>
                                    <td>Title</td>
                                    <td>Description</td>
                                    <td>Review</td>
                                    <td>Release Year</td>
                                    <td>Total Page</td>
                                    <td>Price</td>
                                    <td>Action</td>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    dataBook.map((book, index) => {
                                        return (
                                            <tr key={index}>
                                                <td>{index + 1}</td>
                                                <td>{book.title}</td>
                                                <td id="desc">{book.description}</td>
                                                <td>{book.review}</td>
                                                <td>{book.release_year}</td>
                                                <td>{book.totalPage}</td>
                                                <td>{book.price}</td>
                                                <td className="buttonAction">
                                                    <button id="edit" value={book.id} onClick={handleFormUpdate}>Edit</button>
                                                    <button id="delete" value={book.id} onClick={handleDelete}>Delete</button>
                                                </td>
                                            </tr>
                                        )
                                    })
                                }
                            </tbody>
                        </table>
                        <hr />
                        <form onSubmit={handleSubmitForm} id="form">
                            <h2 style={{ textAlign: "center" }}>Books Form</h2>
                            <table className="dataTableForm">
                                <tbody>
                                    <tr>
                                        <td>Title:</td>
                                        <td></td>
                                        <td><input type="text" name="title" value={title} onChange={handleChange} size="50" required></input></td>
                                    </tr>
                                    <tr>
                                        <td>Description:</td>
                                        <td></td>
                                        <td><textarea type="text" name="description" value={description} onChange={handleChange} cols="50" required></textarea></td>
                                    </tr>
                                    <tr>
                                        <td>Review:</td>
                                        <td></td>
                                        <td><textarea type="text" name="review" value={review} onChange={handleChange} cols="50" required></textarea></td>
                                    </tr>
                                    <tr>
                                        <td>Release Year:</td>
                                        <td></td>
                                        <td><input type="number" name="release_year" value={release_year} onChange={handleChange} min="1980" style={{ width: "5em" }} required></input></td>
                                    </tr>
                                    <tr>
                                        <td>Total Page:</td>
                                        <td></td>
                                        <td><input type="number" name="totalPage" value={totalPage} onChange={handleChange} required></input></td>
                                    </tr>
                                    <tr>
                                        <td>Price:</td>
                                        <td></td>
                                        <td><input type="number" name="price" value={price} onChange={handleChange} required></input></td>
                                    </tr>
                                    <tr>
                                        <td>Image Url:</td>
                                        <td></td>
                                        <td><textarea type="text" name="image_url" value={image_url} onChange={handleChange} cols="50" ></textarea></td>
                                    </tr>
                                    <tr>
                                        <td colSpan="3" style={{ textAlign: "left" }}>
                                            <button type="submit" className="tambah">Submit</button>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </form>
                    </div>

                    )
                }
            </section>
        </>
    )
}

export default DataBooks