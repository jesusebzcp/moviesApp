import 'react-native-gesture-handler';
import React from 'react';
import {Text} from 'react-native';
import Navigation from './src/navigation';
import {YellowBox} from 'react-native';
YellowBox.ignoreWarnings(['Remote debugger']);

//REDUX
import {Provider} from 'react-redux';

import store from './src/redux/store';

const App = () => {
  return (
    <Provider store={store}>
      <Navigation />
    </Provider>
  );
};

export default App;
