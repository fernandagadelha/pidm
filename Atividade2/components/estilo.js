//isso não é um componente, é onde eu vou configurar o estilo
//comum aos componentes que eu quiser
//aí é só importar nos componentes e passar a propriedade

import { StyleSheet } from 'react-native'

export default StyleSheet.create({
    App: {
        flex: 1,
        backgroundColor: '#fff',
        justifyContent: 'center',
        alignItems: 'center'
    },

    textTitle: {
        fontSize:28,
        fontWeight: 'bold'
    },

    buttonContainer: {
        flex: 1,        
        backgroundColor: '#a9a6f2',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 10,
        margin:300
    
    },

    buttonText: {
        fontSize: 18,
        fontFamily: 'Gill Sans',
        textAlign: 'center',
        margin: 10,
        color: '#fff',
    },

    

})
