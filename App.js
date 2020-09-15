import React from 'react'
import { View } from 'react-native'
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';

const Stack = createStackNavigator();

import Game from './screens/Game'
import Gallery from './screens/Gallery'
import Ranking from './screens/Ranking'

const App = () => {
  return (
    <View style={{ flex: 1 }}>
      <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Gallery" component={Gallery} />
        <Stack.Screen name="Game" component={Game} />
        <Stack.Screen name="Ranking" component={Ranking} />
      </Stack.Navigator>
      </NavigationContainer>
      
    </View>
  )
}

export default App
