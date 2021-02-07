import React from 'react';
import {
  Dimensions,
  StyleSheet,
  Text,
  View,
  Image,
  FlatList,
} from 'react-native';
import { TextInput } from 'react-native-gesture-handler';
import Gap from '../../Atoms/Gap';

const {width} = Dimensions.get('window');
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
const renderItem = (item, index) => {
  console.log(item);
  return (
    <View>
      <View
        style={{
          width,
          paddingVertical: 5,
          flexDirection: 'row',
          backgroundColor:'honeydew',
          borderRadius:10,
          marginVertical: 6
        }}>
        <Image
          source={{
            uri:
              'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/1200px-React-icon.svg.png',
          }}
          style={{
            width: 170,
            height: 170,
            backgroundColor: 'gold',
            borderRadius: 10,
            marginLeft:10
          }}
        />
        <View>
          <Text style={{fontSize: 17, width}}>Nama Produk</Text>
          <Text style={{marginTop: 20, fontSize: 17}}>Rp 10.000</Text>
          <Text style={{color: 'black', marginLeft: 170, bottom: 20}}>1</Text>
          <Text style={{marginLeft:169, bottom:90, fontSize:20}}>-</Text>
          <Text style={{marginLeft:167, fontSize: 20}}>+</Text>
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
        marginTop: 5,
        flexDirection: 'column',
        paddingBottom:10,
        flexWrap: 'wrap',
        marginRight: 10,
      }}>
      <FlatList
        numColumns={1}
        renderItem={renderItem}
        data={data}
        keyExtractor={(item, index) => index.toString()}
        />
        <View style={{flexDirection:'row',justifyContent:'space-evenly',padding:10, }}>
          <Text>Item : ###</Text>
          <Text>Total : Rp.###</Text>
        </View>
        <View style={{backgroundColor:'white', height:200, borderRadius:10}}>
          <Text style={{fontStyle:'italic', textAlign:'right', right:10}}>No.order</Text>
          <TextInput placeholder="Nama Anda" style={{borderBottomColor:'black', borderBottomWidth:0.7, marginHorizontal:8, fontStyle:'italic'}}></TextInput>
          <TextInput placeholder="No. HP WA Anda" style={{borderBottomColor:'black', borderBottomWidth:0.7, marginHorizontal:8, fontStyle:'italic'}}></TextInput>
          <TextInput placeholder="No. Kartu Member" style={{borderBottomColor:'black', borderBottomWidth:0.7, marginHorizontal:8, fontStyle:'italic'}}></TextInput>
        </View>
        <View style={{margin:10, height:45, flexDirection:'row', borderWidth:1, borderRadius:20, backgroundColor:'cyan', justifyContent:'center', alignItems:'center',  }}>
          <Image style={{height:28, width:28}} source={require('../../../assets/Icon/logowa.png')}/>
          <Text style={{fontStyle:'italic', fontWeight:'bold'  }}>Kirim Ke WA</Text>
        </View>
    </View>
  );
};

export default DetailCart;

const styles = StyleSheet.create({});
