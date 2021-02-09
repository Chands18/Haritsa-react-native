import React from 'react'
import { StyleSheet, Text, View, Image } from 'react-native'
import { icons } from '../../../assets'

const HeaderPromo = () => {
    return (
        <View style={{backgroundColor:'deeppink',height:60, flexDirection:'row', justifyContent:'flex-start', alignItems:'center', width:'100%'}}> 
            <Image source={require('../../../assets/Icon/Vector.png')}/>
            <Text style={{fontSize:18,fontWeight:'bold', textAlign:'center',left:20, color:'white' }}>Promo Discount 50%</Text>
            <Image style={{marginLeft:160}} source={icons.ic_cart}/>
        </View>
    )
}

export default HeaderPromo

const styles = StyleSheet.create({})
