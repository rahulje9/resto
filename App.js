/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, {useEffect} from 'react';
import {
  initialWindowMetrics,
  SafeAreaProvider,
} from 'react-native-safe-area-context';
import {Provider} from 'react-redux';
import {PersistGate} from 'redux-persist/integration/react';
import Router from './src/navigation/Router';
import {persistor, store} from './src/store/store';
import {StatusBar} from 'react-native';
import Colors from './src/utils/colors';

const App = () => {
  useEffect(() => {}, []);

  return (
    <SafeAreaProvider initialMetrics={initialWindowMetrics}>
      <Provider store={store}>
        <PersistGate persistor={persistor} loading={null}>
          <StatusBar backgroundColor={Colors.WHITE} barStyle="dark-content" />
          <Router />
        </PersistGate>
      </Provider>
    </SafeAreaProvider>
  );
};

export default App;
