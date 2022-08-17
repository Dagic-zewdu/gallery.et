import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from '../screen/Home';
import Header from '../components/navbar';

const Stack = createNativeStackNavigator();

const Navigator = () => {
    return (
     <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen 
        name="Home" 
        component={Home}
        options={{
          header: props=><Header {...props} />
        }}
         />
      </Stack.Navigator>
    </NavigationContainer>
    );
}

export default Navigator;
