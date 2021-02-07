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

const {width, height} = Dimensions.get('window');
const images = [
  'https://images.pexels.com/photos/4947277/pexels-photo-4947277.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260',
  'https://images.pexels.com/photos/6404055/pexels-photo-6404055.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260',
  'https://images.pexels.com/photos/6331121/pexels-photo-6331121.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260',
  'https://images.pexels.com/photos/5859749/pexels-photo-5859749.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260',
  'https://images.pexels.com/photos/5947042/pexels-photo-5947042.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260',
];

const BrosurContent = () => {
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

export default BrosurContent;

const styles = StyleSheet.create({
    container: {width, height},
    scroll: {width, height},
    image: {width, height, resizeMode:'cover'},
    pagination: {flexDirection:'row', position:'absolute', bottom:0, alignSelf:'center'},
    pagingText: {color:'#888', margin: 3},
    pagingActiveText: {color:'#fff', margin: 3}
});
