import React from 'react'
import { ScrollView } from 'react-native'
import { StyleSheet, Text, View } from 'react-native'
import { Button, Deskripsiproduk, DetailCards, DetailSlider, HeaderDetail } from '../../components'

const DetailProduk = () => {
    return (
        <ScrollView>
        <View style={styles.container}>
            <HeaderDetail/>
            <DetailSlider/>
            <Deskripsiproduk/>
            <DetailCards/>
        </View>
        </ScrollView>
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
