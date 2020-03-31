import React from 'react'
import { Feather } from '@expo/vector-icons'
import { useNavigation, useRoute } from '@react-navigation/native'
import { View, Image, Text, TouchableOpacity, Linking } from 'react-native'
import * as MailComposer from 'expo-mail-composer'

import api from '../../services/api'

import logo from '../../assets/logo.png'

import style from './style'

export default function detail() {
    const navigation = useNavigation()
    const route = useRoute()
    const message = `Olá  , estou entrando em contato pois gostaria de ajudar no caso ${incident.title} com o valor de ${Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(incident.value)} `

    const incident = route.params.incident

    function Back() {
        navigation.goBack()
    }

    function sendMail() {
        MailComposer.composeAsync({
            subject: `Herói do caso: ${incident.title}`,
            recipients: [incident.email],
            body: message,
        })
    }

    function sendMessage() {
        Linking.openURL(`whatsapp:://send?phone=${incident.whatsapp}&text=${message}`)
    }

    return (
        <View style={style.container}>
            <View style={style.header}>
                <Image source={logo} />
                <TouchableOpacity onPress={Back}>
                    <Feather name="arrow-left" size={28} color="#E82041" />
                </TouchableOpacity>
            </View>

            <View style={style.incident}>

                <Text style={[style.property, {marginTop:0}]}>ONG:</Text>
                <Text style={style.value}>{incident.name} de {incident.city}/{incident.uf}</Text>

                <Text style={style.property}>Caso:</Text>
                <Text style={style.value}>{incident.title}</Text>

                <Text style={style.property}>Valor:</Text>
                <Text style={style.value}>{Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(incident.value)}</Text>
            </View>

            <View style={style.contact_container}>
                <Text style={style.herotitle}>Salve o dia</Text>
                <Text style={style.herotitle}>Seja o herói desse caso</Text>
                <Text style={style.herodescription}>Entre em contato</Text>

                <View style={style.buttons}>
                    <TouchableOpacity style={style.action} onPress={sendMessage}>
                        <Text style={style.action_text}>Whatsapp</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={style.action} onPress={sendMail}>
                        <Text style={style.action_text}>E-mail</Text>
                    </TouchableOpacity>
                </View>
            </View>

        </View>
    )
}