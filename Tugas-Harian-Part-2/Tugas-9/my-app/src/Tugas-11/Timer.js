import React, { Component } from 'react'

class Timer extends Component {
    constructor(props) {
        super(props)
        if (this.props.start !== undefined) {
            this.state = {
                time: this.props.start,
                showTime: true,
                clock: new Date().toLocaleTimeString()
            }
        }
    }

    componentDidMount() {
        this.setTime = setInterval(() => this.decrease(), 1000)
    }

    componentDidUpdate(prevProps, prevState) {
        if (prevState.time === 0) {
            this.setState({
                showTime: false
            })
            this.componentWillUnmount()
        }
        console.log(prevState)
        console.log(this.state.showTime)
    }

    componentWillUnmount() {
        clearInterval(this.setTime);
    }

    decrease() {
        this.setState({
            time: this.state.time - 1,
            clock: new Date().toLocaleTimeString()
        });
    }

    render() {
        return (
            <>
                {this.state.showTime ?
                    <h1 style={{ textAlign: "center" }}>
                        <span style={{ marginRight: "100px" }}>
                            sekarang jam : {this.state.clock} AM
                        </span>
                        hitung mundur : {this.state.time}
                    </h1>
                    : null
                }
            </>
        )

    }
}

export default Timer