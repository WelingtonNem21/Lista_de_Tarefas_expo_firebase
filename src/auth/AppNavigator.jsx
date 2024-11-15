import Login from "../screens/Login/Longin.jsx";
import Cadastro from '../screens/Cadastro/Cadastro.jsx'
import React, { useEffect, useState } from 'react';
import { onAuthStateChanged, signOut } from 'firebase/auth';
import { auth } from '../services/firebase.js';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import Home from '../screens/Home/Home.jsx'
import LoadingScreen from '../components/LoadingScreen.jsx'


const Stack = createStackNavigator();

export default function AppNavigator() {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (user) => {
            setUser(user); // Atualiza o estado com o usuário autenticado
            setLoading(false); // Marca que a autenticação foi concluída
        });

        // Cleanup na desmontagem do componente
        return unsubscribe;
    }, []);

    if (loading) {
        return <LoadingScreen />;
    }

    return (
        <NavigationContainer>
            <Stack.Navigator>
                {user ? (
                    // Rotas protegidas
                    <>
                        <Stack.Screen name="Home" component={Home} />
                    </>
                ) : (
                    // Rotas públicas
                    <>
                        <Stack.Screen name="Login" component={Login} options={{
                            headerShown: false
                        }} />
                        <Stack.Screen name="Cadastro" component={Cadastro} options={{
                            headerShown: false
                        }} />
                    </>
                )}
            </Stack.Navigator>
        </NavigationContainer>
    );
}
