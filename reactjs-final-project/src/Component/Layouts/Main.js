import { Layout } from 'antd';
import { BrowserRouter as Router } from "react-router-dom";

import Top from './Top'
import Bottom from './Bottom'
import Section from './Section'

const Main = () => {

    return (
        <Router>
            <Layout>
                <Top />
                <Layout>
                    <Section />
                </Layout>
                <Bottom />
            </Layout>
        </Router>
    )
}

export default Main
