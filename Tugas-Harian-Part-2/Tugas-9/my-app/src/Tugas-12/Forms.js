import React from 'react'
import './form.css'

class TabelBuah extends React.Component {
    constructor() {
        super()
        this.state = {
            dataHargaBuah: [
                { nama: "Semangka", harga: 10000, berat: 1000 },
                { nama: "Anggur", harga: 40000, berat: 500 },
                { nama: "Strawberry", harga: 30000, berat: 400 },
                { nama: "Jeruk", harga: 30000, berat: 1000 },
                { nama: "Mangga", harga: 30000, berat: 500 }
            ],
            prevIndex: 0,
            nama: "",
            harga: "",
            berat: "",
            inputBuah: {}
        }
    }

    handleNameChange = (e) => {
        this.setState({
            nama: e.target.value,
            inputBuah: { ...this.state.inputBuah, nama: e.target.value }
        })
    }
    handleHargaChange = (e) => {
        this.setState({
            harga: e.target.value,
            inputBuah: { ...this.state.inputBuah, harga: e.target.value }
        })
    }
    handleBeratChange = (e) => {
        this.setState({
            berat: e.target.value,
            inputBuah: { ...this.state.inputBuah, berat: e.target.value }
        })
    }

    handleSubmitForm = (e) => {
        e.preventDefault()
        if (this.state.prevIndex === 0) {
            this.setState({
                dataHargaBuah: [...this.state.dataHargaBuah, this.state.inputBuah],
                nama: "",
                harga: "",
                berat: "",
                inputBuah: {}
            })
        } else if (this.state.prevIndex === 1) {
            let dataHargaBuah = this.state.dataHargaBuah
            dataHargaBuah[this.state.index] = this.state.inputBuah
            this.setState({
                dataHargaBuah,
                nama: "",
                harga: "",
                berat: ""
            })
        }
    }

    handleFormUpdate = (e) => {
        e.preventDefault()
        let val = e.target.value.split(",")
        let nama = val[1]
        let harga = val[2]
        let berat = val[3]
        let input = { nama: nama, harga: harga, berat: berat }
        this.setState({
            prevIndex: 1,
            index: val[0],
            nama: val[1],
            harga: val[2],
            berat: val[3],
            inputBuah: input
        })
    }

    handleDelete = (e) => {
        e.preventDefault()
        const index = parseInt(e.target.value)
        const newDataBuah = this.state.dataHargaBuah.filter((value, idx) => {
            return idx !== index
        })
        this.setState({
            dataHargaBuah: newDataBuah
        })
    }

    render() {
        return (
            <div className="center">
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
                        {this.state.dataHargaBuah.map((buah, index) => {
                            return (
                                <tr key={index + 1}>
                                    <td>{buah.nama}</td>
                                    <td>{buah.harga}</td>
                                    <td>{buah.berat / 1000} Kg</td>
                                    <td className="buttonAction">
                                        <button id="edit" value={[index, buah.nama, buah.harga, buah.berat]} harga={buah.harga} berat={buah.berat} onClick={this.handleFormUpdate}>Edit</button>
                                        <button id="delete" value={index} onClick={this.handleDelete}>Delete</button>
                                    </td>
                                </tr>
                            )
                        })}
                    </tbody>
                </table>
                <form onSubmit={this.handleSubmitForm}>
                    <h2>Form Tambah Data Buah</h2>
                    <table className="dataTableForm">
                        <tbody>
                            <tr>
                                <td>Nama</td>
                                <td>:</td>
                                <td><input type="text" value={this.state.nama} onChange={this.handleNameChange} required></input></td>
                            </tr>
                            <tr>
                                <td>Harga</td>
                                <td>:</td>
                                <td><input type="text" value={this.state.harga} onChange={this.handleHargaChange} required></input></td>
                            </tr>
                            <tr>
                                <td>Berat(gram)</td>
                                <td>:</td>
                                <td><input type="text" value={this.state.berat} onChange={this.handleBeratChange} required></input></td>
                            </tr>
                            <tr>
                                <td colSpan="3" style={{ textAlign: "center" }}>
                                    <button type="submit" className="tambah">Submit</button>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </form>
            </div>
        )
    }
}

export default TabelBuah