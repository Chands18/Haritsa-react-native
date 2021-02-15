import React from 'react'
import { StyleSheet, Text, View, Image } from 'react-native'

const HeaderDetTransaction = () => {
    return (
        <View style={{backgroundColor:'deeppink',height:60, flexDirection:'row', justifyContent:'flex-start', alignItems:'center', width:'100%'}}> 
            <Image source={require('../../../assets/Icon/Vector.png')}/>
            <Text style={{fontSize:18,fontWeight:'bold', textAlign:'center',left:15, color:'white' }}>History: INV-210130-0001</Text>
        </View>
    )
}

export default HeaderDetTransaction

const styles = StyleSheet.create({})
