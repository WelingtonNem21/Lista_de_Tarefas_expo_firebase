import { Text, TouchableOpacity, View } from "react-native";
import styles from './home.style.js'
import { onAuthStateChanged, signOut } from 'firebase/auth';
import { auth } from '../../services/firebase.js';


function Home() {

    async function teste() {

        try {
            await signOut(auth)

        } catch (error) {
            console.log(error)
        }

    }

    return <View style={styles.container}>
        <Text>Helo world</Text>
        <Text>Helo world</Text>
        <Text>Helo world</Text>
        <TouchableOpacity onPress={teste}>
            <Text style={{ marginLeft: 10, color: 'blue' }}>SAIR</Text>
        </TouchableOpacity>
    </View>
}

export default Home