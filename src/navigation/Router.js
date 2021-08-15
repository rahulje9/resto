import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import React from 'react';
import Details from '../screen/Details';
import Home from '../screen/Home';

const Stack = createStackNavigator();

const Router = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}>
        <Stack.Screen name={'Home'} component={Home} />
        <Stack.Screen name={'Details'} component={Details} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Router;
