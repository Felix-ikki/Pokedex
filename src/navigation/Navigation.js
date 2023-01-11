import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { Image } from 'react-native';
import FavoriteNavigation from './FavoriteNavigation'
import AccountNavigation from './AccountNavigation';
import PokedexNavigation from './PokedexNavigation'

const Tab = createBottomTabNavigator();


function Navigation() {
  return (
    <Tab.Navigator initialRouteName='Pokedex'>
        <Tab.Screen
        name="Account" 
        component={AccountNavigation}
        options={{
            tapBarLabel: 'Account',
            tabBarIcon: ({color, size}) => (
                <MaterialCommunityIcons name="account" color={color} size={size} />),
        }}/>
        <Tab.Screen 
        name="Pokedex"
        component={PokedexNavigation}
        options={{
            tapBarLabel: '',
            tabBarIcon: () => renderPokeball(),
            headerShown: false
        }} />
        <Tab.Screen 
        name="Favorites" 
        component={FavoriteNavigation} 
        options={{
            tapBarLabel: 'Favorites',
            headerShown: false,
            tabBarIcon: ({color, size}) => (
                <MaterialCommunityIcons name="heart" color={color} size={size} />),
        }}/>

    </Tab.Navigator>  )
}


const renderPokeball = () => {
  return (
    <Image 
    source={require('../assets/pokeball.png')}
    style={{width: 75, height: 75, top: -15}}/>
  )
}

export default Navigation