import {useNavigation} from '@react-navigation/native';
import React from 'react';
import {TouchableOpacity} from 'react-native';
import {TextInput} from 'react-native';
import {StyleSheet, Text, View} from 'react-native';
import DatePicker from 'react-native-datepicker';

const AkunContent = () => {
  const navigation = useNavigation();
  return (
    <View style={{marginHorizontal: 10}}>
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
      <View style={{marginTop: 20}}>
        <TouchableOpacity onPress={() => navigation.navigate('register')}>
          <Text
            style={{
              backgroundColor: 'deeppink',
              color: 'white',
              fontSize: 18,
              width: 150,
              height: 40,
              borderRadius: 8,
              alignSelf: 'flex-end',
              textAlign: 'center',
              padding: 7,
            }}>
            Save
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default AkunContent;

const styles = StyleSheet.create({});
