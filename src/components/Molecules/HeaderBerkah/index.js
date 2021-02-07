import React from 'react'
import { StyleSheet, Text, View, Image } from 'react-native'

const HeaderBerkah = () => {
    return (
        <View style={{backgroundColor:'paleturquoise', height:72 ,flexDirection:'row',justifyContent:'center' ,alignItems:'center', position:'relative'}}>
            <Image style={{right: 158}} source={require('../../../assets/Icon/BackIcon.png')}/>
            <Text style={{fontSize:20, color:'black'}}>Berkah</Text>
        </View>
    )
}

export default HeaderBerkah

const styles = StyleSheet.create({})
