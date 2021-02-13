import React from 'react'
import { StyleSheet, Text, View, Image } from 'react-native'

const HeaderBrosur = () => {
    return (
        <View style={{backgroundColor:'deeppink',height:60, flexDirection:'row', justifyContent:'flex-start', alignItems:'center', width:'100%'}}> 
            <Text style={{fontSize:18,fontWeight:'bold', textAlign:'center',left:20, color:'white' }}>Brochure</Text>
        </View>
    )
}

export default HeaderBrosur

const styles = StyleSheet.create({})
