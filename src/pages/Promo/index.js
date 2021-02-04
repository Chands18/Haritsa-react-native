import React from 'react'
import { StyleSheet, Text, View, ScrollView } from 'react-native'
import { HeaderPromo, KategoriPromo } from '../../components'
import PromoCards from '../../components/Molecules/PromoCards'

export default function Promo({navigation}) {
    return (
        <ScrollView style={{width:'100%', height:'100%'}}>
            <View style={styles.container}>
                <HeaderPromo/>
                <KategoriPromo/>
                <PromoCards/>
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
