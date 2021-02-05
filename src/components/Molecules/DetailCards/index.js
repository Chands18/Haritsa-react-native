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
          marginTop: 10,
          borderColor:'black',
          width:180,
          paddingHorizontal:10,
          paddingTop:10,
          marginLeft:6
          
        }}>
        <Image
          source={{
            uri:
              'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/1200px-React-icon.svg.png',
          }}
          style={{width: '100%', height: 170}}
        />
        <View style={{padding:10, backgroundColor:'lavender'}}>
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
const DetailCards = () => {
  return (
    <View
      style={{
        backgroundColor: 'white',
        marginTop: 20,
        flexDirection: 'column',
        padding: 15,
        flexWrap: 'wrap',
        marginRight: -10,
      }}>
      <Text style={{fontWeight:'bold'}}>Produk</Text>
      <FlatList numColumns={2} renderItem={renderItem} data={data} keyExtractor={(item,index)=>index.toString()} />
        
    </View>
  );
};

export default DetailCards;

const styles = StyleSheet.create({});
