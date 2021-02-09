import React from 'react'
import { Image, StyleSheet, Text, View } from 'react-native'
import {images} from '../../../assets'

export default function Logo() {
    return (
        <View>
            <Text></Text>
        </View>
    )
}

export const Photo = () => {
    return (
        <View style={{padding:20, alignItems:'center'}}>
            <Image source={images.img_logo} style={styles} />
        </View>
    );
    }

const styles = StyleSheet.create({
    
})