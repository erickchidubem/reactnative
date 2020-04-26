import React, { Component } from 'react';
import {Provider} from 'react-redux';
import store from './src/shared/redux/store';
import AppNavigator from './src/shared/routes/AppNavigator';


export default class App extends Component {

  render(){
        return ( 
           <Provider store={store}>
                  <AppNavigator/> 
           </Provider>
        );
  }
};
