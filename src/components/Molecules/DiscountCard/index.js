import React from 'react'
import { StyleSheet, Text, View, Image } from 'react-native'

export const DiscountCard =({children})=>{
    return(
        <View style={styles.container} >
            {children}
        </View>
    )
}
const styles = StyleSheet.create({
    container:{
        backgroundColor: 'transparent',
        width:'100%', 
        height: 106, 
        alignItems:'center',
        justifyContent:'flex-end'
    }
})
