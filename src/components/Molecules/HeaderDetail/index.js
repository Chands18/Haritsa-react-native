import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  ScrollView,
  Dimensions,
} from 'react-native';
import { useState } from 'react';

const {width} = Dimensions.get('window');
const height = width * 0.6;
const images = [
  'https://images.pexels.com/photos/4686960/pexels-photo-4686960.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260',
  'https://images.pexels.com/photos/6152257/pexels-photo-6152257.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
  'https://images.pexels.com/photos/6152258/pexels-photo-6152258.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260',
  'https://images.pexels.com/photos/5907862/pexels-photo-5907862.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260',
  'https://images.pexels.com/photos/6009226/pexels-photo-6009226.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260',
];

const HeaderDetail = () => {
const [active,setActive] = useState(0)

const change = ({nativeEvent}) => {
    const slide = Math.ceil(nativeEvent.contentOffset.x / nativeEvent.layoutMeasurement.width);
    if(slide !== active){
        setActive(slide);
    }
}
  return (
    <View style={styles.container}>
      <ScrollView pagingEnabled horizontal onScroll={change} showsHorizontalScrollIndicator={false} style={styles.scroll}>
        {images.map((image, index) => (
          <Image
            key={index}
            source={{
              uri: image,
            }}
            style={styles.image}
          />
        ))}
      </ScrollView>
      <View style={styles.pagination}>
          {
              images.map((i,k) => (
                  <Text key={k} style={k==active ? styles.pagingActiveText : styles.pagingText}>⬤</Text>
              ))
          }
      </View>
    </View>
  );
};

export default HeaderDetail;

const styles = StyleSheet.create({
    container: {width, height},
    scroll: {width, height},
    image: {width, height, resizeMode: 'cover'},
    pagination: {flexDirection:'row', position:'absolute', bottom:0, alignSelf:'center'},
    pagingText: {color:'#888', margin: 3},
    pagingActiveText: {color:'#fff', margin: 3}
});
