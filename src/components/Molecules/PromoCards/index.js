import { useNavigation } from '@react-navigation/native';
import React from 'react';
import {
  Dimensions,
  StyleSheet,
  Text,
  View,
  Image,
  FlatList
} from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { dummiesDiscount, icons } from '../../../assets';
import { FormatCurrency } from '../../../utils';
import Gap from '../../Atoms/Gap';


const PromoCards = () => {
  const navigation = useNavigation();
  const renderItem=(item,index) => {
    console.log (item)
    return (
      <View style={{backgroundColor:'lightgrey', width:500}}>
          <View
            style={{
              marginVertical: 4,
              width:180,
              paddingHorizontal:10,
              marginHorizontal:5,
              flexDirection:'row',
              backgroundColor:'white',
              borderRadius:10
            }}>
            <Image
              source={item.item.image}
              style={{width: '100%', height:'100%', borderRadius:10}}
            />
            <View style={{backgroundColor:'white', width:220, left:10,height:200,borderRadius:10}}>
            <View style={{marginLeft:15, marginTop:5, position:'relative'}}>
              <Text>{item.item.name}</Text>
              <Text style={{textDecorationLine:'line-through'}}>{FormatCurrency({num:item.item.price})}</Text>
              <Text style={{color:'red',left:100, bottom: 22 }}>{FormatCurrency({num:item.item.price})}</Text>
              <Text>{item.item.stock}</Text>
            </View>
            <View style={{marginTop:55, alignItems:'center'}}>
              <TouchableOpacity onPress={()=>navigation.navigate('Detail')}>
                <View style={{padding:10,width:200, backgroundColor:'deeppink', borderRadius:10, flexDirection:'row', justifyContent:'space-evenly'}}>
                  <Image
                    source={icons.ic_logo}
                    style={{
                      width: 20,
                      height: 25,
                    }}
                  />
                    <Text style={{fontWeight:'bold', color:'white',}}>Add to Cart</Text>
                </View>
                </TouchableOpacity>
                </View>
                </View>    
          </View>
          <Gap width={10} />
      </View>
    );
  }
  return (
    <View
      style={{
        flexDirection: 'column',
        flexWrap: 'wrap',
      }}>
      <FlatList numColumns={1} renderItem={renderItem} data={dummiesDiscount} keyExtractor={(item,index)=>index.toString()} /> 
    </View>
  );
};

export default PromoCards;

const styles = StyleSheet.create({});
