/* eslint-disable prettier/prettier */
/* eslint-disable react-native/no-inline-styles */
/* eslint-disable prettier/prettier */
import React, {Component} from 'react';
import {View, Text, TouchableHighlight, Image} from 'react-native';
import {styles} from './style';
// import {View, Text, TouchableOpacity, Image, TouchableHighlight, Modal} from 'react-native';


export default class Perfil extends Component {
    render(){
        return(
            <View style={{ flex:1, alignItems:'center', justifyContent: 'center'}}>
                <Image
                    style={styles.imgSize}
                    source={{
                    uri: 'https://www.meme-arsenal.com/memes/96cb533ad27037917e28a8a576b3f0db.jpg',
                    }}
                />
                <Text style={styles.modalText}>Nome: {this.props.route.params.nome}</Text>
                <Text style={styles.modalText}>Idade: {this.props.route.params.idade}</Text>
                <Text style={styles.modalText}>E-mail: {this.props.route.params.email}</Text>

                <TouchableHighlight
                    style={{ ...styles.button, backgroundColor: "#003f5f" }}
                    onPress={() => {this.props.navigation.navigate('Home')}}
                >

                    <Text style={styles.textStyle}>Home</Text>

                </TouchableHighlight>

                
            </View>
        )
    }
}








// export default class Perfil extends Component {
//     state = {
//       modalVisible: true,
//     };

//     setModalVisible = (visible) => {
//       this.setState({ modalVisible: visible });
//     }

//     render() {
//         const { modalVisible } = this.state;
//         return (
//         <View style={styles.centeredView}>
//             <Modal
//             animationType="slide"
//             transparent={true}
//             visible={modalVisible}
//             >

//             <View style={styles.centeredView}>
//                 <View style={styles.modalView}>
//                 <Image
//                     style={styles.imgSize}
//                     source={{
//                     uri: 'https://www.meme-arsenal.com/memes/96cb533ad27037917e28a8a576b3f0db.jpg',
//                     }}
//                 />

//                 <Text style={styles.modalText}>Nome: {this.props.route.params.nome}</Text>
//                 <Text style={styles.modalText}>Idade: {this.props.route.params.idade}</Text>
//                 <Text style={styles.modalText}>E-mail: {this.props.route.params.email}</Text>

//                 <TouchableHighlight
//                     style={{ ...styles.button, backgroundColor: "#003f5f" }}
//                     onPress={() => {
//                         this.setModalVisible(!modalVisible);
//                         this.props.navigation.navigate('Home');
//                     }}
//                 >
//                     <Text style={styles.textStyle}>Home</Text>
//                 </TouchableHighlight>
//                 </View>
//             </View>
//             </Modal>


//         </View>
//         );
//     }
// }