import { useContext } from 'react'
import axios from 'axios'
import React from 'react'
import { BuahContext } from './DataBuah'
import './form.css'

const FormBuah = () => {
    const [dataHargaBuah, setDataHargaBuah, prevIndex, setPrevIndex, nama, setNama, harga, setHarga, berat, setBerat, inputBuah, setInputBuah, index,] = useContext(BuahContext)

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

    return (
        <>
            <form onSubmit={handleSubmitForm}>
                <h2 style={{ textAlign: "center" }}>Form Tambah Data Buah</h2>
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
        </>
    )
}
export default FormBuah