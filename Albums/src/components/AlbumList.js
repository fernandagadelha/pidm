/* eslint-disable prettier/prettier */
/* eslint-disable react-native/no-inline-styles */
/* eslint-disable prettier/prettier */
import React, { Component } from "react";
import { Text, View, FlatList } from "react-native";

import AlbumDetail from './AlbumDetail';

import {estilo} from './estilo';

export default class AlbumList extends Component {
  constructor(props){
    super(props)
    this.state = {albums:[]}
  }

  componentDidMount(){ //é aqui que vamos fazer a busca dos albums
    fetch('https://raw.githubusercontent.com/san650/ten/master/apps/music/api/albums.json')
    .then(
      (response)=>{
        return response.json()
      }
    )
    .then(
      (responseJson) => {
        // console.log('-----------------')
        // console.log(responseJson.albums)
        this.setState({albums:responseJson.albums})
      }
    )
  }

  // renderAlbums(){
  //   if(this.state.albums && this.state.albums[2]){
  //     return (
  //       <View>
  //         <Text style={estilo.titulo}>{this.state.albums[2].name}</Text>
  //       </View>
  //     )
  //   }
  // }

  render(){
    return (
      <FlatList
        data = {this.state.albums}
        renderItem ={
          ({item})=>{
            return (
              <AlbumDetail album={item}/>
            )
          }
        }
        keyExtractor ={
          (index,item)=>{
            return index+item
          }
        }
      
      />
    )
  }
}