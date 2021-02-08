import React from 'react'
import { StyleSheet, Text, View,Image } from 'react-native'
import { ScrollView, TextInput } from 'react-native-gesture-handler'

export default function HeaderKatalog() {
    return (
        <View style={{backgroundColor:'lavender',height:60}}>
            <View style={{flexDirection:'row', paddingTop:15, marginHorizontal:20,width:'100%'}}>
                <View style={{position:'relative', flex:1}}>
                <TextInput placeholder="Search Data" style={{borderWidth:1, borderColor:'red',borderRadius:10,height:40,fontSize:13,backgroundColor:'white', textAlign:'center'}}/>
                <Image source={require('../../../assets/Icon/search.png')} style={{position:'absolute', top:10, right:20}}/>
                </View>
                <View style={{width:35,alignItems:'center',justifyContent:'center',bottom:0}}>
                </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({})
