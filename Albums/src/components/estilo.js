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
        backgroundColor: '#FEFCF1',
        
        
    },

    viewStyleHeader: {
        justifyContent: 'center',
        alignItems: 'center',
        height:60,
        elevation:10,
        paddingTop:15,
        backgroundColor: '#f2f2f2',
        

    },

    textHeader: {
        fontSize: 16,
        fontFamily: 'Montserrat-SemiBold',
        color: 'black',
    },

    titulo: {
        fontSize: 18,
        fontFamily: 'Montserrat-SemiBold',
        color: 'black',
        
    },

    textNormal: {
        fontSize: 14,
        fontFamily: 'OpenSans-Regular',
    },

    botao: {
        padding:10,
        height:42,
        width: 300,
        backgroundColor: '#E84A5F',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius:4,
        marginTop: 10
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
    },
    containerStyle: {
        alignItems: 'center',
        justifyContent: 'center',
        borderWidth: 1,
        borderRadius: 2,
        borderColor: '#ddd',
        borderBottomWidth: 0,
        
        elevation: 1,
        marginLeft: 5,
        marginRight: 5,
        marginTop:10,
        padding:6,
        
    },

})

export {estilo}