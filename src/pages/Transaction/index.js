import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { HeaderTransaction, TransactionContent } from '../../components'

const Transaction = () => {
    return (
        <View>
            <HeaderTransaction/>
            <TransactionContent/>
        </View>
    )
}

export default Transaction

const styles = StyleSheet.create({})
