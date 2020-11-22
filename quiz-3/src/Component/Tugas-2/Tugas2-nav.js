import { useContext } from 'react'
// import axios from 'axios'
import { BookContext } from '../BooksContext'
import React from 'react'
import Logo from '../Image/logo.png';
import { Link } from "react-router-dom";
import '../css/style.css'

const Index = () => {
    const [, , , , , , , , , , , , , , , , , , , , , , statusLogin, , , , ,] = useContext(BookContext)

    return (
        <>


            <header>
                <img id="logo" src={Logo} width="200px" alt="Logo" />
                <nav>
                    <ul>
                        <li><Link to="/">Home</Link></li>
                        <li><Link to="/about">About</Link></li>
                        {
                            (<li><Link to="/books">Books List Editor</Link></li>)
                        }
                        <li><Link to="/login">Login</Link></li>
                    </ul>
                    {/* <Link to="/">Tugas-9</Link> */}
                </nav>
            </header>

        </>
    )
}

export default Index


