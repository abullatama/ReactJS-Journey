import { Card, Layout, Row, Col, Modal } from 'antd';
import { CaretRightOutlined } from '@ant-design/icons';
import { useContext, useState } from 'react';
import axios from 'axios'
import '../Asset/CSS/Home.css'

import { GameContext } from '../Context/GameContext'

// import SideBar from '../Layouts/SideBar'

const { Meta } = Card;
const { Content } = Layout;

const Home = () => {
    const [modalGameVisibility, setModalGameVisibility] = useState({
        visible: false
    })
    const [
        game, , , , name, setName, genre, setGenre, release, setRelease, platform, setPlatform, singlePlayer, setSinglePlayer, multiPlayer, setMultiPlayer, image_url, setImage_url
    ] = useContext(GameContext)

    // Modal Function
    const showModalGame = (e) => {
        e.preventDefault()
        let idx = e.target.value
        axios.get(`https://backendexample.sanbersy.com/api/data-game/${idx}`)
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
        console.log(e.target.value)
        setModalGameVisibility({
            visible: true,
        });
    };

    const handleOk = e => {
        setModalGameVisibility({
            visible: false,
        });
    };

    const handleCancel = e => {
        console.log(e);
        setModalGameVisibility({
            visible: false,
        });
    };
    //End Modal Function


    return (
        <Layout>
            {/* <SideBar /> */}
            {game !== null &&
                (<Layout>
                    <Content
                        className="site-layout-background"
                        style={{
                            padding: 50,
                            paddingTop: 50,
                            margin: 0,
                            minHeight: 280,
                        }}
                    >
                        <h2 style={{ textAlign: "center" }}>Recommended Games</h2>
                        <Row className="list"><br />
                            {/* start looping Game data */}
                            {
                                game.map((game, index) => {
                                    return (
                                        <Col key={index + 1}>
                                            <Card
                                                hoverable
                                                style={{ width: 240, margin: 10 }}
                                                cover={<img alt="example" src={game.image_url} />}
                                            >
                                                <Meta title={game.name} description={game.release} /><br />
                                                <button className="detail" value={game.id} onClick={showModalGame} >
                                                    See Details <CaretRightOutlined />
                                                </button>
                                            </Card>
                                        </Col>
                                    )
                                })
                            }
                            {/* end looping */}
                        </Row>
                        {/* Modal Game Start */}
                        <Modal
                            title="Game Details"
                            visible={modalGameVisibility.visible}
                            onOk={handleOk}
                            onCancel={handleCancel}
                            width={1000}
                        >
                            <Row>
                                <Col className="desc" span={18} push={6}>
                                    <p><b>Name : </b>{name}</p>
                                    <p><b>Genre : </b>{genre}</p>
                                    <p><b>Release : </b>{release}</p>
                                    <p><b>Platform : </b>{platform}</p>
                                    <p><b>SinglePlayer : </b>{singlePlayer}</p>
                                    <p><b>MultiPlayer : </b>{multiPlayer}</p>
                                </Col>
                                <Col span={6} pull={18}>
                                    <div className="detail-image">
                                        <img src={image_url} alt="detail" />
                                    </div>
                                </Col>
                            </Row>
                        </Modal>
                        {/* Modal Game End */}
                    </Content>
                </Layout>
                )}
        </Layout>
    )
}

export default Home
