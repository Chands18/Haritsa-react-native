import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { LoginContent } from '../../components'

const Login = () => {
    return (
        <View style={styles.container}>
            <LoginContent/>
        </View>
    )
}

export default Login

const styles = StyleSheet.create({
    container:{
        backgroundColor:'white',
        height:'100%'
    }
})
