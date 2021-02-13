import React from 'react'
import { StyleSheet, Text, View, Image } from 'react-native'
import { dummiesdescnews, images } from '../../../assets'

const DetailNewsContent = () => {
    return (
        <View>
            <Image style={{width:'100%', height:160}} source={images.img_news}/>
            <Text style={{marginHorizontal:8, textAlign:'justify'}}>{dummiesdescnews.description}</Text>
        </View>
    )
}

export default DetailNewsContent

const styles = StyleSheet.create({})
