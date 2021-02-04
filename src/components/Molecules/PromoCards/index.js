import React from 'react';
import {
  Dimensions,
  StyleSheet,
  Text,
  View,
  Image,
  FlatList
} from 'react-native';
import Gap from '../../Atoms/Gap';

const data = [
  {
    id: 1,
    name: 'Nama Product',
    price: 'Rp.1000',
  },
  {
    id: 1,
    name: 'Nama Product',
    price: 'Rp.1000',
  },
  {
    id: 1,
    name: 'Nama Product',
    price: 'Rp.1000',
  },
  {
    id: 1,
    name: 'Nama Product',
    price: 'Rp.1000',
  },
  {
    id: 1,
    name: 'Nama Product',
    price: 'Rp.1000',
  },
  {
    id: 1,
    name: 'Nama Product',
    price: 'Rp.1000',
  },
  {
    id: 1,
    name: 'Nama Product',
    price: 'Rp.1000',
  },
  {
    id: 1,
    name: 'Nama Product',
    price: 'Rp.1000',
  },
];
const renderItem=(item,index) => {
  console.log (item)
  return (
    <View>
      <View
        style={{
          borderColor:'black',
          width:'100%',
          paddingHorizontal:10,
          paddingTop:10,
          marginLeft:6,
          flexDirection:'row',
          
        }}>
        <Image
          source={{
            uri:
              'https://i0.wp.com/www.lenterabisnis.com/wp-content/uploads/2018/07/atribut-produk.jpg?fit=600%2C400&ssl=1',
          }}
          style={{width:170, height: 170}}
        />
        <View style={{padding:10, backgroundColor:'lavender', width:200}}>
          <Text>Nama Produk</Text>
          <Text>Rp 1.000</Text>
          <Image
            source={require('../../../assets/Icon/logo1.png')}
            style={{
              width: 20,
              height: 25,
              position: 'absolute',
              right: 10,
              top: 20,
            }}
          />
        </View>
      </View>
      <Gap width={10} />
    </View>
  );
}
const PromoCards = () => {
  return (
    <View
      style={{
        marginTop: 10,
        flexDirection: 'column',
        padding: 0,
        flexWrap: 'wrap',
        marginRight: 10,
      }}>
      <FlatList numColumns={1} renderItem={renderItem} data={data} keyExtractor={(item,index)=>index.toString()} />
        
    </View>
  );
};

export default PromoCards;

const styles = StyleSheet.create({});
