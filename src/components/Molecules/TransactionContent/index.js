import React from 'react'
import { StyleSheet, Text, View, TextInput, Image} from 'react-native'
import { icons } from '../../../assets'

const TransactionContent = () => {
    return (
        <View>
            <View style={{flexDirection:'row', paddingTop:10,marginBottom:10, marginHorizontal:20,width:'100%'}}>
                    <View style={{position:'relative', flex:1,}}>
                    <TextInput placeholder="Search Data" style={{elevation:10 ,borderRadius:10,height:40,fontSize:13,backgroundColor:'white', textAlign:'center'}}/>
                    <Image source={icons.ic_search} style={{position:'absolute',width:17,height:17, top:10, right:20, backgroundColor:'black'}}/>
                    </View>
                    <View style={{width:35,alignItems:'center',justifyContent:'center'}}>  
                    </View>
            </View>
            <View>
                <View style={{backgroundColor:'white', width:390, height:150, borderRadius:5,elevation:20,marginHorizontal:10,marginBottom:10}}>
                    <Text>INV-210130-0001</Text>
                    <Text style={{left:270,bottom:22}}>30 January 2021</Text>
                    <View style={{alignItems:'center',}}>
                    <Image style={{width:350,marginBottom:10,bottom:15}} source={icons.ic_line}/>
                    <Text style={{bottom:10}}>Transaksi di Toko Serba Ada dengan total pembelian sebesar Rp 10.000.000,00</Text>
                    <Text style={{backgroundColor:'deeppink',color:'white' ,borderRadius:10,width:100,textAlign:'center',top:30,left:130}}>Details...</Text>
                    </View>
                </View>
                <View style={{backgroundColor:'white', width:390, height:150, borderRadius:5,elevation:20,marginHorizontal:10,marginBottom:10}}>
                    <Text>INV-210130-0001</Text>
                    <Text style={{left:270,bottom:22}}>30 January 2021</Text>
                    <View style={{alignItems:'center',}}>
                    <Image style={{width:350,marginBottom:10,bottom:15}} source={icons.ic_line}/>
                    <Text style={{bottom:10}}>Transaksi di Toko Serba Ada dengan total pembelian sebesar Rp 10.000.000,00</Text>
                    <Text style={{backgroundColor:'deeppink',color:'white' ,borderRadius:10,width:100,textAlign:'center',top:30,left:130}}>Details...</Text>
                    </View>
                </View>
                <View style={{backgroundColor:'white', width:390, height:150, borderRadius:5,elevation:20,marginHorizontal:10,marginBottom:10}}>
                    <Text>INV-210130-0001</Text>
                    <Text style={{left:270,bottom:22}}>30 January 2021</Text>
                    <View style={{alignItems:'center',}}>
                    <Image style={{width:350,marginBottom:10,bottom:15}} source={icons.ic_line}/>
                    <Text style={{bottom:10}}>Transaksi di Toko Serba Ada dengan total pembelian sebesar Rp 10.000.000,00</Text>
                    <Text style={{backgroundColor:'deeppink',color:'white' ,borderRadius:10,width:100,textAlign:'center',top:30,left:130}}>Details...</Text>
                    </View>
                </View>
            </View>
        </View>
    )
}

export default TransactionContent

const styles = StyleSheet.create({})
