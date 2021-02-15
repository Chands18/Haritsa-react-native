import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { AkunContent, HeaderAccount } from '../../components'

const Akun = () => {
    return (
        <View style={styles.container}>
            <HeaderAccount/>
            <AkunContent/>
        </View>
    )
}

export default Akun

const styles = StyleSheet.create({
    container:{
        backgroundColor:'white',
         height:'100%'
    }     
})
