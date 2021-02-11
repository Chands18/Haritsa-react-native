import React from 'react'
import { StyleSheet, Text, View, Image} from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler'
import { dummiesDescription, icons, images } from '../../../assets'
import { useState } from 'react'

const NewsContent = () => {
    const [data,setData] = useState(dummiesDescription)
    return (
        <View style={{marginHorizontal:7,}}>
            <View style={{backgroundColor:'white',flexDirection:'row',alignItems:'center', borderRadius:5,elevation:20,width:400,height:120, marginVertical:5}}>
                <Image style={{borderRadius:8, marginLeft:5,}} source={images.img_produk4}/>
                <Text style={{width:150,height:'90%'}}>{data.description}</Text>
                <TouchableOpacity onPress={()=>navigation.navigate('')}>
              <View
                style={{
                  height:35,
                  elevation: 0,
                  width: 100,
                  marginTop:65,
                  alignItems:'center',
                  backgroundColor: 'deeppink',
                  borderRadius: 8,
                  flexDirection: 'row',
                }}>
                <Text style={{fontWeight: 'bold', color: 'white'}}>
                  Read More...
                </Text>
              </View>
            </TouchableOpacity>
            </View>
            <View style={{backgroundColor:'white',flexDirection:'row',alignItems:'center', borderRadius:5,elevation:20,width:400,height:120, marginVertical:5}}>
                <Image style={{borderRadius:8, marginLeft:5,}} source={images.img_produk4}/>
                <Text style={{width:150,height:'90%'}}>{data.description}</Text>
                <TouchableOpacity onPress={()=>navigation.navigate('')}>
              <View
                style={{
                  height:35,
                  elevation: 0,
                  width: 100,
                  marginTop:65,
                  alignItems:'center',
                  backgroundColor: 'deeppink',
                  borderRadius: 8,
                  flexDirection: 'row',
                }}>
                <Text style={{fontWeight: 'bold', color: 'white'}}>
                  Read More...
                </Text>
              </View>
            </TouchableOpacity>
            </View>
            <View style={{backgroundColor:'white',flexDirection:'row',alignItems:'center', borderRadius:5,elevation:20,width:400,height:120, marginVertical:5}}>
                <Image style={{borderRadius:8, marginLeft:5,}} source={images.img_produk4}/>
                <Text style={{width:150,height:'90%'}}>{data.description}</Text>
                <TouchableOpacity onPress={()=>navigation.navigate('')}>
              <View
                style={{
                  height:35,
                  elevation: 0,
                  width: 100,
                  marginTop:65,
                  alignItems:'center',
                  backgroundColor: 'deeppink',
                  borderRadius: 8,
                  flexDirection: 'row',
                }}>
                <Text style={{fontWeight: 'bold', color: 'white'}}>
                  Read More...
                </Text>
              </View>
            </TouchableOpacity>
            </View>
        </View>
    )
}

export default NewsContent

const styles = StyleSheet.create({})
