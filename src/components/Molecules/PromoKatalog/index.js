import React from 'react';
import {StyleSheet, Text, View, FlatList, Dimensions} from 'react-native';
import {DiscountCard} from '..';

const {width, height} = Dimensions.get('window');
const dummies = [
  {
    id: 1,
    text: '',
  },
  {
    id: 2,
    text: '',
  },
  {
    id: 3,
    text: '',
  },
  {
    id: 4,
    text: '',
  },
];

export default function PromoKatalog() {
  const renderItem = ({item, index}) => {
    return (
      <View style={{width: 100, marginRight: 10, alignItems: 'center'}}>
        <DiscountCard>
          <Text>{item.text}</Text>
        </DiscountCard>
      </View>
    );
  };

  const renderItem2 = ({item, index}) => {
    return (
      <View
        style={{
          backgroundColor: 'white',
          borderWidth:1,
          borderColor:'red',
          height: '95%',
          width: width - 30,
          margin: 5,
          borderRadius: 10,
          elevation:5
        }}></View>
    );
  };
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Promo This Month</Text>
      <View
        style={{
          marginTop: 10,
          justifyContent: 'center',
          alignItems: 'center',
          width: '100%',
        }}></View>
      <View>
        <FlatList
          scrollEnabled={true}
          data={dummies}
          horizontal
          style={{marginTop: 10, height: 100, width: '100%'}}
          renderItem={renderItem2}
          keyExtractor={(item, index) => index.toString()}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingVertical: 10,
    paddingHorizontal: 10,
    width: '100%',
    backgroundColor: 'white',
  },
  text: {
    width: '100%',
    textAlign: 'left',
    fontWeight: 'bold',
  },
});
