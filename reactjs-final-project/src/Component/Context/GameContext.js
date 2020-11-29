import { useEffect, createContext, useState } from 'react'
import axios from 'axios'

export const GameContext = createContext();

export const GameProvider = props => {
    const [game, setGame] = useState(null)
    const [id, setId] = useState("")
    const [name, setName] = useState("")
    const [genre, setGenre] = useState("")
    const [release, setRelease] = useState("")
    const [platform, setPlatform] = useState("")
    const [singlePlayer, setSinglePlayer] = useState("")
    const [multiPlayer, setMultiPlayer] = useState("")
    const [image_url, setImage_url] = useState("")
    const [currentIndex, setCurrentIndex] = useState(0)
    const [index, setIndex] = useState("")
    const [input, setInput] = useState({
        name: "", genre: "", release: "", platform: "", singlePlayer: "", multiPlayer: "", image_url: ""
    })

    useEffect(() => {
        if (game === null) {
            axios.get(`https://backendexample.sanbersy.com/api/data-game`)
                .then(res => {
                    let data = res.data
                    setGame(data.map(el => {
                        return {
                            id: el.id,
                            name: el.name,
                            genre: el.genre,
                            release: el.release,
                            platform: el.platform,
                            singlePlayer: el.singlePlayer,
                            multiPlayer: el.multiplayer,
                            image_url: el.image_url,
                        }
                    }))
                })
        }
    })

    return (
        <>
            <GameContext.Provider value={
                [
                    game,
                    setGame,
                    id,
                    setId,
                    name,
                    setName,
                    genre,
                    setGenre,
                    release,
                    setRelease,
                    platform,
                    setPlatform,
                    singlePlayer,
                    setSinglePlayer,
                    multiPlayer,
                    setMultiPlayer,
                    image_url,
                    setImage_url,
                    currentIndex,
                    setCurrentIndex,
                    index,
                    setIndex,
                    input,
                    setInput
                ]}>
                {props.children}
            </GameContext.Provider>
        </>
    )
}
