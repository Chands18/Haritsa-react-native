import React from 'react'
import { StyleSheet, Text, View, Image } from 'react-native'

const HeaderBrosur = () => {
    return (
        <View style={{backgroundColor:'lightpink', height:72 ,flexDirection:'row', justifyContent:'space-between', alignItems:'center'}}>
            <Image style={{}} source={require('../../../assets/Icon/BackIcon.png')}/>
            <Text style={{fontSize:20, color:'black'}}>Brosur</Text>
            <Image source={require('../../../assets/Icon/download.png')}/>
        </View>
    )
}

export default HeaderBrosur

const styles = StyleSheet.create({})
