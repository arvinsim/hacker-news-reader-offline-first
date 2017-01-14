import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'row',
        backgroundColor: '#FF6600',
        alignItems: 'center'
    },
    logo: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    logoImage: {
        borderColor: '#FFFFFF',
        borderWidth: 1
    },
    main: {
        flex: 8,
        flexDirection: 'column',
        justifyContent: 'center'
    },
    mainTitle: {
        flex: 1,
        justifyContent: 'flex-end'
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
        fontSize: 12,
        justifyContent: 'flex-start'
    },
    authentication: {
        flex: 3,
        flexDirection: 'row',
        justifyContent: 'center'
    }
});

export default styles