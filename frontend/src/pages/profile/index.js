import React, { useEffect, useState } from 'react'
import { Link, useHistory } from 'react-router-dom'
import { FiPower, FiTrash2 } from 'react-icons/fi'

import api from '../../services/api'

import './style.css'
import logo from '../../assets/logo.svg'

export default function Profile() {

    const history = useHistory()

    const [incidents, setincidents] = useState([])

    const ongid = localStorage.getItem('ongid')

    useEffect(() => {
        api.get('/profile', {
            headers: { Authorization: ongid }
        }).then(res => {
            setincidents(res.data)
        })
    }, [ongid])

    async function handleDelete(id) {
        try {
            await api.delete(`incidents/${id}`, {
                headers: {
                    Authorization: ongid
                }
            })

            setincidents(incidents.filter(incident => incident.id !== id))

        } catch (err) {
            alert('Erro ao deleter caso, tente novamente')
        }
    }

    function handleLogout() {
        localStorage.removeItem('ongid')
        localStorage.removeItem('ongname')
        history.push('/')
    }

    return (
        <div className="container">
            <header>
                <img src={logo} alt="" />
                <span>Bem vinda, APAD</span>
                <Link to='/incidents/new' className="button">Cadastrar novo caso</Link>
                <button onClick={handleLogout}>
                    <FiPower size={18} color="#E02041" />
                </button>
            </header>
            <h1>Casos Cadastrados</h1>
            <ul>
                {incidents.map(incident => (
                    <li key={incident.id}>
                        <strong>CASO:</strong>
                        <p>{incident.title}</p>

                        <strong>DESCRIÇÃO</strong>
                        <p>{incident.description}</p>

                        <strong>VALOR:</strong>
                        <p>{Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' })
                            .format(incident.value)}</p>

                        <button onClick={() => handleDelete(incident.id)}>
                            <FiTrash2 size={20} color="#a8a8b3"></FiTrash2>
                        </button>

                    </li>
                )
                )}
            </ul>
        </div>
    )
}