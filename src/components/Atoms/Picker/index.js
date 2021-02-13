import React,{useState} from 'react'
import { StyleSheet, Text, View, TouchableOpacity} from 'react-native'
import DropDownPicker from 'react-native-dropdown-picker';

state = {
    language: 'java',
  };
const items =[
    {label: 'Pematang Siantar', value: 'PMS'},
    {label: 'France', value: 'france'},
]
export const Pickers = ({navigation}) => {
    const [selectedValue, setSelectedValue] = useState("java");
  return (
    <View style={styles.container}>
      <DropDownPicker
            items={items}
            defaultValue={items[0].value}
            containerStyle={{flex:1,height:'100%',}}
            style={{backgroundColor: 'lightgrey',elevation:5}}
            itemStyle={{
                justifyContent: 'flex-start'
            }}
            dropDownStyle={{backgroundColor: '#fafafa'}}
            onChangeItem={item => setSelectedValue(item.value)}/>

        <TouchableOpacity
        onPress={()=>navigation.navigate('bottomnavigator')}
            style={{height:'100%',width:'15%',backgroundColor:'lightgrey',elevation:5, borderRadius:5}}>
                <Text style={{textAlign:'center',textAlignVertical:'center' ,height:'100%', color:'dimgrey', fontWeight:'bold',fontSize:20}}>Go</Text>
        </TouchableOpacity>    
    </View>
  );
}


const styles = StyleSheet.create({
    container: {
        height:80,
        width:'70%',
        flexDirection:'row',
        paddingTop: 35,
        justifyContent: 'center',
        elevation:10,
        alignItems: 'center'}
    })


