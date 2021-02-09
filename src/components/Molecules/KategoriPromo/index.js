import React from 'react'
import { StyleSheet, Text, View, Image, TextInput} from 'react-native'
import { icons, images } from '../../../assets'

export default function KategoriPromo() {
    return (
        <View style={{backgroundColor:'white'}}>
            <View style={{flexDirection:'row', flexWrap:'wrap',marginHorizontal:16, marginTop:20}}>
                <View style={{justifyContent:'space-between', flexDirection:'row', width:'100%', marginBottom:15,}}>
                    <View>
                    <View style={{width:58, height:58, elevation:10 }}>
                        <Image style={{borderRadius:5,}} resizeMode='cover' source={images.img_bayi1}/>
                    </View>
                        <Text style={{fontSize:11, textAlign:'center', marginTop:6}}>Kategori</Text>
                    </View>
                    <View>
                    <View style={{width:58, height:58, elevation:10 }}>
                        <Image style={{borderRadius:5}} resizeMode='cover' source={images.img_bayi}/>
                    </View>
                        <Text style={{fontSize:11, textAlign:'center', marginTop:6}}>Kategori</Text>
                    </View>
                    <View>
                    <View style={{width:58, height:58, elevation:10 }}>
                        <Image style={{borderRadius:5}} resizeMode='cover' source={images.img_bayi2}/>
                    </View>
                        <Text style={{fontSize:11, textAlign:'center', marginTop:6}}>Kategori</Text>
                    </View>
                    <View>
                    <View style={{width:58, height:58, elevation:10 }}>
                        <Image style={{borderRadius:5}} resizeMode='cover' source={images.img_bayi3}/>
                    </View>
                        <Text style={{fontSize:11, textAlign:'center', marginTop:6}}>Kategori</Text>
                    </View>
                    <View>
                    <View style={{width:58, height:58, elevation:10 }}>
                        <Image style={{borderRadius:5}} resizeMode='cover' source={images.img_bayi4}/>
                    </View>
                        <Text style={{fontSize:11, textAlign:'center', marginTop:6}}>Kategori</Text>
                    </View>
                </View> 
            </View>
            <View style={{flexDirection:'row', paddingTop:10,marginBottom:10, marginHorizontal:20,width:'100%'}}>
                <View style={{position:'relative', flex:1,}}>
                <TextInput placeholder="Search Data" style={{elevation:10 ,borderRadius:10,height:40,fontSize:13,backgroundColor:'white', textAlign:'center'}}/>
                <Image source={icons.ic_search} style={{position:'absolute',width:17,height:17, top:10, right:20}}/>
                </View>
                <View style={{width:35,alignItems:'center',justifyContent:'center',bottom:0}}>  
                </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({})
