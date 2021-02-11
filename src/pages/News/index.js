import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { HeaderNews, NewsContent } from '../../components'

const News = () => {
    return (
        <View>
            <HeaderNews/>
            <NewsContent/>
        </View>
    )
}

export default News

const styles = StyleSheet.create({})
