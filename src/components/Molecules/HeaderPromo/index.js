import React from 'react'
import { StyleSheet, Text, View, Image } from 'react-native'

const HeaderPromo = () => {
    return (
        <View style={{backgroundColor:'lavender',height:200}}> 
            <View style={{paddingTop:15}}>
                <View style={{flex:1}}>
                <Image source={require('../../../assets/Icon/BackIcon.png')} style={{position:'absolute', top:10}}/>
                </View>
                <View style={{width:60,marginHorizontal:180}}>
                    <Text style={{fontSize:18,fontWeight:'bold', justifyContent:'center',top:7}}>Promo</Text>
                </View>
            </View>
            <Text style={{paddingLeft:20,paddingTop:110, fontSize:11}}>
                slide show berita
            </Text>
        </View>
    )
}

export default HeaderPromo

const styles = StyleSheet.create({})
