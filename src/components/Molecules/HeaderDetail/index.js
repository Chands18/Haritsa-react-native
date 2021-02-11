import { useNavigation } from '@react-navigation/native'
import React from 'react'
import { StyleSheet, Text, View, Image } from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler'
import { icons } from '../../../assets'

const HeaderDetail = () => {
    const navigation = useNavigation();
    return (
        <View style={{backgroundColor:'deeppink',height:60, flexDirection:'row', justifyContent:'flex-start', alignItems:'center', width:'100%'}}>
            <Image source={require('../../../assets/Icon/Vector.png')}/>
            <Text style={{fontSize:18,fontWeight:'bold', textAlign:'center',left:20, color:'white' }}>Promina Puff Snack bayi</Text>
            <TouchableOpacity onPress={()=>navigation.navigate('Keranjang')}> 
            <Image style={{marginLeft:135}} source={icons.ic_cart}/>
            </TouchableOpacity>
        </View>
    )
}

export default HeaderDetail

const styles = StyleSheet.create({})

