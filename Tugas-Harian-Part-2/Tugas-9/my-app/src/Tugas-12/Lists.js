import React, { Component } from "react"

class Lists extends Component {

    constructor(props) {
        super(props)
        this.state = {
            pesertaLomba: ['Budi', 'Susi', 'Lala', 'Agung'],
            inputName: ""
        }
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
        this.setState({ inputName: event.target.value });
        console.log(this.state.inputName)
    }

    handleSubmit(event) {
        event.preventDefault()
        console.log(this.state.inputName)
        this.setState({
            pesertaLomba: [...this.state.pesertaLomba, this.state.inputName],
            inputName: ""
        })
    }

    render() {
        return (
            <>
                <h1>Daftar Peserta Lomba</h1>
                <table>
                    <thead>
                        <tr>
                            <th>No</th>
                            <th>Nama</th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            this.state.pesertaLomba.map((val, index) => {
                                return (
                                    <tr key={index}>
                                        <td>{index + 1}</td>
                                        <td>{val}</td>
                                        <td>
                                            <button onClick={this.handleChange} value={val}>edit</button>
                                            <button onClick={this.handleChange} value={val}>hapus</button>
                                        </td>
                                    </tr>
                                )
                            })
                        }
                    </tbody>
                </table>
                {/* Form */}
                <h1>Form Peserta</h1>
                <form onSubmit={this.handleSubmit}>
                    <label>
                        Masukkan nama peserta:
          </label>
                    <input type="text" value={this.state.inputName} onChange={this.handleChange} />
                    <button>submit</button>
                </form>
            </>
        )
    }
}

export default Lists
