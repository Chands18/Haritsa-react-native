import React from 'react'
import { StyleSheet, Text, View, Image } from 'react-native'

const HeaderPromo = () => {
    return (
        <View style={{backgroundColor:'deeppink',height:60, flexDirection:'row', justifyContent:'flex-start', alignItems:'center', width:'100%'}}> 
            <Image source={require('../../../assets/Icon/Vector.png')}/>
            <Text style={{fontSize:18,fontWeight:'bold', textAlign:'center',left:15, color:'white' }}>Promo Discount 50%</Text>
        </View>
    )
}

export default HeaderPromo

const styles = StyleSheet.create({})
