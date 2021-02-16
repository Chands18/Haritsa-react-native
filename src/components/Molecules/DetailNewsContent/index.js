import React from 'react'
import { StyleSheet, Text, View, Image } from 'react-native'
import { dummiesdescnews, images } from '../../../assets'

const DetailNewsContent = () => {
    return (
        <View style={{marginHorizontal:8,marginTop:5}}>
            <Image style={{width:'100%', height:160, borderRadius:8}} source={images.img_news}/>
            <Text style={{textAlign:'justify'}}>{dummiesdescnews.description}</Text>
        </View>
    )
}

export default DetailNewsContent

const styles = StyleSheet.create({})
