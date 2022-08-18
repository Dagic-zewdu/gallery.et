import * as React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Albums from '../../../screen/albums';
import Events from '../../../screen/events';
import Gallery from '../../../screen/gallery';
import Home from '../../../screen/Home';
import { NavigationContainer } from '@react-navigation/native';
import Header from '..';

const Tab = createBottomTabNavigator();
const BottomNavigator = () => {
   return (
    <NavigationContainer>
    <Tab.Navigator>
      <Tab.Screen name="Home" component={Home}  options={{
          header: props=><Header {...props} />
        }} />
      <Tab.Screen name="Gallery" component={Gallery} />
      <Tab.Screen name="Albums" component={Albums} />
      <Tab.Screen name="Events" component={Events} />
    </Tab.Navigator>
    </NavigationContainer>
  );
};

export default BottomNavigator;