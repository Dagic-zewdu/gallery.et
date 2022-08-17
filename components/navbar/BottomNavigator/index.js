import * as React from 'react';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import Albums from '../../../screen/albums';
import Events from '../../../screen/events';
import Gallery from '../../../screen/gallery';
import Home from '../../../screen/Home';

const Tab = createMaterialBottomTabNavigator();
const BottomNavigator = () => {
   return (
    <Tab.Navigator>
      <Tab.Screen name="Home" component={Home}  />
      <Tab.Screen name="Gallery" component={Gallery} />
      <Tab.Screen name="Albums" component={Albums} />
      <Tab.Screen name="Events" component={Events} />
    </Tab.Navigator>
  );
};

export default BottomNavigator;