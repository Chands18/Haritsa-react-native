import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

const HeaderTransaction = () => {
    return (
        <View style={{backgroundColor:'deeppink',height:60, flexDirection:'row', justifyContent:'flex-start', alignItems:'center', width:'100%'}}> 
            <Text style={{fontSize:20,fontWeight:'bold', textAlign:'center',left:20, color:'white' }}>Transaction</Text>
        </View>
    )
}

export default HeaderTransaction

const styles = StyleSheet.create({})
