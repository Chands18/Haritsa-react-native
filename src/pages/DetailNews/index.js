import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { DetailNewsContent, HeaderDetailNews } from '../../components'

const DetailNews = () => {
    return (
        <View>
            <HeaderDetailNews/>
            <DetailNewsContent/>
        </View>
    )
}

export default DetailNews

const styles = StyleSheet.create({})
