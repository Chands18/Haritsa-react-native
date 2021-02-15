import React from 'react';
import {Image} from 'react-native';
import {StyleSheet, Text, View, TextInput, TouchableOpacity} from 'react-native';
import {images} from '../../../assets';

const LoginContent = () => {
  return (
    <View style={{marginHorizontal: 20}}>
      <View style={{marginBottom:70}}>
        <Image
          source={images.img_login}
          style={{width: 162, height: 111, alignSelf: 'center', top: 28}}
        />
        <Text style={{alignSelf: 'center', top: 50, fontSize: 20}}>
          HARITSA BABY SHOP
        </Text>
      </View>
      <View>
        <Text>Phone Number</Text>
        <TextInput
          style={{
            backgroundColor: 'white',
            borderRadius: 8,
            height: 40,
            elevation: 5,
          }}
        />
      </View>
      <View>
        <Text>Password</Text>
        <TextInput
          style={{
            backgroundColor: 'white',
            borderRadius: 8,
            height: 40,
            elevation: 5,
          }}
        />
      </View>
      <View style={{marginTop: 40, flexDirection:'row', justifyContent:'space-evenly'}}>
        <TouchableOpacity onPress={() => navigation.navigate('')}>
          <Text
            style={{
              backgroundColor: 'deeppink',
              color: 'white',
              fontSize: 18,
              width: 150,
              height: 40,
              borderRadius: 8,
              textAlign: 'center',
              padding: 7,
            }}>
            Sign In
          </Text>
        </TouchableOpacity>
        <Text style={{alignSelf:'center'}}>Forgot Password</Text>
      </View>
      <Text style={{textAlign:'center',top:15}}>Doesn't have any account?Register Here</Text>
      <Text style={{textAlign:'center',top:40}}>Ver 1.0</Text>
    </View>
  );
};

export default LoginContent;

const styles = StyleSheet.create({});
