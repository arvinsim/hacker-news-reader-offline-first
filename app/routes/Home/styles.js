import { Platform, StyleSheet } from 'react-native'

const styles = StyleSheet.create({
    home: {
        flex: 1,
        flexDirection: 'column',
        paddingTop: (Platform.OS === 'ios') ? 20 : 0
    },
    header: {
        flex: 1
    },
    stories: {
        flex: 14
    }
})

export default styles