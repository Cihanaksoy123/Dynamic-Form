import React, { Fragment } from 'react';
import { Provider } from 'react-redux';
import { configureStore } from './app/store';
import Routes from './app/components/routes';
import { Toast } from 'react-native-redux-toast';
import { Icon, Text } from 'native-base';
import { View } from 'native-base';

const store = configureStore();

const App = () => {
  return (
    <Provider store={store}>
      <Routes />
      <Toast
        getMessageComponent={message => (
          <View style={{ flexDirection: 'row' }}>
            <Icon
              type="FontAwesome"
              style={{ fontSize: 20, color: 'white' }}
              name="exclamation-triangle"
            />
            <Text style={{ color: 'white' }}>{message}</Text>
          </View>
        )}
        containerStyle={{ paddingVertical: 10 }}
        messageStyle={{ color: 'white' }}
      />
    </Provider>
  );
};

export default App;
