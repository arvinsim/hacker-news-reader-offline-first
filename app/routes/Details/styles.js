import { Platform, StyleSheet } from 'react-native'

const styles = StyleSheet.create({
    details: {
        flex: 1,
        flexDirection: 'column',
        paddingTop: (Platform.OS === 'ios') ? 20 : 0
    },
    header: {
        flex: 1
    },
    storyDetails: {
        flex: 14
    }
})

export default styles