import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'row',
        backgroundColor: '#FF6600'
    },
    logo: {
        flex: 1
    },
    logoImage: {
    },
    main: {
        flex: 8,
        flexDirection: 'column'
    },
    mainTitleText: {
        color: '#000000',
        fontFamily: 'Verdana, Geneva, sans-serif',
        fontWeight: 'bold',
        fontSize: 15
    },
    mainSublinks:{
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    mainSublink: {
        fontSize: 12
    },
    authentication: {
        flex: 3,
        flexDirection: 'row'
    }
});

export default styles