import React, {useEffect} from 'react';
import {
  StyleSheet,
  View,
  ScrollView,
  Text,
  TouchableOpacity,
  TextInput,
  Image,
} from 'react-native';
import {CardCart, GlobalHeader} from '../../components/Molecules';
import {view} from '@risingstack/react-easy-state';
import * as store from './store';
import {ContainerStyle, FormatCurrency, TextStyle} from '../../utils';
import {LoadingIndicator} from '../../components';
import {icons} from '../../assets';
// const KeranjangBelanja = () => {
//     return (
//         <ScrollView>
//             <View style={styles.container}>
//                 <HeaderKeranjang/>
//                 <DetailCart/>
//             </View>
//         </ScrollView>
//     )
// }
// export default KeranjangBelanja
export default view(({navigation}) => {
  useEffect(() => {
    store.initialized();
    return () => {
      store.cleanUp();
    };
  }, [store]);
  return (
    <View style={styles.container}>
      <GlobalHeader title="Shopping cart" />
      {store.state.isLoading ? (
        <LoadingIndicator />
      ) : store.state.listCart.length > 0 ? (
        <ScrollView style={ContainerStyle.scrollview}>
          {store.state.listCart.map((item) => (
            <CardCart
              key={item.id}
              image={item.image}
              price={item.price}
              discount_price={item.discount_price}
              name={item.name}
              stock={item.stock}
              pcs={item.pcs}
              onMinus={() => store.minItems(item.id)}
              onPlus={() => store.addItems(item.id)}
              onDiscard={() => store.removeItem(item.id)}
            />
          ))}
          <View style={styles.containerItems}>
            <Text style={styles.textItems}>
              {'Items : ' + store.state.items}
            </Text>
            <Text style={styles.textItems}>
              {'Total : ' + FormatCurrency({num: store.state.total})}
            </Text>
          </View>
          <View>
            <Text style={styles.textDelivery}>Delivery Address</Text>
            <TextInput
              numberOfLines={5}
              placeholder="Input address..."
              style={styles.textInput}
            />
          </View>
          <View style={styles.containerButton}>
            <TouchableOpacity
              style={styles.buttonOrder}
              onPress={() => navigation.navigate('transaction')}>
              <Image
                source={icons.ic_cart}
                style={{
                  width: 20,
                  height: 25,
                }}
              />
              <Text style={{fontWeight: 'bold', color: 'white'}}>
                Create Order
              </Text>
            </TouchableOpacity>
            <Text></Text>
          </View>
        </ScrollView>
      ) : (
        <Text
          style={{flex: 1, textAlignVertical: 'center', textAlign: 'center'}}>
          Keranjang Belanja Kosong!
        </Text>
      )}
    </View>
  );
});

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    width: '100%',
    height: '100%',
  },
  containerItems: {
    marginVertical: 5,
    padding: 10,
    marginHorizontal: 5,
    backgroundColor: 'white',
    alignItems: 'center',
    borderRadius: 5,
    width: '98%',
    elevation: 5,
    height: 50,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  containerButton: {
    width: '100%',
    alignItems: 'flex-end',
    justifyContent: 'center',
    marginVertical: 20,
  },
  buttonOrder: {
    padding: 10,
    elevation: 0,
    width: 150,
    backgroundColor: 'deeppink',
    borderRadius: 10,
    flexDirection: 'row',
    justifyContent: 'space-evenly',
  },
  textItems: {
    ...TextStyle.contentDark,
    width: '50%',
    textAlign: 'left',
    textAlignVertical: 'center',
  },
  textDelivery: {
    ...TextStyle.contentDark,
    width: '50%',
    textAlign: 'left',
    margin: 5,
    textAlignVertical: 'center',
  },
  textInput: {
    backgroundColor: 'white',
    width: '98%',
    borderRadius: 5,
    elevation: 10,
    marginHorizontal: 5,
    marginVertical: 5,
    textAlignVertical: 'top',
  },
});
