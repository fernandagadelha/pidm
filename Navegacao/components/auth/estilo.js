/* eslint-disable prettier/prettier */
/* eslint-disable react-native/no-inline-styles */
/* eslint-disable prettier/prettier */
import { StyleSheet } from "react-native";

const estilo = StyleSheet.create({
    container: {
        flex: 1, //diz que quero usar a tela toda
        flexDirection: 'column', //diz o eixo principal
        justifyContent: 'center', //organiza de acordo com o eixo principal, que no caso é a coluna de cima pra baixo, vai botar no centro da coluna
        alignItems: 'center', //organiza no sentido contrário do flexDirection que, no caso, é horizontal
    },
    titulo: {
        fontSize: 24,
        fontFamily: 'Arial',
        fontWeight: 'bold',
        color: '#7ca4ef',
        marginBottom: 40
        
    },
    botao: {
        padding:10,
        height:42,
        backgroundColor: '#7ca4ef',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius:4
    },
    botaoLogin: {
        padding:10,
        height:42,
        width: 300,
        backgroundColor: '#7ca4ef',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius:4,
        marginTop: 20
    },
    textButton: {
        color: '#ffffff',
        fontWeight: 'bold'
    },
    input: {
        margin: 15,
        height: 40,
        width: 300,
        borderColor: '#7ca4ef',
        borderWidth: 1,
        padding: 12
    }

})

export {estilo}
