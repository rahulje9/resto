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
import InitializeData from './src/components/initializeData/InitializeData';

const App = () => {
  return (
    <SafeAreaProvider initialMetrics={initialWindowMetrics}>
      <Provider store={store}>
        <PersistGate persistor={persistor} loading={null}>
          <StatusBar backgroundColor={'#fff'} barStyle="dark-content" />
          <InitializeData />
          <Router />
        </PersistGate>
      </Provider>
    </SafeAreaProvider>
  );
};

export default App;
