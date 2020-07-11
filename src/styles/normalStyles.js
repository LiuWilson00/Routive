import { StyleSheet } from 'react-native'



export default StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#204051',
        alignItems: 'center',
        justifyContent: 'center',
        paddingTop: 50,
        overflow: 'scroll'
    },
    textInput: {
        color: '#e7dfd5',
        marginBottom: 10,
        width: 300,
        height: 30,
        borderRadius: 5,
        textAlign: 'center',
        backgroundColor: '#4f8a8b'

    },
    textGroup: {
        marginTop: 10
    },
    textGroupTitle: {
        color: "#d4f3ef",
        fontWeight: "bold",
        fontSize: 20

    },
    textGroupSpan: {
        marginTop: 10,
        marginBottom: 10,
        color: '#e4e3e3'
    },
    textGroupImage: {
        width: '100%',
        resizeMode: 'stretch'
    },
    hyperlink: {
        marginTop: 10,
        marginBottom: 10,
        color: '#abf0e9'
    },
    scrollView: {
        paddingVertical: 20,
        paddingLeft: "5%",
        paddingRight: "5%",
        backgroundColor: '#204051',
    }

});


