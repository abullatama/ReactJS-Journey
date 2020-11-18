//Final Update

import { useState, useEffect } from 'react'
import axios from 'axios'
import React from 'react'
import './form.css'

const TabelBuah = () => {
    const [dataHargaBuah, setDataHargaBuah] = useState(null)
    const [prevIndex, setPrevIndex] = useState(0)
    const [nama, setNama] = useState("")
    const [harga, setHarga] = useState("")
    const [berat, setBerat] = useState("")
    const [inputBuah, setInputBuah] = useState([])
    const [index, setIndex] = useState()

    useEffect(() => {
        if (dataHargaBuah === null) {
            axios.get(`http://backendexample.sanbercloud.com/api/fruits`)
                .then(res => {
                    let data = res.data
                    setDataHargaBuah(data.map(el => {
                        return {
                            id: el.id,
                            name: el.name,
                            harga: el.price,
                            berat: el.weight
                        }
                    }))
                })
        }
    })

    const handleNameChange = (e) => {
        setNama(e.target.value)
        setInputBuah({ ...inputBuah, name: e.target.value })
    }
    const handleHargaChange = (e) => {
        setHarga(e.target.value)
        setInputBuah({ ...inputBuah, price: e.target.value })
    }
    const handleBeratChange = (e) => {
        setBerat(e.target.value)
        setInputBuah({ ...inputBuah, weight: e.target.value })
    }

    const handleSubmitForm = (e) => {
        e.preventDefault()
        if (prevIndex === 0) {
            axios.post(`http://backendexample.sanbercloud.com/api/fruits`, inputBuah)
                .then(res => {
                    let data = res.data
                    setDataHargaBuah([...dataHargaBuah, {
                        id: data.id,
                        name: data.name,
                        harga: data.price,
                        berat: data.weight
                    }])
                    console.log(data)
                })
            console.log(dataHargaBuah)
            setNama("")
            setHarga("")
            setBerat("")
            setInputBuah({})

        } else if (prevIndex === 1) {
            axios.put(`http://backendexample.sanbercloud.com/api/fruits/${index}`, inputBuah)
                .then(() => {
                    let databuah = dataHargaBuah.find(el => el.id === index)
                    databuah.name = nama
                    databuah.harga = harga
                    databuah.berat = berat
                    setDataHargaBuah([...dataHargaBuah])
                })
            setPrevIndex(0)
            setNama("")
            setHarga("")
            setBerat("")
        }
    }

    const handleFormUpdate = (e) => {
        e.preventDefault()
        let index = e.target.value
        setPrevIndex(1)
        axios.get(`http://backendexample.sanbercloud.com/api/fruits/${index}`)
            .then(res => {
                let data = res.data
                setBerat(data.weight)
                setNama(data.name)
                setHarga(data.price)
                setIndex(data.id)
            })
        let input = { nama: nama, harga: harga, berat: berat }
        setInputBuah(input)
        console.log(berat)

    }

    const handleDelete = (e) => {
        e.preventDefault()
        const index = parseInt(e.target.value)
        axios.delete(`http://backendexample.sanbercloud.com/api/fruits/${index}`)
            .then(() => {
                const newDataBuah = dataHargaBuah.filter(el => {
                    return index !== el.id
                })
                setDataHargaBuah(newDataBuah)
            })
        console.log()
    }

    return (
        <>
            { dataHargaBuah !== null &&
                (<div className="center">
                    <h2>Tabel Harga Buah</h2>
                    <table className="DataTable">
                        <thead>
                            <tr>
                                <td>Nama</td>
                                <td>Harga</td>
                                <td>Berat</td>
                                <td>Aksi</td>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                dataHargaBuah.map((buah, index) => {
                                    return (
                                        <tr key={index}>
                                            <td>{buah.name}</td>
                                            <td>{buah.harga}</td>
                                            <td>{buah.berat / 1000} Kg</td>
                                            <td className="buttonAction">
                                                <button id="edit" value={buah.id} onClick={handleFormUpdate}>Edit</button>
                                                <button id="delete" value={buah.id} onClick={handleDelete}>Delete</button>
                                            </td>
                                        </tr>
                                    )
                                })
                            }
                        </tbody>
                    </table>
                    <form onSubmit={handleSubmitForm}>
                        <h2>Form Tambah Data Buah</h2>
                        <table className="dataTableForm">
                            <tbody>
                                <tr>
                                    <td>Nama</td>
                                    <td>:</td>
                                    <td><input type="text" value={nama} onChange={handleNameChange} required></input></td>
                                </tr>
                                <tr>
                                    <td>Harga</td>
                                    <td>:</td>
                                    <td><input type="text" value={harga} onChange={handleHargaChange} required></input></td>
                                </tr>
                                <tr>
                                    <td>Berat(gram)</td>
                                    <td>:</td>
                                    <td><input type="text" value={berat} onChange={handleBeratChange} required></input></td>
                                </tr>
                                <tr>
                                    <td colSpan="3" style={{ textAlign: "center" }}>
                                        <button type="submit" className="tambah">Submit</button>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </form>
                </div>)
            }
        </>
    )
}

export default TabelBuah