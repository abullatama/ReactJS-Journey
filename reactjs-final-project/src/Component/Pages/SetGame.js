import React, { useContext, useEffect, useState } from 'react'
import { Layout, Button, Input, Table, Space } from 'antd';
import { EditOutlined, DeleteOutlined, PlusCircleOutlined, FilterOutlined } from '@ant-design/icons';
import Sidebar from '../Layouts/SideBar'
import axios from 'axios'
import { Link, useHistory } from "react-router-dom";
import Highlighter from 'react-highlight-words';

import { GameContext } from '../Context/GameContext'
import { UserContext } from '../Context/UserContext'
import '../Asset/CSS/SetMovie.css'

const { Content } = Layout;
const { Search } = Input;

const Game = () => {
    let History = useHistory()
    const [searchText, setSearchText] = useState('')
    const [searchedColumn, setSearchedColumn] = useState('')
    const [
        game, setGame, , , , , , , , , , , , , , , , , , setCurrentIndex, index, setIndex, ,
    ] = useContext(GameContext)
    const [user,] = useContext(UserContext)

    useEffect(() => {
        setCurrentIndex(0)
    })

    // Component action digunakan untuk mengakses method yang 
    // membutuhkan sebuah parameter seperti data id 
    const Action = ({ gameId }) => {
        const handleDelete = () => {
            console.log(gameId)
            axios.delete(`https://backendexample.sanbersy.com/api/data-game/${gameId}`, { headers: { "Authorization": `Bearer ${user.token}` } })
                .then(res => {
                    const newGame = game.filter(el => {
                        return el.id !== gameId
                    })
                    setGame([...newGame])
                }).catch((err) => {
                    alert(err)
                })
            alert("Delete Success!")
        }

        const setID = () => {
            setIndex(gameId)
            console.log(gameId)
            console.log(index)
            History.push('/settings/games/edit')
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
        axios.get(`https://backendexample.sanbersy.com/api/data-game`, { headers: { "Authorization": `Bearer ${user.token}` } })
            .then(res => {
                let resGame = res.data.map(el => {
                    return {
                        id: el.id,
                        name: el.name,
                        genre: el.genre,
                        release: el.release,
                        platform: el.platform,
                        singlePlayer: el.singlePlayer,
                        multiPlayer: el.multiplayer,
                        image_url: el.image_url,
                    }
                })

                let filteredGame = resGame.filter(el => el.name.toLowerCase().indexOf(value.toLowerCase()) !== -1)
                setGame([...filteredGame])
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
            title: 'Name',
            dataIndex: 'name',
            key: 'name',
            width: '20%',
            responsive: ['md'],
            sorter: (a, b) => a.name.localeCompare(b.name),
            sortDirections: ['descend', 'ascend'],
            ...getColumnSearchProps('name'),
        },
        {
            title: 'Genre',
            dataIndex: 'genre',
            key: 'genre',
            width: '20%',
            responsive: ['lg'],
            sorter: (a, b) => a.genre.localeCompare(b.genre),
            sortDirections: ['descend', 'ascend'],
        },
        {
            title: 'Release',
            dataIndex: 'release',
            key: 'release',
            responsive: ['lg'],
            sorter: (a, b) => a.release - b.release,
            sortDirections: ['descend', 'ascend'],
            ...getColumnSearchProps('release'),
        },
        {
            title: 'Platform',
            dataIndex: 'platform',
            key: 'platform',
            responsive: ['lg'],
            sorter: (a, b) => a.platform.localeCompare(b.platform),
            sortDirections: ['descend', 'ascend'],
            ...getColumnSearchProps('platform'),
        },
        {
            title: 'Singleplayer',
            dataIndex: 'singlePlayer',
            key: 'singlePlayer',
            responsive: ['xl'],
            sorter: (a, b) => a.singlePlayer - b.singlePlayer,
            sortDirections: ['descend', 'ascend'],
        },
        {
            title: 'Multiplayer',
            dataIndex: 'multiPlayer',
            key: 'multiPlayer',
            responsive: ['xl'],
            sorter: (a, b) => a.multiPlayer - b.multiPlayer,
            sortDirections: ['descend', 'ascend'],
        },
        {
            title: 'Action',
            dataIndex: 'action',
            key: 'action',
        },
    ]
    //end table

    return (
        <>
            <Sidebar />
            {game !== null &&
                <Layout style={{ padding: '0 24px 24px' }}>
                    <h2 className="title">Games</h2>
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
                            <Link to="/settings/games/add">
                                <Button className="btn-add">
                                    Add Game<PlusCircleOutlined />
                                </Button>
                            </Link>
                        </div>
                        <Table columns={columns} dataSource={
                            game.map(el => {
                                return {
                                    name: el.name,
                                    genre: el.genre,
                                    release: el.release,
                                    platform: el.platform,
                                    singlePlayer: el.singlePlayer,
                                    multiPlayer: el.multiPlayer,
                                    image_url: <img alt="imageURL" className="img-movie" src={el.image_url} />,
                                    action: <Action gameId={el.id} />
                                }
                            })
                        } />
                    </Content>
                </Layout>
            }
        </>
    )
}

export default Game