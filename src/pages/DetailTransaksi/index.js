import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { DetailTransaction, HeaderDetTransaction } from '../../components'

const DetailTransaksi = () => {
    return (
        <View style={styles.container}>
            <HeaderDetTransaction/>
            <DetailTransaction/>
        </View>
    )
}

export default DetailTransaksi

const styles = StyleSheet.create({
    container:{
        backgroundColor:'white',
        height:'100%'
    }
})
