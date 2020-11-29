import { Layout, Carousel } from 'antd';
import Movies from '../Asset/Image/netflix-background.jpg'
import Rocket from '../Asset/Image/rocket-league.jpg'
import Fall from '../Asset/Image/fall-guys.jpg'
import Riverdale from '../Asset/Image/riverdale.jpg'
import '../Asset/CSS/Home.css'


// import SideBar from '../Layouts/SideBar'

const Home = () => {

    return (
        <Layout>
            <Layout>
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
            </Layout>
        </Layout>
    )
}

export default Home
