import React from 'react'
import { StyleSheet, Text, View, Image } from 'react-native'

const HeaderDetailNews = () => {
    return (
        <View style={{backgroundColor:'deeppink',height:60, flexDirection:'row', justifyContent:'flex-start', alignItems:'center', width:'100%'}}> 
            <Image source={require('../../../assets/Icon/Vector.png')}/>
            <Text style={{fontSize:18,fontWeight:'bold', textAlign:'center',left:15, color:'white' }}>News Title</Text>
        </View>
    )
}

export default HeaderDetailNews

const styles = StyleSheet.create({})
