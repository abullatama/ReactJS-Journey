import React, { useContext, useEffect, useState } from 'react'
import { Layout, Button, Input, Table, Space } from 'antd';
import { EditOutlined, DeleteOutlined, PlusCircleOutlined, FilterOutlined } from '@ant-design/icons';
import Sidebar from '../Layouts/SideBar'
import axios from 'axios'
import { Link, useHistory } from "react-router-dom";
import Highlighter from 'react-highlight-words';

import { MovieContext } from '../Context/MovieContext'
import { UserContext } from '../Context/UserContext'
import '../Asset/CSS/SetMovie.css'

const { Content } = Layout;
const { Search } = Input;

const Movie = () => {
    let History = useHistory()
    const [searchText, setSearchText] = useState('')
    const [searchedColumn, setSearchedColumn] = useState('')
    const [
        movie, setMovie, , , , , , , , , , , , , , , , , , , , setCurrentIndex, , setIndex, ,
    ] = useContext(MovieContext)
    const [user,] = useContext(UserContext)

    useEffect(() => {
        setCurrentIndex(0)
    })

    const truncateString = (str, num) => {
        if (str === null) {
            return ""
        } else {
            if (str.length <= num) {
                return str
            }
            return str.slice(0, num) + '...'
        }
    }

    // Component action digunakan untuk mengakses method yang 
    // membutuhkan sebuah parameter seperti data id 
    const Action = ({ movieId }) => {
        const handleDelete = () => {
            console.log(movieId)
            axios.delete(`https://backendexample.sanbersy.com/api/data-movie/${movieId}`, { headers: { "Authorization": `Bearer ${user.token}` } })
                .then(res => {
                    const newMovie = movie.filter(el => {
                        return el.id !== movieId
                    })
                    setMovie([...newMovie])
                }).catch((err) => {
                    alert(err)
                })
            alert("Delete Success!")
        }

        const setID = () => {
            setIndex(movieId)
            History.push('/settings/movies/edit')
        }

        return (
            <>
                <Button className="btn-edit" onClick={setID} style={{ borderRadius: 5 }}>
                    <EditOutlined />
                </Button>
                <br />
                <Button type="danger" onClick={handleDelete} style={{ borderRadius: 5 }}>
                    <DeleteOutlined />
                </Button>
            </>
        )
    }

    const submitSearch = (value) => {
        console.log(value)
        axios.get(`https://backendexample.sanbersy.com/api/data-movie`, { headers: { "Authorization": `Bearer ${user.token}` } })
            .then(res => {
                let resMovie = res.data.map(el => {
                    return {
                        id: el.id,
                        title: el.title,
                        description: el.description,
                        genre: el.genre,
                        year: el.year,
                        duration: el.duration,
                        rating: el.rating,
                        review: el.review,
                        image_url: el.image_url,
                    }
                })

                let filteredMovie = resMovie.filter(el => el.title.toLowerCase().indexOf(value.toLowerCase()) !== -1)
                setMovie([...filteredMovie])
            })

    }

    // Table Method antd start
    let searchInput
    const getColumnSearchProps = dataIndex => ({
        filterDropdown: ({ setSelectedKeys, selectedKeys, confirm, clearFilters }) => (
            <div style={{ padding: 8 }}>
                <Input
                    ref={node => {
                        searchInput = node;
                    }}
                    placeholder={`Search ${dataIndex}`}
                    value={selectedKeys[0]}
                    onChange={e => setSelectedKeys(e.target.value ? [e.target.value] : [])}
                    onPressEnter={() => handleSearch(selectedKeys, confirm, dataIndex)}
                    style={{ width: 188, marginBottom: 8, display: 'block' }}
                />
                <Space>
                    <Button
                        type="primary"
                        onClick={() => handleSearch(selectedKeys, confirm, dataIndex)}
                        icon={<FilterOutlined />}
                        size="small"
                        style={{ width: 90 }}
                    >
                        Search
              </Button>
                    <Button onClick={() => handleReset(clearFilters)} size="small" style={{ width: 90 }}>
                        Reset
              </Button>
                </Space>
            </div>
        ),
        filterIcon: filtered => <FilterOutlined style={{ color: filtered ? '#1890ff' : undefined }} />,
        onFilter: (value, record) =>
            record[dataIndex]
                ? record[dataIndex].toString().toLowerCase().includes(value.toLowerCase())
                : '',
        onFilterDropdownVisibleChange: visible => {
            if (visible) {
                setTimeout(() => searchInput.select(), 100);
            }
        },
        render: text =>
            searchedColumn === dataIndex ? (
                <Highlighter
                    highlightStyle={{ backgroundColor: '#ffc069', padding: 0 }}
                    searchWords={[searchText]}
                    autoEscape
                    textToHighlight={text ? text.toString() : ''}
                />
            ) : (
                    text
                ),
    });

    const handleSearch = (selectedKeys, confirm, dataIndex) => {
        confirm();
        setSearchText(selectedKeys[0])
        setSearchedColumn(dataIndex)
    };

    const handleReset = clearFilters => {
        clearFilters();
        setSearchText('')
    };

    const columns = [
        {
            title: 'Image',
            dataIndex: 'image_url',
            key: 'image_url',
        },
        {
            title: 'Title',
            dataIndex: 'title',
            key: 'title',
            width: '20%',
            responsive: ['md'],
            sorter: (a, b) => a.title.localeCompare(b.title),
            sortDirections: ['descend', 'ascend'],
            ...getColumnSearchProps('title'),
        },
        {
            title: 'Description',
            dataIndex: 'description',
            key: 'description',
            width: '20%',
            responsive: ['lg'],
            sorter: (a, b) => a.description.localeCompare(b.description),
            sortDirections: ['descend', 'ascend'],
        },
        {
            title: 'Genre',
            dataIndex: 'genre',
            key: 'genre',
            responsive: ['lg'],
            sorter: (a, b) => a.genre.localeCompare(b.genre),
            sortDirections: ['descend', 'ascend'],
            ...getColumnSearchProps('genre'),
        },
        {
            title: 'Year',
            dataIndex: 'year',
            key: 'year',
            responsive: ['lg'],
            sorter: (a, b) => a.year - b.year,
            sortDirections: ['descend', 'ascend'],
            ...getColumnSearchProps('year'),
        },
        {
            title: 'Duration',
            dataIndex: 'duration',
            key: 'duration',
            responsive: ['lg'],
            sorter: (a, b) => a.duration - b.duration,
            sortDirections: ['descend', 'ascend'],
        },
        {
            title: 'Rating',
            dataIndex: 'rating',
            key: 'rating',
            responsive: ['xl'],
            sorter: (a, b) => a.rating - b.rating,
            sortDirections: ['descend', 'ascend'],
        },
        {
            title: 'Review',
            dataIndex: 'review',
            key: 'review',
            width: '15%',
            responsive: ['lg'],
            sorter: (a, b) => a.review.localeCompare(b.review),
            sortDirections: ['descend', 'ascend'],
        },
        {
            title: 'Action',
            dataIndex: 'action',
            key: 'action',
        },

    ]
    //end

    return (
        <>
            <Sidebar />
            {movie !== null &&
                <Layout style={{ padding: '0 24px 24px' }}>
                    <h2 className="title">Movies</h2>
                    <Content
                        className="site-layout-background"
                        style={{
                            padding: 24,
                            margin: 0,
                            minHeight: 280,
                        }}
                    >
                        <div style={{ padding: 20 }}>
                            <Search placeholder="input search text" style={{ width: 200, margn: 0, float: "left" }} onSearch={submitSearch} />
                            <Link to="/settings/movies/add">
                                <Button className="btn-add">
                                    Add Movie<PlusCircleOutlined />
                                </Button>
                            </Link>
                        </div>
                        <Table columns={columns} dataSource={
                            movie.map(el => {
                                return {
                                    title: el.title,
                                    description: truncateString(el.description, 20),
                                    genre: el.genre,
                                    year: el.year,
                                    duration: el.duration,
                                    rating: el.rating,
                                    review: truncateString(el.review, 20),
                                    image_url: <img alt="imageURL" className="img-movie" src={el.image_url} />,
                                    action: <Action movieId={el.id} />
                                }
                            })
                        } />
                    </Content>
                </Layout>
            }
        </>
    )
}

export default Movie