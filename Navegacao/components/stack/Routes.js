/* eslint-disable prettier/prettier */
/* eslint-disable react-native/no-inline-styles */
/* eslint-disable prettier/prettier */
import Navegacao from './Navegacao';
import About from './About';
import Modal from './Modal';

//Versão 5.x (COM MODAL - preciso de duas pilhas/stacks)
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
            <PilhaPrincipal.Screen name='Home' component={Navegacao}/>
            <PilhaPrincipal.Screen name='About' component={About}/>

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
                    name='MeuModal'
                    component={Modal}
                    options={{headerShown: false}}
                />
            </PilhaRaiz.Navigator>

        </NavigationContainer>
        
    )
}

export default PilhaRaizTelas;




//Versão 5.x (SEM MODAL)
/*import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

const Stack = createStackNavigator();  //navegação do tipo pilha(stack em inglês)

function Routes(){
    return (
        <NavigationContainer>
            <Stack.Navigator
                initialRouteName='Home'
                
            >
                <Stack.Screen
                    name='Home'
                    component={Navegacao}
                    options={{title:'Home'}}
                />

                <Stack.Screen
                    name='About'
                    component={About}
                    options={About.estiloCabecalho}
                />

            </Stack.Navigator>
        </NavigationContainer>
    )
}

export default Routes;*/


// Versão 4.x (ANTIGA)
// import {createAppContainer} from 'react-navigation';
// import {createStackNavigator} from 'react-navigation-stack';

// const Routes = createAppContainer(
//   createStackNavigator(
//     {
//       Home: Navegacao,
//       About: About,
//     },

//     {
//       initialRouteName: 'Home',
//     },
//   ),
// );

// export default Routes;
