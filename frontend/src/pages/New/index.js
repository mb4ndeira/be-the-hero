import React, { useState } from 'react'
import { Link, useHistory } from 'react-router-dom'
import { FiArrowLeft } from 'react-icons/fi'

import './style.css'
import logo_img from '../../assets/logo.svg'

import api from '../../services/api'

export default function NewIncident() {

    const history = useHistory()

    const [title, settitle] = useState('')
    const [description, setdescription] = useState('')
    const [value, setvalue] = useState('')

    const ongid = localStorage.getItem('ongid')

    async function handleNew(e) {
        e.preventDefault()

        const data = {
            title,
            description,
            value
        }

        try {
            await api.post('incidents', data, {
                headers: {
                    Authorization: ongid
                }
            })
            history.push('/profile')
        } catch (err) {
            alert('Erro ao cadastrar caso')
        }
    }

    return (
        <div className="new container">
            <div className="content">
                <section>
                    <img src={logo_img} alt="" />
                    <h1>Cadastrar novo caso</h1>
                    <p>Descreva o caso detalhadamente para encontrar um herói para resolver isso.</p>
                    <Link className="backlink" to="/profile">
                        <FiArrowLeft size={16} color="#E02041" />
                    Voltar para home</Link>
                </section>

                <form onSubmit={handleNew}>
                    <input
                        placeholder="Titúlo do caso"
                        value={title}
                        onChange={e => settitle(e.target.value)} />
                    <textarea
                        placeholder="Descrição"
                        value={description}
                        onChange={e => setdescription(e.target.value)}></textarea>

                    <input
                        placeholder="Valor em reais"
                        value={value}
                        onChange={e => setvalue(e.target.value)} />

                    <button className="button" type="submit">Cadastrar</button>
                </form>

            </div>
        </div>
    )
}