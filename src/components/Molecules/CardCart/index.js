import React from 'react';
import {StyleSheet, Text, View, Image} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {AppColors, FormatCurrency, TextStyle} from '../../../utils';
import Gap from '../../Atoms/Gap';

export const CardCart = ({
  image = null,
  price = 0,
  discount_price = 0,
  name = '',
  pcs = '',
  stock = 0,
  onDiscard = null,
  onPlus = null,
  onMinus = null,
}) => {
  return (
    <View style={styles.container}>
      <Image source={image} style={styles.image} resizeMode="cover" />
      <View style={styles.containerDetail}>
        <Text style={styles.textName}>{name}</Text>
        <View style={styles.containerPrice}>
          <Text style={styles.textDiscountPrice}>
            {FormatCurrency({num: price})}
          </Text>
          <Text style={styles.textPrice}>
            {FormatCurrency({num: discount_price})}
          </Text>
        </View>
        <Text style={styles.textName}>{'Stock : ' + stock}</Text>
        <View style={styles.containerAction}>
          <TouchableOpacity style={styles.buttonAction} onPress={onMinus}>
            <Text style={styles.textButton}>-</Text>
          </TouchableOpacity>
          <Text style={styles.textPcs}>{pcs}</Text>
          <TouchableOpacity style={styles.buttonAction} onPress={onPlus}>
            <Text style={styles.textButton}>+</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[styles.buttonAction, {borderRadius: 8}]}
            onPress={onDiscard}>
            <Text style={styles.textButton}>x</Text>
          </TouchableOpacity>
        </View>
      </View>
      <Gap width={10} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '100%',
    flexDirection: 'row',
    marginVertical: 10,
    borderWidth: 0.3,
    borderColor: AppColors.text.primary.dark,
    borderRadius: 8,
    height: 200,
    alignItems: 'center',
    padding: 10,
  },

  containerDetail: {
    backgroundColor: 'white',
    marginLeft: 5,
    height: '100%',
    flex: 1,
  },
  containerPrice: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '100%',
  },
  containerAction: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    marginTop: 30,
  },
  image: {width: '40%', height: '90%', borderRadius: 10},
  buttonAction: {
    backgroundColor: AppColors.soft,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 15,
    height: 30,
    width: 30,
  },
  textButton: {
    ...TextStyle.contentLight,
    fontSize: 20,
    margin: 'auto',
  },
  textName: {
    ...TextStyle.contentDark,
  },
  textPcs: {
    ...TextStyle.contentDark,
    borderWidth: 1,
    borderColor: 'grey',
    borderRadius: 5,
    width: 28,
    textAlign: 'center',
    textAlignVertical: 'center',
  },
  textDiscountPrice: {
    ...TextStyle.contentDark,
    textDecorationLine: 'line-through',
  },
  textPrice: {
    ...TextStyle.contentDark,
    color: 'red',
  },
});
