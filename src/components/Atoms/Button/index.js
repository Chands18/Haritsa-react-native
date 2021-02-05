import React from 'react';
import {StyleSheet, Text, View, Image} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';

const Button = () => {
  return (
    <View style={styles.container}>
      <View>
        <TouchableOpacity style={styles.ButtonLeft}>
          <Text style={styles.TextLeft}>Beli Sekarang</Text>
        </TouchableOpacity>
      </View>
      <View>
        <TouchableOpacity style={styles.ButtonRight}>
          <Text style={styles.TextRight}>Keranjang</Text>
          <Image
            style={styles.image}
            source={require('./../../../assets/Icon/logo2.png')}
          />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Button;

const styles = StyleSheet.create({
  container: {flexDirection: 'row', width: 300},
  ButtonLeft: {width: 205, backgroundColor: 'coral', height: 40},
  TextLeft: {flex: 1, textAlignVertical: 'center', textAlign: 'center'},
  ButtonRight: {width: 207, backgroundColor: 'red', height: 40},
  TextRight: {color: 'white', textAlign: 'center', top: 8},
  image: {left: 150, bottom: 15, width: 19, height: 25},
});
