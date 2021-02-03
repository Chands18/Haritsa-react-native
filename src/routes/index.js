import React from 'react';
import {Image} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {
  Home, Katalog, Promo
} from '../pages';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
// import {icons} from '../assets';
// import {AppColors, AppFonts} from '../utils';
const Tab = createBottomTabNavigator();
const BottomTabNavigator = () => {
  return (
    <Tab.Navigator
    //   screenOptions={({route}) => ({
    //     tabBarIcon: ({focused, color, size}) => {
    //       let iconName;
    //       if (route.name === 'home') {
    //         iconName = icons.ic_home;
    //       } else if (route.name === 'brands') {
    //         iconName = icons.ic_spoon;
    //       } else if (route.name === 'challenges') {
    //         iconName = icons.ic_list;
    //       } else if (route.name === 'rewards') {
    //         iconName = icons.ic_gift;
    //       } else {
    //         iconName = icons.ic_profile;
    //       }
    //       return (
    //         <Image
    //           source={iconName}
    //           resizeMode="contain"
    //           style={{
    //             height: 20,
    //             width: 20,
    //             tintColor: focused
    //               ? AppColors.icon.active
    //               : AppColors.icon.inactive,
    //           }}
    //         />
    //       );
    //     },
    //   })}
    //   tabBarOptions={{
    //     activeTintColor: AppColors.icon.active,
    //     inactiveTintColor: AppColors.icon.inactive,
    //     labelStyle: {
    //       fontFamily: AppFonts.primary[200],
    //       fontSize: 10,
    //     },
    //   }}
      >

      <Tab.Screen
        name="home"
        component={Home}
        options={{title: 'Home'}}
      />
      <Tab.Screen
        name="katalog"
        component={Katalog}
        options={{title: 'Katalog'}}
      />
      <Tab.Screen
        name="promo"
        component={Promo}
        options={{title: 'Promo'}}
      />


    </Tab.Navigator>
  );
};
const Stack = createStackNavigator();
export const Routes = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="bottomnavigator">
        
        <Stack.Screen
          name="bottomnavigator"
          component={BottomTabNavigator}
          options={{headerShown: false}}
        />
       
      </Stack.Navigator>
    </NavigationContainer>
  );
};