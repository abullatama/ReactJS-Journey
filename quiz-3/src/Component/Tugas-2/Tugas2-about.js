// import { useContext } from 'react'
// import axios from 'axios'
// import { BuahContext } from './DataBuah'
import React from 'react'
import '../css/style.css'
import '../css/about.css'

const About = () => {
    return (
        <section >
            <div className="about">
                <h1 className="about-tittle">Data Peserta Sanbercode Bootcamp ReactJs</h1>
                <div id="list">
                    <ol>
                        <li><strong>Nama: </strong>Maqbul Arif Latama</li>
                        <li><strong>Email: </strong>abullatama@gmail.com</li>
                        <li><strong>Sistem Operasi yang digunakan: </strong>Windows 10</li>
                        <li><strong>Akun Github: </strong>abullatama</li>
                        <li><strong>Akun Telegram: </strong>+6281224921695</li>
                    </ol>
                </div>
            </div>
        </section>
    )
}

export default About


