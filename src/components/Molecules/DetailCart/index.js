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
import {dummiesCart, dummiesDiscount, icons} from '../../../assets';
import {FormatCurrency} from '../../../utils';
import Gap from '../../Atoms/Gap';


const DetailCart = () => {
  const [items,setitems]=useState([]);
    useEffect(()=>{
        let initialdata =[];
        dummiesCart.map((item)=>{
          let objectData = {
            price:item.price,
            name:item.name,
            image:item.image,
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
              <Text>{item.item.stock}</Text>
            </View>
        <View style={{flexDirection:'row',justifyContent:'space-evenly',}}>
          <TouchableOpacity>
            <Text style={{backgroundColor:'deeppink',textAlign:'center', borderRadius:12, height:25, width:25, color:'white', fontSize:20,fontWeight:'bold'}}>-</Text>
            </TouchableOpacity>
            <Text style={{borderWidth:1, borderColor:'grey',borderRadius:5 ,width:28, textAlign:'center' }}>{item.item.pcs}</Text>
            <TouchableOpacity>
            <Text style={{backgroundColor:'deeppink',textAlign:'center', borderRadius:12, height:25, width:25, color:'white',  fontSize:20, fontWeight:'bold'}}>+</Text>
            </TouchableOpacity>
          <TouchableOpacity>
            <Text style={{backgroundColor:'red',textAlign:'center', borderRadius:8,height:25 ,width:25, fontWeight:'bold', color:'white'}}>X</Text>
          </TouchableOpacity> 
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
    <View>
      <Text style={{marginHorizontal:5}}>Delivery Address</Text>
      <Text style={{backgroundColor:'white', width:400, height:120, borderRadius:5,elevation:20,marginHorizontal:5, marginVertical:5}}></Text>
    </View>
    <View style={{marginLeft:160}}>
            <TouchableOpacity onPress={()=>navigation.navigate('Transaction')}>
              <View
                style={{
                  padding: 10,
                  elevation: 0,
                  width: 150,
                  alignSelf: 'center',
                  backgroundColor: 'deeppink',
                  borderRadius: 10,
                  flexDirection: 'row',
                  justifyContent: 'space-evenly'
                }}>
                <Image
                  source={icons.ic_cart}
                  style={{
                    width: 20,
                    height: 25,
                  }}
                />
                <Text style={{fontWeight: 'bold', color: 'white'}}>
                  Create Order
                </Text>
              </View>
            </TouchableOpacity>
          </View>
    </View>
    
  );
};

export default DetailCart;

const styles = StyleSheet.create({});
