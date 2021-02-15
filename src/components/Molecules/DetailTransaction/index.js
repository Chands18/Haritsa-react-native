import { useNavigation } from '@react-navigation/native';
import React, {useState, useEffect} from 'react';
import {
  Dimensions,
  StyleSheet,
  Text,
  View,
  Image,
  FlatList,
} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {dummiesCart, dummiesTransaction, icons} from '../../../assets';
import {FormatCurrency} from '../../../utils';
import Gap from '../../Atoms/Gap';


const DetailTransaction = () => {
  const navigation = useNavigation();
  const [items,setitems]=useState([]);
    useEffect(()=>{
        let initialdata =[];
        dummiesTransaction.map((item)=>{
          let objectData = {
            price:item.price,
            name:item.name,
            image:item.image,
            amount:item.amount,
            pcs:0
          }
          initialdata.push(objectData)
        });
        setitems(initialdata);
    },[]) 
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
              <Text>{item.item.amount}</Text>
            </View>
          </View>
        </View>
        <Gap width={10} />
      </View>
    );
  };
  return (
    <View
      style={{
        flexDirection: 'column',
        flexWrap: 'wrap',
        backgroundColor:'lightgrey',
        marginBottom:80
      }}>
      <FlatList
        numColumns={1}
        renderItem={renderItem}
        data={items}
        initialdata={items.pcs}
        keyExtractor={(item, index) => index.toString()}
      />
      <View style={{marginVertical:5,marginHorizontal:5,backgroundColor:'white',alignItems:'center' ,borderRadius:5, width:400, elevation:20, height:50, flexDirection:'row', justifyContent:'space-between'}}>
          <Text style={{marginLeft:5}}>Items:</Text>
          <Text style={{right:140}}>Total:</Text>
    </View>
    </View>
    
  );
};

export default DetailTransaction;

const styles = StyleSheet.create({});
