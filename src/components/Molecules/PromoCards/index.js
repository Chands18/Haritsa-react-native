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
          width:'100%',
          paddingHorizontal:15,
          paddingVertical:10,
          marginLeft:6,
          flexDirection:'row',
          
        }}>
        <Image
          source={{
            uri:
              'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/1200px-React-icon.svg.png',
          }}
          style={{width:170, height: 170, backgroundColor:'beige'}}
        />
        <View style={{padding:10, backgroundColor:'lavender', width:200}}>
          <Text>Nama Produk</Text>
          <Text style={{marginTop:20}}>Rp 1.000</Text>
          <Text style={{color:'red',left:150,bottom:21}}>50%</Text>
          <Text style={{marginTop:40}}>20 Tersisa</Text>
          <Image
            source={require('../../../assets/Icon/logo1.png')}
            style={{
              width: 20,
              height: 25,
              position: 'absolute',
              right: 10,
              top: 110,
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
