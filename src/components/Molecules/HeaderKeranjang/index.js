import React from 'react'
import { StyleSheet, Text, View, Image } from 'react-native'

const HeaderKeranjang = () => {
    return (
        <View style={styles.container}>
            <Image source={require('../../../assets/Icon/BackIcon.png')} style={{alignItems:'center', marginLeft:10, top:15}}/>
            <Text style={styles.text}>Keranjang Belanja</Text>
        </View>
    )
}

export default HeaderKeranjang

const styles = StyleSheet.create({
    container: {width:420,height:50, backgroundColor:'darkseagreen',},
    text: {flex:1, textAlign:'center', fontSize:20, bottom:10}
})
