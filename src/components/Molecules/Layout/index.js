import React from 'react'
import { StyleSheet, Text, View, FlatList, ScrollView,Dimensions } from 'react-native'
import { DiscountCard } from '..'
import { images } from '../../../assets';

const dummiImage = [images.img_Logo,images.img_Logo]
const {width,height}=Dimensions.get('window');
const dummies = [
    {
        id:1,
        text:'Diskon 1'
    },
    {
        id:2,
        text:'Diskon 2'
    },
    {
        id:3,
        text:'Diskon 3'
    },
]

export default function Layout() {
    const renderItem=({item,index})=>{
        return(
            <View style={{width:100,marginRight:10,alignItems:'center'}}>
            <DiscountCard>
                <Text>{item.text}</Text>
            </DiscountCard>
            </View>
        )
    }

    const renderItem2=({item,index})=>{
        return(
            <View style={{backgroundColor:'purple',height:'95%', width:width-30, margin:5, borderRadius:10}}>

            </View>
        )
    }
    return (   
        <View style={styles.container}>
            <Text style={styles.text}>Promo Di Bulan Ini</Text>
                <View style={{marginTop:10, justifyContent:'center',alignItems:'center' ,width:'100%'}}>
                    <FlatList scrollEnabled={false} data={dummies} numColumns={3} style={{height:200}} renderItem={renderItem} keyExtractor={(item,index)=>index.toString()} />
                </View>
                <View >
                    <FlatList scrollEnabled={true} data={dummies} horizontal style={{marginTop:10,height:100,width:'100%'}} renderItem={renderItem2} keyExtractor={(item,index)=>index.toString()} />
                </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        marginTop:20,
        paddingVertical: 10,
        paddingHorizontal:10,
        width: '100%',
        backgroundColor: 'white',
    },
    text: {
        width: '100%',
        textAlign: 'left',
        fontWeight: 'bold'
    },
})

