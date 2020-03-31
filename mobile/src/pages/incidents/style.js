import { StyleSheet } from 'react-native'
import Constants from 'expo-constants'

export default StyleSheet.create({
    container: {
        flex: 1,
        paddingHorizontal: 24,
        paddingTop: Constants.statusBarHeight + 18,
    },
    header: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    header_text: {
        fontSize: 15,
        color: '#737380'
    },

    header_bold: {
        fontWeight: 'bold'
    },

    title: {
        fontSize: 30,
        marginBottom: 16,
        marginTop: 48,
        color: '#13131a',
        fontWeight: 'bold'
    },

    description: {
        fontSize: 16,
        lineHeight: 24,
        color: '#737380'
    },

    incident_list: {
        marginTop: 32
    },

    incident: {
        padding: 24,
        borderRadius: 8,
        backgroundColor: '#FFF',
        marginBottom: 16,
    },

    property: {
        fontSize: 14,
        color: '#41414d',
        fontWeight: 'bold'
    },

    value: {
        marginTop: 8,
        fontSize: 15,
        marginBottom: 24,
        color: '#737380'
    },

    button: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    },

    button_text: {
        color: '#e02041',
        fontSize: 15,
        fontWeight: 'bold'
    }

})