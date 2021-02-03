import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

const Gap = ({height, width}) => {
    return (
        <View style={{width: width ? width : 0, height: height ? height : 0}}>
            
        </View>
    )
}

export default Gap

const styles = StyleSheet.create({})
