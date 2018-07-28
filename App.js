import React from 'react';
import { createStackNavigator } from 'react-navigation';
import CardList from './src/components/CardList';
import Photo from './src/components/Photo';

const App = createStackNavigator({
  Home: {screen: CardList},
  Photo: {screen: Photo}
});

export default App;