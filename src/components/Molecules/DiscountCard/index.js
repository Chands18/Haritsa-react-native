import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

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
        borderColor:'red',
        borderWidth:0.5,
        width:'100%', 
        height: 200, 
        borderRadius:8,
        alignItems:'center',
        justifyContent:'flex-end'
    }
})
