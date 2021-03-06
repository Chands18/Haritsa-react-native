import { useNavigation } from '@react-navigation/native';
import React from 'react'
import { StyleSheet, Text, View, FlatList, Image} from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler';
import { NewsCard } from '..' ;
import { dummiesBerkah, dummiesProduk } from '../../../assets';

const dummies = [
    {
        id:1,
        text:'Warung Berkah'
    },
    {
        id:2,
        text:'Donasi'
    },
    {
        id:3,
        text:'Rumah Tahfidz'
    },
]

export default function Footer() {
    const navigation = useNavigation();
        const renderItem=({item,index})=>{
            return(
                <View style={{width:108, marginRight:10,alignItems:'center'}}>
                <NewsCard>
                    <TouchableOpacity onPress={()=>navigation.navigate('news')}> 
                        <Image resizeMode='cover' style={{flex:1, borderRadius:10}} source={item}/>
                    </TouchableOpacity>
                </NewsCard>
                </View>
            )
        }
            return (
                <View style={styles.container}> 
                    <Text style={styles.text}>Berkah</Text>
                    <View style={{marginTop:10, justifyContent:'center',alignItems:'center' ,width:'100%'}}>
                    <FlatList data={dummiesBerkah} numColumns={3} style={{height:200}} renderItem={renderItem} keyExtractor={(_item,index)=>index.toString()} />
                </View>
                </View>
            )
}

const styles = StyleSheet.create({
    container: {
        marginTop:20,
        paddingHorizontal:10,
        width: '100%',
        height: 200,
        margin: 15,
        backgroundColor: 'white',
        borderRadius:10,
        elevation:10
    },
    text: {
        width: '100%',
        textAlign: 'left',
        fontWeight:'bold'
    }
})

