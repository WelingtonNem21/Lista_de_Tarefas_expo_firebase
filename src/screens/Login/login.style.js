import { StyleSheet } from "react-native";


const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingHorizontal: 20,
        marginTop: 28,
        backgroundColor: 'white',
        alignItems: 'center',
        justifyContent: 'space-around'
    },
    logo: {
        fontSize: 43,
        fontWeight: 'bold'
    },
    input: {
        height: 50,
        borderWidth: 1,
        borderColor: '#949595',
        marginBottom: 10,
        borderRadius: 2,
        padding: 10
    },
    button: {
        backgroundColor: '#ffa500',
        height: 40,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 2,
        color: 'white'
    }
})

export default styles