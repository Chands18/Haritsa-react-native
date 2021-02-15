import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { ScrollView } from 'react-native-gesture-handler'
import { RegisterContent } from '../../components'

const Register = () => {
    return (
        <ScrollView>
        <View>
            <RegisterContent/>
        </View>
        </ScrollView>
    )
}

export default Register

const styles = StyleSheet.create({})
