import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { ScrollView } from 'react-native-gesture-handler'
import { BerkahContent } from '../../components'
import HeaderBerkah from '../../components/Molecules/HeaderBerkah'

const Berkah = () => {
    return (
        <ScrollView>
        <View>
            <HeaderBerkah/>
            <BerkahContent/>
        </View>
        </ScrollView>
    )
}

export default Berkah

const styles = StyleSheet.create({})
