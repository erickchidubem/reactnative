// CommonTextInput.js
import React ,{Component} from 'react';
import PropTypes from 'prop-types';
import {Text, View,TextInput, TouchableHighlight,StyleSheet} from 'react-native';
import colors from '../../assets/styles/colors';
import {Fonts} from '../../assets/styles/Fonts';
import { RFValue } from 'react-native-responsive-fontsize';


export default class CommonTextInput extends Component{

    state = {
        showPassword: false
      }
      toggleShowPassword = () => {
        this.setState({
          showPassword: !this.state.showPassword
        })
      }

    render(){

        const {text,textColor,background,icon,handleOnPress} = this.props;
        const backgroundColor = background || 'Transparent'
        const color = textColor || colors.black;

        return (
            <TextInput       
            label={this.props.label ? this.props.label : ""}
            labelHeight={27}
            labelFontSize={RFValue(8)} //label fontsize after animation
            fontSize={RFValue(10)} //label fontsize before animation
            labelPadding={0}
           // labelTextStyle={styles.labelTextStyle}
            lineWidth={1}
            activeLineWidth={1}    
                    
            />
        ); 
    }
}

CommonTextInput.propTypes = {
    label : PropTypes.string.isRequired,
    textColor : PropTypes.string,
    background : PropTypes.string,
    icon : PropTypes.object,
    onChangeText : PropTypes.func.isRequired,
    
};

