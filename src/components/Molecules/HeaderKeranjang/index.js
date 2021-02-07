import React from 'react'
import { StyleSheet, Text, View, Image, Dimensions } from 'react-native'

const {width} = Dimensions.get('window');
const HeaderKeranjang = () => {
    return (
        <View style={styles.container}>
            <Image style={{right:74}} source={require('../../../assets/Icon/BackIcon.png')}/>
            <Text style={styles.text}>Keranjang Belanja</Text>
        </View>
    )
}

export default HeaderKeranjang

const styles = StyleSheet.create({
    container: {width,height:72,flexDirection:'row', backgroundColor:'darkseagreen', justifyContent:'center',alignItems:'center'},
    text: {fontSize:25,}
})
