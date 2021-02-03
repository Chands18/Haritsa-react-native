import React from 'react'
import { StyleSheet, Text, View, ScrollView } from 'react-native'
import { HeaderKatalog } from '../../components/Molecules'
import { MenuKatalog } from '../../components/Molecules'
import { PromoKatalog } from '../../components/Molecules'

export default function Katalog({navigation}) {
    return (
        <ScrollView style={{width:'100%', height:'100%'}}>
            <View style={styles.container}>
                <HeaderKatalog/>
                <MenuKatalog/>
                <PromoKatalog/>
            </View>
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'dimgrey',
        justifyContent:'flex-start'
    }
})
