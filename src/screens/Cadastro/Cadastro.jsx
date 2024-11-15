import { Image, Text, TextInput, TouchableOpacity, View } from "react-native";
import styles from './cadastro.style.js'


function Cadastro({ navigation }) {
    return <View style={styles.container}>
        <View>
            <Text style={styles.logo}>Cadastro <Text style={{ color: '#ffa500' }}>Sistema</Text></Text>
        </View>

        <View style={{ width: '100%' }}>
            <TextInput
                placeholder="Digite seu nome"
                style={styles.input}
            />
            <TextInput
                placeholder="Digite seu email"
                style={styles.input}
            />
            <TextInput
                placeholder="Digite sua senha"
                style={styles.input}
                secureTextEntry={true}

            />
            <TouchableOpacity style={styles.button}>
                <Text style={{ color: 'white', fontWeight: 'bold' }}>Fazer o cadastro</Text>
            </TouchableOpacity>
        </View>
        <View style={{ flexDirection: 'row' }}>
            <View>
                <Text>Fazer login!</Text>
            </View>
            <View>
                <TouchableOpacity onPress={() => navigation.navigate('Login')}>
                    <Text style={{ marginLeft: 10, color: 'blue' }}>Click aqui</Text>
                </TouchableOpacity>
            </View>
        </View>

    </View>
}

export default Cadastro