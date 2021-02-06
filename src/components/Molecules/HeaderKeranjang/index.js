import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

const HeaderKeranjang = () => {
    return (
        <View style={{width:420,height:50, backgroundColor:'red'}}>
            <Text style={{textAlignVertical:'center', textAlign:'center', fontSize:20, flex:1}}>Keranjang Belanja</Text>
        </View>
    )
}

export default HeaderKeranjang

const styles = StyleSheet.create({})
