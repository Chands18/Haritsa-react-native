import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { HeaderKatalog } from '../../components/Molecules'
import { MenuKatalog } from '../../components/Molecules'

export default function Katalog({navigation}) {
    return (
        <View style={styles.container}>
            <HeaderKatalog/>
            <MenuKatalog/>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'dimgrey',
        justifyContent:'flex-start'
    }
})
