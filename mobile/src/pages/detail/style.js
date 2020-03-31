import { StyleSheet } from 'react-native'
import Constants from 'expo-constants'

export default StyleSheet.create({
    container: {
        flex: 1,
        paddingHorizontal: 24,

    },

    header: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingTop: Constants.statusBarHeight + 18
    },

    incident: {
        padding: 24,
        borderRadius: 8,
        backgroundColor: '#FFF',
        marginBottom: 16,
        marginTop: 48
    },

    property: {
        fontSize: 14,
        color: '#41414d',
        fontWeight: 'bold',
        marginTop: 24,

    },

    value: {
        marginTop: 8,
        fontSize: 15,
        color: '#737380'
    },

    contact_container: {
        padding: 24,
        borderRadius: 8,
        backgroundColor: '#FFF',
        marginBottom: 16,

    },

    herotitle: {
        fontWeight: 'bold',
        fontSize: 20,
        color: '#13131a',
        lineHeight: 30,
    },

    herodescription: {
        fontSize: 15,
        color: '#737380',
        marginTop: 16,
    },

    buttons: {
        marginTop: 16,
        flexDirection: 'row',
        justifyContent: "space-between"
    },

    action: {
        backgroundColor: '#E02041',
        borderRadius: 8,
        height: 50,
        width: '48%',
        justifyContent: 'center',
        alignItems: 'center'
    },

    action_text: {
        color: '#FFF',
        fontSize: 15,
        fontWeight: 'bold'
    }
    
})