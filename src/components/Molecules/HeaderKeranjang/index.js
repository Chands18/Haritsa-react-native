import React from 'react'
import { StyleSheet, Text, View, Image } from 'react-native'
import { icons } from '../../../assets'

const HeaderKeranjang = () => {
    return (
        <View style={{backgroundColor:'deeppink',height:60, flexDirection:'row', justifyContent:'flex-start', alignItems:'center', width:'100%'}}> 
            <Text style={{fontSize:18,fontWeight:'bold', textAlign:'center',left:20, color:'white' }}>Shopping cart</Text>
        </View>
    )
}

export default HeaderKeranjang

const styles = StyleSheet.create({})

