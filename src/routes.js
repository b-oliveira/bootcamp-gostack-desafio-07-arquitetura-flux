import React from 'react';
import { createAppContainer, createStackNavigator } from 'react-navigation';

import Main from './pages/Home';

import Header from './components/Header';

const Routes = createAppContainer(
  createStackNavigator(
    {
      Main,
    },
    {
      defaultNavigationOptions: {
        header: <Header />,
      },
      cardStyle: {
        backgroundColor: '#191920',
      },
    }
  )
);

export default Routes;
