import React from 'react'
import '../App.css'

let dataHargaBuah = [
    { nama: "Semangka", harga: 10000, berat: 1000 },
    { nama: "Anggur", harga: 40000, berat: 500 },
    { nama: "Strawberry", harga: 30000, berat: 400 },
    { nama: "Jeruk", harga: 30000, berat: 1000 },
    { nama: "Mangga", harga: 30000, berat: 500 }
]

class DataBuah extends React.Component {
    render() {
        return (
            <>
                {this.props.nama}
                {this.props.harga}
                {this.props.berat}
            </>
        )
    }
}

class TabelBuah extends React.Component {
    render() {
        return (
            <>
                <h1 className="tittle">Tabel Harga Buah</h1>
                <table className="DataTable">
                    <thead>
                        <tr>
                            <td>Nama</td>
                            <td>Harga</td>
                            <td>Berat</td>
                        </tr>
                    </thead>
                    <tbody>
                        {dataHargaBuah.map(buah => {
                            return (
                                <tr key={buah.nama}>
                                    <td><DataBuah nama={buah.nama} /></td>
                                    <td><DataBuah harga={buah.harga} /></td>
                                    <td><DataBuah berat={buah.berat / 1000} /> Kg</td>
                                </tr>
                            )
                        })}
                    </tbody>
                </table>
            </>
        )
    }
}

export default TabelBuah