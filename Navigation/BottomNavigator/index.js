import * as React from 'react';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import Albums from '../../screen/albums';
import Events from '../../screen/events';
import Gallery from '../../screen/gallery';
import Home from '../../screen/Home';
import { NavigationContainer } from '@react-navigation/native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { Ionicons } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons'; 
import { MaterialIcons } from '@expo/vector-icons';
import AddGallery from '../../screen/addGallery';

const Tab=createMaterialBottomTabNavigator()

const BottomNavigator = () => {
   return (
    <NavigationContainer>
    <Tab.Navigator
    initialRouteName="Home"
  activeColor="#111"
  inactiveColor="#fff"
  barStyle={{ backgroundColor: "#ddd" }}
    >
      <Tab.Screen name="Home" component={Home}
       options={{
          tabBarIcon:  ({color})=><MaterialCommunityIcons name="home" color={color} size={20} />,
          title:""
        }} 
        />
        <Tab.Screen 
      name="gallery" 
      component={Gallery}
      options={{
          tabBarIcon:  ({color})=>(<MaterialCommunityIcons name="view-gallery" size={20} color={color} />),
          title:""
        }} 
      />
      <Tab.Screen 
      name="AddGallery" 
      component={AddGallery}
      options={{
          tabBarIcon:  ({color})=>(<AntDesign name="pluscircleo" size={20} color={color} />),
          title:""
        }} 
      />
      <Tab.Screen 
      name="Albums" 
      component={Albums}
      options={{
          tabBarIcon:  ({color})=>(<Ionicons name="albums" size={20} color={color} />),
          title:""
        }} 
      />
      <Tab.Screen 
      name="Events" 
      component={Events}
      options={{
          tabBarIcon:  ({color})=>(<MaterialIcons name="event" size={20} color={color} />),
          title:""
        }} 
      />
    </Tab.Navigator>
    </NavigationContainer>
  );
};

export default BottomNavigator;