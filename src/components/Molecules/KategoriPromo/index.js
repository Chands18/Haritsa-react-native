import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

export default function KategoriPromo() {
    return (
        <View style={{backgroundColor:'white'}}>
            <Text style={{fontSize:15, fontWeight:'bold',paddingLeft:10 }}>Kategori Promo</Text>
            <View style={{flexDirection:'row', flexWrap:'wrap',marginHorizontal:16, marginTop:25}}>
                <View style={{justifyContent:'space-between', flexDirection:'row', width:'100%', marginBottom:18}}>
                    <View>
                    <View style={{width:58, height:58, borderWidth:1, borderColor:'red', borderRadius:10, }}></View>
                        <Text style={{fontSize:11, fontWeight:'bold', textAlign:'center', marginTop:6}}>Kategori 1</Text>
                    </View>
                    <View>
                    <View style={{width:58, height:58, borderWidth:1, borderColor:'red', borderRadius:10, }}></View>
                        <Text style={{fontSize:11, fontWeight:'bold', textAlign:'center', marginTop:6}}>Kategori 2</Text>
                    </View>
                    <View>
                    <View style={{width:58, height:58, borderWidth:1, borderColor:'red', borderRadius:10, }}></View>
                        <Text style={{fontSize:11, fontWeight:'bold', textAlign:'center', marginTop:6}}>Kategori 3</Text>
                    </View>
                    <View>
                    <View style={{width:58, height:58, borderWidth:1, borderColor:'red', borderRadius:10, }}></View>
                        <Text style={{fontSize:11, fontWeight:'bold', textAlign:'center', marginTop:6}}>Kategori 4</Text>
                    </View>
                    <View>
                    <View style={{width:58, height:58, borderWidth:1, borderColor:'red', borderRadius:10, }}></View>
                        <Text style={{fontSize:11, fontWeight:'bold', textAlign:'center', marginTop:6}}>Kategori 5</Text>
                    </View>
                </View> 
            </View>
        </View>
    )
}

const styles = StyleSheet.create({})
