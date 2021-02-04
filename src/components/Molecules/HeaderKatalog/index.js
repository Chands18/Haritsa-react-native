import React from 'react'
import { StyleSheet, Text, View,Image } from 'react-native'
import { ScrollView, TextInput } from 'react-native-gesture-handler'

export default function HeaderKatalog() {
    return (
        <View style={{backgroundColor:'lavender',height:200}}>
            <View style={{marginHorizontal:15,flexDirection:'row', paddingTop:15}}>
                <View style={{position:'relative', flex:1}}>
                <TextInput placeholder="Search" style={{borderWidth:1, borderColor:'red',borderRadius:10,height:40,fontSize:13, paddingLeft:20,paddingRight:40, marginRight: 10 ,backgroundColor:'white'}}/>
                <Image source={require('../../../assets/Icon/search.png')} style={{position:'absolute', top:10, right:20}}/>
                </View>
                <View style={{width:35,alignItems:'center',justifyContent:'center',bottom:0}}>
                    <Image source={require('./../../../assets/Icon/logo1.png')}/>
                </View>
            </View>
            <View>
            </View>
            <Text style={{paddingLeft:20,paddingTop:110, fontSize:11}}>
                slide show berita
            </Text>
        </View>
    )
}

const styles = StyleSheet.create({})
