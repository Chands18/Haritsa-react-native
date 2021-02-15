import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  ScrollView,
  Dimensions,
} from 'react-native';
import { useState } from 'react';
import { dummiesDescription, icons, images } from '../../../assets';
import { TouchableOpacity } from 'react-native-gesture-handler';

const {width, height} = Dimensions.get('window');

const BrosurContent = () => {
  const [data,setData] = useState(dummiesDescription)
  return (
    <View style={{marginHorizontal:7,}}>
            <View style={{backgroundColor:'white',flexDirection:'row',alignItems:'center', borderRadius:5,elevation:20,width:400,height:120, marginVertical:5}}>
                <Image style={{borderRadius:8, marginLeft:5,}} source={images.img_produk4}/>
                <Text style={{width:150,height:'90%'}}>{data.description}</Text>
                <TouchableOpacity onPress={()=>navigation.navigate('detailnews')}>
              <View
                style={{
                  height:35,
                  width: 30,
                  marginTop:65,
                  marginLeft:80,
                  alignItems:'center',
                  backgroundColor: 'deeppink',
                  borderRadius: 3,
                  flexDirection: 'row',
                }}>
                <Image style={{height:30,width:30,tintColor:'white'}} source={icons.ic_download}/>
              </View>
            </TouchableOpacity>
            </View>
            <View style={{backgroundColor:'white',flexDirection:'row',alignItems:'center', borderRadius:5,elevation:20,width:400,height:120, marginVertical:5}}>
                <Image style={{borderRadius:8, marginLeft:5,}} source={images.img_produk4}/>
                <Text style={{width:150,height:'90%'}}>{data.description}</Text>
                <TouchableOpacity onPress={()=>navigation.navigate('detailnews')}>
              <View
                style={{
                  height:35,
                  width: 30,
                  marginTop:65,
                  marginLeft:80,
                  alignItems:'center',
                  backgroundColor:'deeppink',
                  borderRadius: 3,
                  flexDirection: 'row',
                }}>
                <Image style={{height:30,width:30,tintColor:'white'}} source={icons.ic_download}/>
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
                  width: 30,
                  marginTop:65,
                  marginLeft:80,
                  alignItems:'center',
                  backgroundColor: 'deeppink',
                  borderRadius: 3,
                  flexDirection: 'row',
                }}>
                <Image style={{height:30,width:30,tintColor:'white'}} source={icons.ic_download}/>
              </View>
            </TouchableOpacity>
            </View>
        </View>
  );
};

export default BrosurContent;

const styles = StyleSheet.create({
});
