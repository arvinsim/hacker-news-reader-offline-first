import { StyleSheet } from 'react-native'

const colors = {
    text: {
        primary : '#CCC',
        secondary: '#828282'
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingBottom: 5
    },
    rowId: {
        fontWeight: 'bold',
        color: colors.text.secondary,
    },
    athing: {
        color: colors.text.primary        
    },
    athingTitle: {
        fontWeight: 'bold',
        fontSize: 15
    },
    athingUrl: {
        fontSize: 11
    },
    subtext: {
        color: colors.text.secondary,
        fontSize: 12
    }    
})

export default styles