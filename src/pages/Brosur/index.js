import React from 'react'
import { ScrollView } from 'react-native'
import { StyleSheet, Text, View } from 'react-native'
import { BrosurContent, HeaderBrosur } from '../../components'

const Brosur = () => {
    return (
        <ScrollView>
        <View style={styles.container}>
            <HeaderBrosur/>
            <BrosurContent/>
        </View>
        </ScrollView>
    )
}

export default Brosur

const styles = StyleSheet.create({
    container:{
        backgroundColor:'white',
        height:950
    }
})
