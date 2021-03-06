import { useNavigation } from '@react-navigation/native';
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
import {dummiesProduct, icons} from '../../../assets';
import {FormatCurrency} from '../../../utils';
import Gap from '../../Atoms/Gap';

const DetailCards = () => {
  const navigation = useNavigation();
  const renderItem = (item, index) => {
    console.log(item);
    return (
      <View>
        <View
          style={{
            marginTop: 10,
            width: 180,
            paddingHorizontal: 10,
            paddingTop: 10,
            marginLeft: 6,
            borderWidth: 1,
            borderRadius: 10,
            borderColor: 'lightgrey',
          }}>
          <Image source={item.item.image} style={{width: '100%', height: 170}} />
          <View style={{padding: 10, backgroundColor: 'white'}}>
            <Text>{item.item.name}</Text>
            <Text>{FormatCurrency({num: item.item.price})}</Text>
          </View>
          <View>
            <TouchableOpacity onPress={()=>navigation.navigate('Keranjang')}>
              <View
                style={{
                  padding: 10,
                  elevation: 0,
                  width: 150,
                  alignSelf: 'center',
                  backgroundColor: 'deeppink',
                  borderRadius: 10,
                  flexDirection: 'row',
                  justifyContent: 'space-evenly',
                }}>
                <Image
                  source={icons.ic_logo}
                  style={{
                    width: 20,
                    height: 25,
                  }}
                />
                <Text style={{fontWeight: 'bold', color: 'white'}}>
                  Add to Cart
                </Text>
              </View>
            </TouchableOpacity>
          </View>
        </View>
        <Gap width={10} />
      </View>
    );
  };
  return (
    <View
      style={{
        backgroundColor: 'white',
        marginTop: 10,
        flexDirection: 'column',
        padding: 15,
        flexWrap: 'wrap',
      }}>
      <Text style={{fontWeight: 'bold'}}>Related Products</Text>
      <FlatList
        numColumns={2}
        renderItem={renderItem}
        data={dummiesProduct}
        keyExtractor={(item, index) => index.toString()}
      />
    </View>
  );
};

export default DetailCards;

const styles = StyleSheet.create({});
