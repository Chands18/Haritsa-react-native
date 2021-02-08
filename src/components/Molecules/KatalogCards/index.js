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
          source={require('../../../assets/images/produk-131.png')}
          style={{width: '100%', height: 170, borderWidth:1, borderColor:'pink'}}
        />
        <View style={{padding:10, backgroundColor:'white'}}>
          <Text>Nama Produk</Text>
          <Text>Rp 1.000</Text>
        </View>
        <View style={{padding:10, backgroundColor:'deeppink', borderRadius:6, flexDirection:'row', justifyContent:'space-evenly'}}>
          <Image
            source={require('../../../assets/Icon/hrtsicon.png')}
            style={{
              width: 20,
              height: 25,
            }}
          />
            <Text style={{fontWeight:'bold', color:'white',}}>Add to Cart</Text>
        </View>
      </View>
      <Gap width={10} />
    </View>
  );
}
const KatalogCards = () => {
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
      <Text style={{fontWeight:'bold'}}>Products</Text>
      <FlatList numColumns={2} renderItem={renderItem} data={data} keyExtractor={(item,index)=>index.toString()} />
        
    </View>
  );
};

export default KatalogCards;

const styles = StyleSheet.create({});
