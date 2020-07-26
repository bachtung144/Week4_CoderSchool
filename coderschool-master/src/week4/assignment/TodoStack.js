import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import Todo from './Todo';
import TodoDetail from './TodoDetail';
import {NavigationContainer} from '@react-navigation/native';

const Stack = createStackNavigator();

const TodoStack = () => (
  <NavigationContainer>
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Screen name="Todo" component={Todo} />
      <Stack.Screen name="TodoDetail" component={TodoDetail} />
    </Stack.Navigator>
  </NavigationContainer>
);

export default TodoStack;
