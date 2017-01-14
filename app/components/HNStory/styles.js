import { StyleSheet } from 'react-native'

const colors = {
    text: {
        primary : '#CCC',
        secondary: '#828282'
    }
}

const styles = StyleSheet.create({
    container: {
       paddingHorizontal: 10,
       paddingBottom: 5
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