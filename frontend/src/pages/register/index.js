import React, { useState } from 'react'
import { Link,useHistory } from 'react-router-dom'

import { FiArrowLeft } from 'react-icons/fi'
import './style.css'
import api from '../../services/api'

import logo_img from '../../assets/logo.svg'

export default function Register() {

    const history = useHistory()

    const [name, setname] = useState('')
    const [email, setemail] = useState('')
    const [whatsapp, setwhatsapp] = useState('')
    const [city, setcity] = useState('')
    const [uf, setuf] = useState('')

    async function handleRegister(e) {
        e.preventDefault()

        const data = {
            name,
            email,
            whatsapp,
            city,
            uf
        }
        try {
            const res = await api.post('ongs', data)
            alert(`Seu ID de acesso é: ${res.data.id}`)
            history.push('/')
        } catch (err) {
            alert('Erro no cadastro, tente novamente')
        }
    }
    return (
        <div className="register container">
            <div className="content">
                <section>
                    <img src={logo_img} alt="" />
                    <h1>Cadastro</h1>
                    <p>Faça seu cadastro, entre na plataforma e ajude pessoas a encontrarem os casos da sua ONG.</p>
                    <Link className="backlink" to="/">
                        <FiArrowLeft size={16} color="#E02041" />
                        Voltar para o Logon</Link>
                </section>

                <form onSubmit={handleRegister}>
                    <input placeholder="Nome da ONG" value={name} onChange={e => setname(e.target.value)} />
                    <input type="email" placeholder="Email" value={email} onChange={e => setemail(e.target.value)} />
                    <input placeholder="Whatsapp" value={whatsapp} onChange={e => setwhatsapp(e.target.value)} />
                    <div id="input_group">
                        <input placeholder="Cidade" value={city} onChange={e => setcity(e.target.value)} />
                        <input style={{ width: 80 }} placeholder="UF" value={uf} onChange={e => setuf(e.target.value)} />
                    </div>
                    <button className="button" type="submit">Cadastrar</button>
                </form>

            </div>
        </div>
    )
}