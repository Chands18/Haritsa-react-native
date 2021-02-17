import React ,{useState} from 'react'
import { StyleSheet, Text, View, Image } from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler';
import { dummiesDescription, icons } from '../../../assets';

const Deskripsiproduk = () => {
    const [data,setData] = useState(dummiesDescription)
        
    return (
        <View style={{backgroundColor:'white', height:300,marginBottom:10,marginHorizontal:2,borderRadius:10,elevation:10}}>
            <View style={{flexDirection:'row', justifyContent:'space-between',marginTop:10,marginHorizontal:5}}>
            <Text>{dummiesDescription.name}</Text>
            <Text>{dummiesDescription.price}</Text>
            </View>
            <Text style={{marginTop:10,marginHorizontal:5}}>{dummiesDescription.description}</Text>
            <View style={{flexDirection:'column',top:150,marginHorizontal:5}}>
            <Text>{dummiesDescription.stock}</Text>
            <Text>{dummiesDescription.sold}</Text>
            </View>
            <View style={{justifyContent:'flex-end',flexDirection:'row',top:105,marginHorizontal:5}}>
            <TouchableOpacity onPress={()=>navigation.navigate('')}>
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
    )
}

export default Deskripsiproduk

const styles = StyleSheet.create({})
