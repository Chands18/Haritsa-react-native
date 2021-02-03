import React from 'react';
import {Dimensions, StyleSheet, Text, View, Image} from 'react-native';
import Gap from '../../Atoms/Gap';

const data = [
  {
    id: 1,
    name: 'Product',
    price: 'Rp.1000'
  },
  {
    id: 1,
    name: 'Product',

  },
  {
    id: 1,
    name: 'Product',

  },
  {
    id: 1,
    name: 'Product',

  },
  {
    id: 1,
    name: 'Product',
    price: 'Rp.1000'
  },
  {
    id: 1,
    name: 'Product',

  },
  {
    id: 1,
    name: 'Product',

  },
  {
    id: 1,
    name: 'Product',

  },
];
const KatalogCards = () => {
  return (
    <View style={{flexDirection: 'row', padding: 15, flexWrap: 'wrap', alignItems:'center', justifyContent:'center', marginRight: -10}}>
        {data.map((item, index) => {
            return (
                <>
                        <View style={{ marginTop:10,backgroundColor:'yellow',width:Dimensions.get('window').width/2 - 30, paddingVertical: 10}}>
                            <Image source={{uri: "https://i0.wp.com/www.lenterabisnis.com/wp-content/uploads/2018/07/atribut-produk.jpg?fit=600%2C400&ssl=1"}} style={{width:'100%', height: 170}} />
                            <View style={{padding:10,}}>
                            <Text>{item.name}</Text>
                            <Text>{item.price}</Text>
                            <Image source={require('../../../assets/Icon/logo1.png')} style={{width:20, height: 25, position:'absolute', right:10, top:20}} />
                            </View>
                        </View>
                        <Gap width={10}/>
                        
                        </>
            )
        })}

    </View>
  );
};

export default KatalogCards;

const styles = StyleSheet.create({});
