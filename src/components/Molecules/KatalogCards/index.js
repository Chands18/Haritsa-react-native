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
import { dummiesProduct, icons } from '../../../assets';
import { FormatCurrency } from '../../../utils';
import Gap from '../../Atoms/Gap';


const renderItem=(item,index) => {
  console.log (item)
  return (
    <View>
        <View
          style={{
            marginVertical:5,
            width:180,
            paddingHorizontal:10,
            paddingTop:10,
            marginLeft:6,
            borderWidth:1,
            borderRadius:10,
            borderColor:'lightgrey',
          }}>
          <Image
            source={item.item.image}
            style={{width: '100%', height: 170,}}
          />
          <View style={{padding:10, backgroundColor:'white'}}>
            <Text>{item.item.name}</Text>
            <Text>{FormatCurrency({num:item.item.price})}</Text>
          </View>
          <View>
            <TouchableOpacity>
              <View style={{padding:10, elevation:0, width:150, alignSelf:'center',backgroundColor:'deeppink', borderRadius:10, flexDirection:'row', justifyContent:'space-evenly'}}>
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
        <Gap width={10} />
    </View>
  );
}
const KatalogCards = () => {
  return (
    <View
      style={{
        backgroundColor: 'white',
        marginVertical: 10,
        flexDirection: 'column',
        padding: 15,
        flexWrap: 'wrap',
        borderRadius:10,
        elevation:10

      }}>
      <Text style={{fontWeight:'bold'}}>Products</Text>
      <FlatList numColumns={2} renderItem={renderItem} data={dummiesProduct} keyExtractor={(item,index)=>index.toString()} />
        
    </View>
  );
};

export default KatalogCards;

const styles = StyleSheet.create({});
