import { Card, Layout, Carousel, Row, Col, Modal } from 'antd';
import { CaretRightOutlined } from '@ant-design/icons';
import { useContext, useState } from 'react';
import axios from 'axios'
import Movies from '../Asset/Image/netflix-background.jpg'
import Rocket from '../Asset/Image/rocket-league.jpg'
import Fall from '../Asset/Image/fall-guys.jpg'
import Riverdale from '../Asset/Image/riverdale.jpg'
import '../Asset/CSS/Home.css'

import { MovieContext } from '../Context/MovieContext'
import { GameContext } from '../Context/GameContext'

// import SideBar from '../Layouts/SideBar'

const { Meta } = Card;
const { Content } = Layout;

const Home = () => {
    const [modalMovieVisibility, setModalMovieVisibility] = useState({
        visible: false
    })
    const [modalGameVisibility, setModalGameVisibility] = useState({
        visible: false
    })

    const [
        movie, , , , title, setTitle, description, setDescription, genre, setGenre, year, setYear, duration, setDuration, rating, setRating, review, setReview, image_url, setImage_url
    ] = useContext(MovieContext)

    const [
        game, , , , name, setName, , , release, setRelease, platform, setPlatform, singlePlayer, setSinglePlayer, multiPlayer, setMultiPlayer, ,
    ] = useContext(GameContext)

    // Modal Function
    const showModalMovie = (e) => {
        e.preventDefault()
        let idx = e.target.value
        axios.get(`https://backendexample.sanbersy.com/api/data-movie/${idx}`)
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
        console.log(e.target.value)
        setModalMovieVisibility({
            visible: true,
        });
    };

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
        console.log(e);
        setModalMovieVisibility({
            visible: false,
        });
        setModalGameVisibility({
            visible: false,
        });
    };

    const handleCancel = e => {
        console.log(e);
        setModalMovieVisibility({
            visible: false,
        });
        setModalGameVisibility({
            visible: false,
        });
    };
    //End Modal Function


    return (
        <Layout>
            {/* <SideBar /> */}
            {movie !== null &&
                (<Layout>
                    <Carousel autoplay>
                        <div className="carouselHome">
                            <img src={Rocket} alt="third" />
                        </div>
                        <div className="carouselHome">
                            <img src={Fall} alt="fourth" />
                        </div>
                        <div className="carouselHome">
                            <img src={Movies} alt="fifth" />
                        </div>
                        <div className="carouselHome">
                            <img src={Riverdale} alt="sixth" />
                        </div>
                    </Carousel>
                    <Content
                        className="site-layout-background"
                        style={{
                            padding: 50,
                            paddingTop: 50,
                            margin: 0,
                            minHeight: 280,
                        }}
                    >
                        <h2 style={{ textAlign: "center" }}>Featured Movies</h2>
                        <Row className="list"><br />
                            {/* start looping Movie data */}
                            {
                                movie.map((movie, index) => {
                                    return (
                                        <Col key={index + 1}>
                                            <Card
                                                hoverable
                                                style={{ width: 240, margin: 10 }}
                                                cover={<img alt="example" src={movie.image_url} />}
                                            >
                                                <Meta title={movie.title} description={movie.year} /><br />
                                                <button className="detail" value={movie.id} onClick={showModalMovie} >
                                                    See Details <CaretRightOutlined />
                                                </button>
                                            </Card>
                                        </Col>
                                    )
                                })
                            }
                            {/* end looping */}
                        </Row>
                        <h2 style={{ textAlign: "center", marginTop: 70 }}>Recommended Games</h2>
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
                        {/* Modal Movie Start */}
                        <Modal
                            title="Movie Details"
                            visible={modalMovieVisibility.visible}
                            onOk={handleOk}
                            onCancel={handleCancel}
                            width={1000}
                        >
                            <Row>
                                <Col className="desc" span={18} push={6}>
                                    <p><b>Title : </b>{title}</p>
                                    <p><b>Description : </b>{description}</p>
                                    <p><b>Genre : </b>{genre}</p>
                                    <p><b>Year : </b>{year}</p>
                                    <p><b>Duration : </b>{duration}</p>
                                    <p><b>Rating : </b>{rating}</p>
                                    <p><b>Review : </b>{review}</p>
                                </Col>
                                <Col span={6} pull={18}>
                                    <div className="detail-image">
                                        <img src={image_url} alt="detail" />
                                    </div>
                                </Col>
                            </Row>
                        </Modal>
                        {/* Modal Movie End */}

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
