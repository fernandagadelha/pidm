/* eslint-disable prettier/prettier */
/* eslint-disable react-native/no-inline-styles */
/* eslint-disable prettier/prettier */
import Home from './Home';
import Sobre from './Sobre';
import Cadastro from './Cadastro';
import IMC from './IMC';
import Resultado from './Resultado';
import Perfil from './Perfil';




import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

const PilhaPrincipal = createStackNavigator();
const PilhaRaiz = createStackNavigator();

function PilhaPrincipalTelas() {
    return(
        <PilhaPrincipal.Navigator
            initialRouteName='Home'
        
        >
            <PilhaPrincipal.Screen name='Home' component={Home}/>
            <PilhaPrincipal.Screen name='Cadastro' component={Cadastro}/>
            <PilhaPrincipal.Screen name='IMC' component={IMC}/>
            <PilhaPrincipal.Screen name='Resultado' component={Resultado}/>            
            <PilhaPrincipal.Screen name='Sobre' component={Sobre}/>

        </PilhaPrincipal.Navigator>
    )
}

function PilhaRaizTelas() {
    return(
        <NavigationContainer>
            <PilhaRaiz.Navigator>
                <PilhaRaiz.Screen
                    name='Principal'
                    component={PilhaPrincipalTelas}
                    options={{headerShown: false}}

                />
                <PilhaRaiz.Screen
                    name='Perfil'
                    component={Perfil}
                    options={{headerShown: false}}
                />
            </PilhaRaiz.Navigator>

        </NavigationContainer>
        
    )
}

export default PilhaRaizTelas;















// const Stack = createStackNavigator();

// function Routes(){
//     return (
//         <NavigationContainer>
//             <Stack.Navigator
//                 initialRouteName='Home'
//             >
//                 <Stack.Screen
//                     name='Home'
//                     component={Home}
//                 />

//                 <Stack.Screen
//                     name='Cadastro'
//                     component={Cadastro}
//                 />

//                 <Stack.Screen
//                     name='IMC'
//                     component={IMC}
//                 />

//                 <Stack.Screen
//                     name='Resultado'
//                     component={Resultado}
//                 />

//                 <Stack.Screen
//                     name='Perfil'
//                     component={Perfil}
//                 />

//                 <Stack.Screen
//                     name='Sobre'
//                     component={Sobre}
//                 />

//             </Stack.Navigator>
//         </NavigationContainer>
//     )
// }

// export default Routes;