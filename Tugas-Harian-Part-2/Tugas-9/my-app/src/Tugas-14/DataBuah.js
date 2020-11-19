import { useState, useEffect, createContext } from 'react'
import axios from 'axios'
import React from 'react'

export const BuahContext = createContext();

export const DataBuah = props => {
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

    return (
        <>
            <BuahContext.Provider
                value={[dataHargaBuah, setDataHargaBuah, prevIndex, setPrevIndex, nama, setNama, harga, setHarga, berat, setBerat, inputBuah, setInputBuah, index, setIndex]}
            >
                {props.children}
            </BuahContext.Provider>
        </>
    )
}
