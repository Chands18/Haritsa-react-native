import React from 'react';
import {StyleSheet, Text, View, Image, TextInput, TouchableOpacity} from 'react-native';
import {images} from '../../../assets';
import DatePicker from 'react-native-datepicker';

const RegisterContent = () => {
  return (
    <View style={{marginHorizontal:10}}>
      <View style={{marginBottom:70}}>
        <Image
          source={images.img_regis}
          style={{width: 162, height: 111, alignSelf: 'center', top: 28}}
        />
        <Text style={{alignSelf: 'center', top: 50, fontSize: 20}}>
          Register New Customer
        </Text>
      </View>
      <View>
        <Text>First Name</Text>
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
        <Text>Last Name</Text>
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
        <Text>Gender</Text>
        <View style={{flexDirection: 'row', alignItems: 'center', margin: 8}}>
          <Text
            style={{
              backgroundColor: 'red',
              borderRadius: 8,
              height: 15,
              width: 15,
            }}></Text>
          <Text>Male</Text>
          <Text
            style={{
              backgroundColor: 'grey',
              borderRadius: 8,
              height: 15,
              width: 15,
              marginLeft: 15,
            }}></Text>
          <Text>Female</Text>
        </View>
      </View>
      <View>
        <Text>Date Birth</Text>
        <DatePicker style={{width: 400}} format="YYYY-MM-DD" mode="date" />
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
        <Text>Email Address</Text>
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
      <View>
        <Text>Password Confirmation</Text>
        <TextInput
          style={{
            backgroundColor: 'white',
            borderRadius: 8,
            height: 40,
            elevation: 5,
          }}
        />
      </View>
      <View style={{marginTop: 20}}>
        <TouchableOpacity onPress={() => navigation.navigate('login')}>
          <Text
            style={{
              backgroundColor: 'deeppink',
              color: 'white',
              fontSize: 18,
              width: '100%',
              height: 40,
              borderRadius: 8,
              alignSelf: 'flex-end',
              textAlign: 'center',
              padding: 7,
            }}>
            Sign Up
          </Text>
        </TouchableOpacity>
      </View>
      <Text style={{textAlign:'center'}}>Already have an account?Click here</Text>
    </View>
  );
};

export default RegisterContent;

const styles = StyleSheet.create({});
