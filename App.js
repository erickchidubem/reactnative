import React, { Component } from 'react';
import {SafeAreaView,StyleSheet,ScrollView,View,Text,StatusBar} from 'react-native';
import {Provider} from 'react-redux';
import LoggedOut from './src/screens/LogOut';
import store from './shared/redux/store/';

export default class App extends Component {

  render(){

        return (
       
          <Provider store={store}>
            {/* <LoggedOut/> */}
          </Provider>
        );
  }
};
