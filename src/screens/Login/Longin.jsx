import { Text, TextInput, TouchableOpacity, View, Alert } from "react-native";
import React, { useState, useContext } from 'react';
import styles from './login.style.js'

import { auth } from "../../services/firebase.js";
import { signInWithEmailAndPassword } from "firebase/auth";


function Login({ navigation }) {


    const [email, setEmail] = useState('')
    const [senha, setSenha] = useState('')

    const handleLogin = async () => {
        try {
            await signInWithEmailAndPassword(auth, email, senha); // Faz o login
        } catch (error) {
            console.error('Erro no login:', error.message);
        }
    };

    return <View style={styles.container}>
        <View>
            <Text style={styles.logo}>Lista de <Text style={{ color: '#ffa500' }}>Tarefas</Text></Text>
        </View>

        <View style={{ width: '100%' }}>
            <TextInput
                placeholder="Digite seu email"
                style={styles.input}
                value={email}
                onChangeText={(e) => setEmail(e)}
            />
            <TextInput
                placeholder="Digite seu senha"
                style={styles.input}
                secureTextEntry={true}
                value={senha}
                onChangeText={(e) => setSenha(e)}

            />
            <TouchableOpacity style={styles.button} onPress={handleLogin} >
                <Text style={{ color: 'white', fontWeight: 'bold' }}>Login</Text>
            </TouchableOpacity>
        </View>
        <View style={{ flexDirection: 'row' }}>
            <View>
                <Text>Criar uma conta!</Text>
            </View>
            <View>
                <TouchableOpacity onPress={() => navigation.navigate('Cadastro')}>
                    <Text style={{ marginLeft: 10, color: 'blue' }}>Click aqui</Text>
                </TouchableOpacity>
            </View>
        </View>

    </View>
}

export default Login