import React from 'react'
import { Image, StyleSheet, Text, View } from 'react-native'
import {images} from '../../../assets'


export const Photo = () => {
    return (
        <View style={{alignItems:'center'}}>
            <Image source={images.img_logo} style={styles.image} />
        </View>
    );
    }

const styles = StyleSheet.create({
    image:{
        width:185,
        marginBottom:10,
        top:20
    }
})