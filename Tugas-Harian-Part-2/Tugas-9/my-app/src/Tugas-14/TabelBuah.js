import { useContext } from 'react'
import axios from 'axios'
import React from 'react'
import { BuahContext } from './DataBuah'
import './form.css'

const TabelBuah = () => {
    const [dataHargaBuah, setDataHargaBuah, , setPrevIndex, nama, setNama, harga, setHarga, berat, setBerat, , setInputBuah, , setIndex] = useContext(BuahContext)

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
                </div>)
            }
        </>
    )
}
export default TabelBuah