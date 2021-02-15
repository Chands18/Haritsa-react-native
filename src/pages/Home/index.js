import React from 'react'
import { StyleSheet, Text, View, ScrollView} from 'react-native'
import { Photo } from '../../components/Atoms/Logo'
import { Pickers } from '../../components/Atoms/Picker'
import { Footer, Layout } from '../../components/Molecules'

export default function Home({navigation}) {
    return (
        <ScrollView>
            <View style={styles.container}>
                <Photo/>
                <Pickers navigation={navigation}/>
                <Layout/>
                <Footer/>
            </View>
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'white',
        alignItems:'center',
    }
})