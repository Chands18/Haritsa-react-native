import React from 'react'
import { StyleSheet, Text, View, ScrollView} from 'react-native'
import { Photo } from '../../components/Atoms/Logo'
import { Pickers } from '../../components/Atoms/Picker'
import { Footer, Layout } from '../../components/Molecules'

export default function Home() {
    return (
        <ScrollView style={{width:'100%', height:'100%'}}>
            <View style={styles.container}>
                <Photo/>
                <Pickers/>
                <Layout/>
                <Footer/>
            </View>
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'dimgrey',
        justifyContent:'flex-start',
        alignItems:'center'
    }
})