import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { HeaderPromo, KategoriPromo } from '../../components'

export default function Promo({navigation}) {
    return (
        <View>
            <HeaderPromo/>
            <KategoriPromo/>
        </View>
    )
}

const styles = StyleSheet.create({})
