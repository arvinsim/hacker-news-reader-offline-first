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
        flexDirection: 'row',
        paddingBottom: 5,
    },
    rowId: {
        flex: 1
    },
    rowIdText: {
        fontWeight: 'bold',
        color: colors.text.secondary,
    },
    detailsContainer: {
        flex: 15 
    },
    athingText: {
        color: colors.text.primary        
    },
    athingTitle: {
        fontSize: 14 
    },
    athingUrl: {
        fontSize: 11
    },
    subtextContainer: {
        flex: 1
    },
    subtext: {
        color: colors.text.secondary,
        fontSize: 12
    }    
})

export default styles