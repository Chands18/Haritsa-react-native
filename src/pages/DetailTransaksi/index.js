import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { DetailTransaction, HeaderDetTransaction } from '../../components'

const DetailTransaksi = () => {
    return (
        <View>
            <HeaderDetTransaction/>
            <DetailTransaction/>
        </View>
    )
}

export default DetailTransaksi

const styles = StyleSheet.create({})
