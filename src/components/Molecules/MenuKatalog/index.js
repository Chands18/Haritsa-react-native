import React from 'react'
import { StyleSheet, Text, View, TextInput, Image } from 'react-native'

export default function MenuKatalog() {
    return (
        <View style={{backgroundColor:'white', marginTop:10}}>
            <View style={{flexDirection:'row', paddingTop:15, marginHorizontal:20,width:'100%'}}>
                <View style={{position:'relative', flex:1}}>
                <TextInput placeholder="Search Data" style={{borderWidth:1, borderColor:'red',borderRadius:10,height:40,fontSize:13,backgroundColor:'white', textAlign:'center'}}/>
                <Image source={require('../../../assets/Icon/search.png')} style={{position:'absolute', top:10, right:20}}/>
                </View>
                <View style={{width:35,alignItems:'center',justifyContent:'center',bottom:0}}>
                </View>
            </View>
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
                <View style={{justifyContent:'space-between', flexDirection:'row', width:'100%', marginBottom:18}}>
                    <View>
                    <View style={{width:58, height:58, borderWidth:1, borderColor:'red', borderRadius:10, }}></View>
                        <Text style={{fontSize:11, fontWeight:'bold', textAlign:'center', marginTop:6}}>Kategori 6</Text>
                    </View>
                    <View>
                    <View style={{width:58, height:58, borderWidth:1, borderColor:'red', borderRadius:10, }}></View>
                        <Text style={{fontSize:11, fontWeight:'bold', textAlign:'center', marginTop:6}}>Kategori 7</Text>
                    </View>
                    <View>
                    <View style={{width:58, height:58, borderWidth:1, borderColor:'red', borderRadius:10, }}></View>
                        <Text style={{fontSize:11, fontWeight:'bold', textAlign:'center', marginTop:6}}>Kategori 8</Text>
                    </View>
                    <View>
                    <View style={{width:58, height:58, borderWidth:1, borderColor:'red', borderRadius:10, }}></View>
                        <Text style={{fontSize:11, fontWeight:'bold', textAlign:'center', marginTop:6}}>Kategori 9</Text>
                    </View>
                    <View>      
                    <View style={{width:58, height:58, borderWidth:1, borderColor:'red', borderRadius:10, }}></View>
                        <Text style={{fontSize:11, fontWeight:'bold', textAlign:'center', marginTop:6}}>Kategori 10</Text>
                    </View>
                </View>   
            </View>
        </View>
    )
}

const styles = StyleSheet.create({})
