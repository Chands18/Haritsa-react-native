import React from 'react';
import {
  Dimensions,
  StyleSheet,
  Text,
  View,
  Image,
  FlatList,
} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {dummiesCart, dummiesDiscount, icons} from '../../../assets';
import {FormatCurrency} from '../../../utils';
import Gap from '../../Atoms/Gap';

const renderItem = (item, index) => {
  console.log(item);
  return (
    <View style={{backgroundColor: 'lightgrey', width: 500}}>
      <View
        style={{
          marginVertical: 4,
          width: 180,
          paddingHorizontal: 10,
          marginHorizontal: 5,
          flexDirection: 'row',
          backgroundColor: 'white',
          borderRadius: 10,
        }}>
        <Image
          source={item.item.image}
          style={{width: '100%', height: '100%', borderRadius: 10}}
        />
        <View
          style={{
            backgroundColor: 'white',
            width: 220,
            left: 10,
            height: 200,
            borderRadius: 10,
          }}>
          <View style={{marginLeft: 15, marginTop: 5, position: 'relative'}}>
            <Text>{item.item.name}</Text>
            <Text style={{textDecorationLine: 'line-through'}}>
              {FormatCurrency({num: item.item.price})}
            </Text>
            <Text style={{color: 'red', left: 100, bottom: 22}}>
              {FormatCurrency({num: item.item.price})}
            </Text>
            <Text>{item.item.stock}</Text>
          </View>
      <View style={{marginLeft:180}}>
        <Text style={{borderWidth:2, backgroundColor:'red', borderRadius:10, width:25, textAlign:'center', fontWeight:'bold', color:'white'}}>X</Text>
      </View>
        </View>
      </View>
      <Gap width={10} />
    </View>
  );
};
const DetailCart = () => {
  return (
    <View
      style={{
        flexDirection: 'column',
        flexWrap: 'wrap',
      }}>
      <FlatList
        numColumns={1}
        renderItem={renderItem}
        data={dummiesCart}
        keyExtractor={(item, index) => index.toString()}
      />
    </View>
  );
};

export default DetailCart;

const styles = StyleSheet.create({});
