import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    button:{
        backgroundColor: "#E91E63",
        padding: 10,
        marginBottom: 10,
        marginTop: 10,
        width: '75%',
        borderRadius: 2,
        alignItems: 'center',
    },
    backButton:{
        backgroundColor: "#003f5f",
        padding: 10,
        marginBottom: 10,
        marginTop: 10,
        width: '75%',
        borderRadius: 2,
        alignItems: 'center',
    },
    buttonText: {
        color: 'white',
        fontWeight: 'bold',
        fontSize: 16,
    },
    container: {
        flex: 1,
        flexDirection: 'column',
        alignItems: "center",
        justifyContent: "center",
    },
    
    title:{
        fontSize: 20,
        fontWeight: "bold"
    },
    textInput: {
        borderBottomColor: 'black',
        borderBottomWidth:1,
        width: "75%",
        marginBottom: 10,
    },
    imgSize: {
        width: 300,
        height: 300,
    },
    texts: {
        fontWeight: 'bold',
        fontSize: 18,
        alignItems: 'center',
        justifyContent: 'center',
        marginLeft: 20,
        marginRight:20,
    },
    centeredView: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: "center",
        alignItems: "center",
        marginTop: 22,
    },
    modalView: {
        margin: 20,
        width:340,
        height:500,
        backgroundColor: "white",
        borderRadius: 6,
        padding: 15,
        alignItems: "center",
        shadowColor: "#000",
        shadowOffset: {
          width: 0,
          height: 2,
    },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5
    },
      openButton: {
        backgroundColor: "#003f5f",
        borderRadius: 6,
        padding: 10,
        elevation: 2,
         
    },
      textStyle: {
        color: "white",
        fontWeight: "bold",
        textAlign: "center"
    },
      modalText: {
        marginBottom: 15,
        textAlign: "center"
    },
});

export {styles}