import React from 'react'
import { ScrollView } from 'react-native'
import { StyleSheet, Text, View } from 'react-native'
import { BottomCard, DetailCart, HeaderKeranjang } from '../../components/Molecules'

const KeranjangBelanja = () => {
    return (
        <ScrollView>
        <View style={styles.container}>
            <HeaderKeranjang/>
            <DetailCart/>
            <BottomCard/>
        </View>
        </ScrollView>
    )
}

export default KeranjangBelanja

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'dimgrey',
        justifyContent:'flex-start'
    }
})
