import React from 'react'
import { StyleSheet, Text, View, FlatList, Dimensions, Image } from 'react-native'
import { DiscountCard } from '..'
import { dummiesProduk, dummiesPromo, images } from '../../../assets';

const dummiImage = [images.img_Logo,images.img_Logo]
const {width,height}=Dimensions.get('window');
const dummies = [
    {
        id:1,
    },
    {
        id:2,
    },
    {
        id:3,
    },
]

export default function Layout() {
    const renderItem=({item,index})=>{
        console.log(item)
        return(
            <View style={{width:106,marginRight:10,alignItems:'center',}}>
            <DiscountCard>
                <Image resizeMode='cover' style={{flex:1, borderRadius:10,}} source={item}/>
            </DiscountCard>
            </View>
        )
    }

    const renderItem2=({item,index})=>{
        return(
            <View style={{backgroundColor:'white',borderWidth:1, borderColor:'red', height:'95%', width:width-30, margin:5, borderRadius:10, elevation:10,}}>
                
            </View>
        )
    }
    return (   
        <View style={styles.container}>
            <Text style={styles.text}>Promo This Month</Text>
                <View style={{marginTop:10, justifyContent:'center',alignItems:'center' ,width:'100%',}}>
                    <FlatList scrollEnabled={false} data={dummiesProduk} numColumns={3} style={{height:120}} renderItem={renderItem} keyExtractor={(item,index)=>index.toString()} />
                </View>
                <View >
                    <FlatList scrollEnabled={true} data={dummies} horizontal style={{height:129,width:'100%'}} renderItem={renderItem2} keyExtractor={(item,index)=>index.toString()} />
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
        elevation:2,
        borderRadius:10,
        backgroundColor:'white'
    },
    text: {
        width: '100%',
        textAlign: 'left',
        fontWeight: 'bold'
    },
})

