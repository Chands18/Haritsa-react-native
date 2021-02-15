import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

const HeaderAccount = () => {
    return (
        <View style={{backgroundColor:'deeppink',height:60, flexDirection:'row', justifyContent:'flex-start', alignItems:'center', width:'100%'}}> 
            <Text style={{fontSize:18,fontWeight:'bold', textAlign:'center',left:20, color:'white' }}>Account: </Text>
        </View>
    )
}

export default HeaderAccount

const styles = StyleSheet.create({})
