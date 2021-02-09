import React from 'react'
import { StyleSheet, Text, View, Image } from 'react-native'
import { icons } from '../../../assets'

const HeaderDetail = () => {
    return (
        <View style={{backgroundColor:'deeppink',height:60, flexDirection:'row', justifyContent:'flex-start', alignItems:'center', width:'100%'}}> 
            <Image source={require('../../../assets/Icon/Vector.png')}/>
            <Text style={{fontSize:18,fontWeight:'bold', textAlign:'center',left:20, color:'white' }}>Promina Puff Snack bayi</Text>
            <Image style={{marginLeft:135}} source={icons.ic_cart}/>
        </View>
    )
}

export default HeaderDetail

const styles = StyleSheet.create({})

