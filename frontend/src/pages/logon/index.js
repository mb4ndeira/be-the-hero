import React, { useState } from 'react'
import { Link, useHistory } from 'react-router-dom'
import { FiLogIn } from 'react-icons/fi'

import api from '../../services/api'

import './style.css'

import heroes_img from '../../assets/heroes.png'
import logo_img from '../../assets/logo.svg'

export default function Logon() {

const history = useHistory()

    const [id, setid] = useState('')

    async function handleLogin(e) {
        e.preventDefault()
        try {
            const res = await api.post('sessions',{ id })
            localStorage.setItem('ongid',id)
            localStorage.setItem('ongname', res.data.name)
            history.push('/profile')
        } catch (err) {
            alert('Falha no login, tente novamente')
        }

    }

    return (
        <div className="logon container">
            <section className="form">
                <img src={logo_img} alt="be the hero" id="logo" />
                <form onSubmit={handleLogin}>
                    <h1>Faça seu logon</h1>
                    <input placeholder="Sua ID" value={id} onChange={e => setid(e.target.value)} />
                    <button className="button" type="submit">Entrar</button>
                    <Link className="backlink" to="/register">
                        <FiLogIn size={16} color="#E02041" />
                        Não tenho cadastro</Link>
                </form>

            </section>


            <img src={heroes_img} alt="heroes" />
        </div>

    )
}