
import { useContext } from 'react'
import { BookContext } from './BooksContext'
import React from 'react'
import './css/style.css'

const Login = () => {
    const [, , , , , , , , , , , , , , , , , , , , , , username, setUsername, password, setPassword, statusLogin, setStatusLogin] = useContext(BookContext)

    const handleChange = (event) => {
        let typeOfInput = event.target.name
        console.log(typeOfInput)
        switch (typeOfInput) {
            case "username":
                {
                    setUsername(event.target.value)
                    break
                }
            case "password":
                {
                    setPassword(event.target.value)
                    break
                }
            default:
                { break; }
        }
    }

    const handleSubmit = () => {
        if (username === 'admin' && password === 'admin') {
            setStatusLogin(1)
        } else {
            alert("Username dan Password Salah")
        }
        console.log(statusLogin)
    }

    return (
        <section >
            <div className="login">
                <form onSubmit={handleSubmit}>
                    <label><b>Username : </b></label>
                    <input type="text" name="username" value={username} onChange={handleChange} /><br />
                    <label><b>Password : </b></label>
                    <input type="password" name="password" value={password} onChange={handleChange} /><br />
                    <button type="submit">Login</button>
                </form>
            </div>
        </section>
    )
}

export default Login


