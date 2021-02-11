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
import { TouchableOpacity } from 'react-native-gesture-handler';
import { useNavigation } from '@react-navigation/native';

const {width} = Dimensions.get('window');
const height = width * 0.6;
const images = [
  'https://images.pexels.com/photos/4686960/pexels-photo-4686960.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260',
  'https://images.pexels.com/photos/6152257/pexels-photo-6152257.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
  'https://images.pexels.com/photos/6152258/pexels-photo-6152258.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260',
  'https://images.pexels.com/photos/5907862/pexels-photo-5907862.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260',
  'https://images.pexels.com/photos/6009226/pexels-photo-6009226.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260',
];

const PromoKatalog = () => {
const navigation = useNavigation();
const [active,setActive] = useState(0)

const change = ({nativeEvent}) => {
    const slide = Math.ceil(nativeEvent.contentOffset.x / nativeEvent.layoutMeasurement.width);
    if(slide !== active){
        setActive(slide);
    }
}
  return (
    <View style={{backgroundColor:'white'}}>
      <View style={styles.container}>
        <ScrollView pagingEnabled horizontal onScroll={change} showsHorizontalScrollIndicator={false} style={styles.scroll}>
          {images.map((image, index) => (
            <TouchableOpacity onPress={()=>navigation.navigate('promo')}>
            <Image
              key={index}
              source={{
                uri: image,
              }}
              
              style={styles.image}
            />
            </TouchableOpacity>
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
    </View>
  );
};

export default PromoKatalog;

const styles = StyleSheet.create({
    container: {width:100, height:130,},
    scroll: {width, height},
    image: {width, height, resizeMode: 'cover', borderRadius:0},
    pagination: {flexDirection:'row', position:'absolute', bottom:0, alignSelf:'center'},
    pagingText: {color:'#888', margin: 3},
    pagingActiveText: {color:'#fff', margin: 3}
});
