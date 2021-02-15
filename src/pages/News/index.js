import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { HeaderNews, NewsContent } from '../../components'

const News = () => {
    return (
        <View style={styles.container}>
            <HeaderNews/>
            <NewsContent/>
        </View>
    )
}

export default News

const styles = StyleSheet.create({
    container:{
        backgroundColor:'white'
    }
})
