import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

export const NewsCard =({children})=>{
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
        height: 120, 
        borderRadius:9,
        alignItems:'center',
        justifyContent:'flex-end'
    }
})