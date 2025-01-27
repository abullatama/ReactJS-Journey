import React from 'react'
import '../App.css'

class FormContent extends React.Component {
    render() {
        return (
            <>
                <h1>Form Pembelian Buah</h1>
                <form>
                    <div className="flex-row">
                        <div className="flex-col">
                            <label><b>Nama Pelanggan</b></label>
                        </div>
                        <div className="flex-col-input">
                            <input type="text" size="22"></input>
                        </div>
                    </div>
                    <div className="flex-row">
                        <div className="flex-col">
                            <label><b>Daftar Item</b></label>
                        </div>
                        <div className="flex-col-input">
                            <input type="checkbox"></input>
                            <label><b>Semangka</b></label><br />
                            <input type="checkbox"></input>
                            <label><b>Jeruk</b></label><br />
                            <input type="checkbox"></input>
                            <label><b>Nanas</b></label><br />
                            <input type="checkbox"></input>
                            <label><b>Salak</b></label><br />
                            <input type="checkbox"></input>
                            <label><b>Anggur</b></label><br />
                        </div>
                    </div>
                    <button type="submit">Kirim</button>
                </form>
            </>
        )
    }

}

export default FormContent