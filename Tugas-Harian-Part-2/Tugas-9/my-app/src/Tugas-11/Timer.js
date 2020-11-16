import React, { Component } from 'react'

class Timer extends Component {
    constructor(props) {
        super(props)
        if (this.props.start !== undefined) {
            this.state = {
                time: this.props.start,
                showTime: true
            }
        }
    }

    componentDidMount() {
        this.setTime = setInterval(() => this.increase(), 1000)
    }

    componentDidUpdate(prevProps, prevState) {
        if (prevState.time === 0) {
            this.setState({
                showTime: false
            })
            clearInterval(this.setTime); /*Tidak bisa menggunakan componentWillUnmount jika perubahan showTime nya dilakukan di componentDidUpdate*/
        }
        console.log(prevState)
        console.log(this.state.showTime)
    }

    componentWillUnmount() {
        clearInterval(this.setTime);
    }

    increase() {
        this.setState({
            time: this.state.time - 1
        });
    }

    render() {
        return (
            <>
                {this.state.showTime ?
                    <h1 style={{ textAlign: "center" }}>
                        <span style={{ marginRight: "100px" }}>
                            sekarang jam : <Clock /> AM
                        </span>
                        hitung mundur : {this.state.time}
                    </h1>
                    : null
                }
            </>
        )

    }
}

class Clock extends Component {
    constructor() {
        super()
        this.state = {
            clock: this.clock()
        }
    }

    componentDidMount() {
        this.setClock = setInterval(() => this.clock(), 1000)
    }

    componentWillUnmount() {
        clearInterval(this.setClock);
    }

    clock() {
        let today = new Date();
        let h = today.getHours();
        let m = today.getMinutes();
        let s = today.getSeconds();
        this.setState({
            clock: h + ":" + m + ":" + s
        })
        return h + ":" + m + ":" + s
    }

    render() {
        return (
            <>
                {this.state.clock}
            </>
        )
    }
}





export default Timer