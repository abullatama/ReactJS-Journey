import React from "react";
import { Link } from "react-router-dom";
import { useContext } from 'react'
import { TemaContext } from './Tema'

const Nav = () => {
    const [dataTema, setDataTema] = useContext(TemaContext)

    const handleChange = () => {
        if (dataTema === 1) {
            setDataTema(2)
            document.getElementById("abul").style.backgroundColor = "black"
            document.getElementById("abul").style.color = "white"
        } else {
            setDataTema(1)
            document.getElementById("abul").style.backgroundColor = "blue"
            document.getElementById("abul").style.color = "black"
        }
        console.log(dataTema)
    }

    return (
        <>
            <nav>
                <ul className="nav" id="abul">
                    <li><Link to="/">Tugas-9</Link></li>
                    <li><Link to="/Tugas-10">Tugas-10</Link></li>
                    <li><Link to="/Tugas-11">Tugas-11</Link></li>
                    <li><Link to="/Tugas-12">Tugas-12</Link></li>
                    <li><Link to="/Tugas-13">Tugas-13</Link></li>
                    <li><Link to="/Tugas-14">Tugas-14</Link></li>
                    <li><button onClick={handleChange}> Change Color</button></li>
                </ul>
            </nav>
        </>
    )
}
export default Nav