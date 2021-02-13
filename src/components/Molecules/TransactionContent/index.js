import React from 'react'
import { StyleSheet, Text, View, TextInput, Image} from 'react-native'
import { icons } from '../../../assets'

const TransactionContent = () => {
    return (
        <View style={{flexDirection:'row', paddingTop:10,marginBottom:10, marginHorizontal:20,width:'100%'}}>
                <View style={{position:'relative', flex:1,}}>
                <TextInput placeholder="Search Data" style={{elevation:10 ,borderRadius:10,height:40,fontSize:13,backgroundColor:'white', textAlign:'center'}}/>
                <Image source={icons.ic_search} style={{position:'absolute',width:17,height:17, top:10, right:20}}/>
                </View>
                <View style={{width:35,alignItems:'center',justifyContent:'center',bottom:0}}>  
                </View>
            </View>
    )
}

export default TransactionContent

const styles = StyleSheet.create({})
