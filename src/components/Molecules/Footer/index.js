import React from 'react'
import { StyleSheet, Text, View, FlatList} from 'react-native'
import { NewsCard } from '..' ;

const dummies = [
    {
        id:1,
        text:'Warung Berkah'
    },
    {
        id:2,
        text:'Donasi'
    },
    {
        id:3,
        text:'Rumah Tahfidz'
    },
]

export default function Footer() {
        const renderItem=({item,index})=>{
            return(
                <View style={{width:108, marginRight:10,alignItems:'center'}}>
                <NewsCard>
                    <Text>{item.text}</Text>
                </NewsCard>
                </View>
            )
        }
        
            return (
                <View style={styles.container}> 
                    <Text style={styles.text}>Berkah</Text>
                    <View style={{marginTop:10, justifyContent:'center',alignItems:'center' ,width:'100%'}}>
                    <FlatList data={dummies} numColumns={3} style={{height:200}} renderItem={renderItem} keyExtractor={(_item,index)=>index.toString()} />
                </View>
                </View>
            )
}

const styles = StyleSheet.create({
    container: {
        marginTop:20,
        paddingHorizontal:10,
        width: '100%',
        height: 200,
        margin: 15,
        backgroundColor: 'white',
    },
    text: {
        width: '100%',
        textAlign: 'left',
        fontWeight:'bold'
    }
})

