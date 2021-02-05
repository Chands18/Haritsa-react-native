import React from 'react'
import { StyleSheet, Text, View, Image} from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler'

const Button = () => {
    return (
        <View style={{flexDirection:'row', width:300}}>
            <View>
            <TouchableOpacity style={{width:205, backgroundColor:'coral', height:40,}}>
            <Text style={{flex:1, textAlignVertical:'center', textAlign:'center'}}>Beli Sekarang</Text>
            </TouchableOpacity>
            </View>
            <View>
            <TouchableOpacity style={{width:207 , backgroundColor:'red', height: 40}}>
                <Text style={{color:'white', textAlign:'center', top:8}}>Keranjang</Text>
                <Image style={{left:150, bottom:15}} source={require('./../../../assets/Icon/logo2.png')}/>
            </TouchableOpacity>
            </View>
        </View>
    )
}

export default Button

const styles = StyleSheet.create({})
