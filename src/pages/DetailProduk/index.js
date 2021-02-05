import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { Deskripsiproduk, HeaderDetail } from '../../components'

const DetailProduk = () => {
    return (
        <View style={styles.container}>
            <HeaderDetail/>
            <Deskripsiproduk/>
        </View>
    )
}

export default DetailProduk

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'dimgrey',
        justifyContent:'flex-start'
    }
})
