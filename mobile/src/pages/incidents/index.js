import React, { useState, useEffect } from 'react'
import { Feather } from '@expo/vector-icons'
import { useNavigation } from '@react-navigation/native'
import { View, Image, Text, TouchableOpacity, FlatList } from 'react-native'

import api from '../../services/api'

import logo from '../../assets/logo.png'

import style from './style'

export default function Incidents() {
    const [incidents, setincidents] = useState([])
    const [total, settotal] = useState(0)
    const [page, setpage] = useState(1)
    const [loading, setloading] = useState(false)

    const navigation = useNavigation()

    function goToDetail(incident) {
        navigation.navigate('detail', { incident })
    }

    async function loadIncidents() {
        if (loading) {
            return
        }

        if (total > 0 && incidents.length == total) {
            return
        }

        setloading(true)

        const res = await api.get(`incidents?page=${page}`)

        setincidents([...incidents, ...res.data])
        settotal(res.headers['x-total-count'])
        setpage(page + 1)
        setloading(false)
    }

    useEffect(() => {
        loadIncidents()
            , []
    })

    return (
        <View style={style.container}>
            <View style={style.header}>
                <Image source={logo} />
                <Text style={style.header_text}>
                    Total de <Text style={style.header_bold}>{total} casos</Text>
                </Text>
            </View>

            <Text style={style.title}> Bem-vindo</Text>
            <Text style={style.description}>Escolha um dos casos abaixo e salve o dia</Text>

            <FlatList
                data={incidents}
                style={style.incident_list}
                showsVerticalScrollIndicator={true}
                onEndReached={loadIncidents}
                onEndReachedThreshold={0.2}
                renderItem={({ item: incident }) => (<View style={style.incident}>

                    <Text style={style.property}>ONG:</Text>
                    <Text style={style.value}>{incident.name}</Text>

                    <Text style={style.property}>Caso:</Text>
                    <Text style={style.value}>{incident.title}</Text>

                    <Text style={style.property}>Valor:</Text>
                    <Text style={style.value}>{Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(incident.value)}</Text>

                    <TouchableOpacity
                        style={style.button}
                        onPress={() => goToDetail(incident)}>
                        <Text style={style.button_text}>Ver mais detalhes</Text>
                        <Feather name='arrow-right' size={16} color="#e02041" ></Feather>
                    </TouchableOpacity>
                </View>)
                }
                keyExtractor={incident => String(incident.id)}
            />

        </View>

    )
}