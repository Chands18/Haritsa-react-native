import React from 'react';
import {Image} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {
  Home, Katalog, Promo, DetailProduk, KeranjangBelanja, Brosur, News, DetailNews, Testnavigation, TestDetailNavigation, Transaction, DetailTransaksi, Akun, Register, Login
} from '../pages';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import { DetailTransaction } from '../components';
import {icons} from '../assets';
import {AppColors} from '../utils';
const Tab = createBottomTabNavigator();
const BottomTabNavigator = () => {
  return (
    <Tab.Navigator
    screenOptions={({route}) => ({
      tabBarIcon: ({focused, color, size}) => {
        let iconName;
        if (route.name === 'katalog') {
          iconName = icons.ic_home;
        } else if (route.name === 'transaction') {
          iconName = icons.ic_transaction;
        } else if (route.name === 'keranjang') {
          iconName = icons.ic_cart;
        } else if (route.name === 'Brosur') {
          iconName = icons.ic_brosur;
        } else if(route.name === 'akun'){
          iconName = icons.ic_akun;
        } else {
          iconName = icons.ic_profile;
        }
        return (
          <Image
            source={iconName}
            resizeMode="contain"
            style={{
              height: 25,
              width: 25,
              top:8,
              tintColor: focused
                ? AppColors.icons
                : AppColors.icons,
            }}
          />
        );
      },
    })}
    tabBarOptions={{
      activeBackgroundColor:'deeppink',
      inactiveBackgroundColor:'deeppink',
      activeTintColor: 'yellow',
      inactiveTintColor: 'white',
      labelStyle: {
        margin:5,
        fontSize: 10,
      },
    }}
      >
      <Tab.Screen
        name="katalog"
        component={Katalog}
        options={{title: 'Home'}}
      />
      <Tab.Screen
        name="transaction"
        component={Transaction}
        options={{title: 'Transaction'}}
      />
      <Tab.Screen
        name="keranjang"
        component={KeranjangBelanja}
        options={{title: 'Cart'}}
      />
      <Tab.Screen
        name="Brosur"
        component={Brosur}
        options={{title: 'Brochure'}}
      />
      <Tab.Screen
        name="akun"
        component={Akun}
        options={{title: 'Account'}}
      />
      <Tab.Screen
        name="testnavigasi"
        component={TestDetailNavigation}
        options={{title: 'Berkah'}}
      />
      
    </Tab.Navigator>
  );
};
const Stack = createStackNavigator();
export const Routes = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="login">
        
        <Stack.Screen
          name="bottomnavigator"
          component={BottomTabNavigator}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="detailnavigasi"
          component={Testnavigation}
          options={{headerShown: false}}
        />
        <Stack.Screen
        name="home"
        component={Home}
        options={{headerShown: false}}
        />
        <Stack.Screen
          name="promo"
          component={Promo}
          options={{headerShown: false}}
        />
        <Stack.Screen
        name="Detail"
        component={DetailProduk}
        options={{headerShown: false}}
        />
        <Stack.Screen
        name="Keranjang"
        component={KeranjangBelanja}
        options={{headerShown: false}}
        />
        <Stack.Screen
        name="news"
        component={News}
        options={{headerShown: false}}
        />
        <Stack.Screen
        name="detailnews"
        component={DetailNews}
        options={{headerShown: false}}
        />
        <Stack.Screen
        name="transaction"
        component={Transaction}
        options={{headerShown: false}}
        />
        <Stack.Screen
        name="detailtransaction"
        component={DetailTransaksi}
        options={{headerShown: false}}
        />
        <Stack.Screen
        name="register"
        component={Register}
        options={{headerShown: false}}
        />
        <Stack.Screen
        name="login"
        component={Login}
        options={{headerShown: false}}
        />
       
      </Stack.Navigator>
    </NavigationContainer>
  );
};