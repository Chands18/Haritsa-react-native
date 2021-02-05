import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

const Deskripsiproduk = () => {
    return (
        <View style={{width:'100%', backgroundColor:'white', height:200}}>
            <Text style={{paddingTop: 10,paddingLeft: 20, fontSize: 20}}>Rp 10.000</Text>
            <Text style={{paddingLeft: 20}}>Deskripsi Produk</Text>
            <Text style={{fontSize: 11, paddingLeft: 20, position:'relative', top: 63}}>Stock</Text>
            <Text style={{fontSize: 11, paddingLeft: 20, position:'relative', top: 63}}>##</Text>
            <Text style={{fontSize: 11, paddingLeft: 120, position:'relative', top: 28}}>Terjual</Text>
            <Text style={{fontSize: 11, paddingLeft: 120, position:'relative', top: 30}}>##</Text>
        </View>
    )
}

export default Deskripsiproduk

const styles = StyleSheet.create({})
