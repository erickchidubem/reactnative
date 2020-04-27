import React, {Component} from 'react';
import colors from '../../assets/styles/colors';
//import Toast from 'react-native-simple-toast';
import {StyleSheet,Text,View, Image,TouchableHighlight,TextInput} from 'react-native';
import * as common from '../../components/common/';
//import {LoginAction} from './LoginAction';
class Login extends Component {
    state = {
        email: '',
        password: ''
     }


   
    onMoreOptionsPress=()=>{
        let { email, password } = this.state;
        if(email == ""){
            Toast.showWithGravity('Please enter email address', Toast.LONG, Toast.TOP);
            return;
        }
        if(password == ""){
            Toast.showWithGravity('Please enter password', Toast.LONG, Toast.TOP);
            return;
        }
        LoginAction(email,password);
       
    }

    handleEmail = (text) => {
        this.setState({ email: text })
     }
     handlePassword = (text) => {
        this.setState({ password: text })
     }

    render (){

        let { email, password } = this.state;
        return (
        <View style={styles.wrapper}>
                <View style={styles.welcomeWrapper}>
                   <Text style={styles.welcomeText}>Login to App</Text>
                   

                    
   <TextInput style = {styles.input} placeholder = "Email" placeholderTextColor = "#ffffff"
   value={email} onChangeText = {this.handleEmail}/>

<TextInput style = {styles.input} placeholder = "Password" placeholderTextColor = "#ffffff"
   value={password} onChangeText = {this.handlePassword}/>


                     <common.CommonRoundButton 
                       text="Login" textColor={colors.white}
                       background={colors.green01} handleOnPress={this.onMoreOptionsPress}
                      />  

                </View>
                
        </View>
        );
    }
}



const styles = StyleSheet.create({
    wrapper : {
        flex: 1,
        display : 'flex',
        backgroundColor : colors.green01
    },
    input: {
        margin: 10,
        height: 60,
        borderColor: colors.white,
        borderRadius : 10,
        borderWidth: 1,
        color : colors.white
     },
    welcomeWrapper :{
        flex : 1,
        display:'flex',
        marginTop:30,
        padding:20
    },
    logo : {
        width: 50,
        height:50,
         marginTop:50,
        marginBottom:40,
    },
    welcomeText : {
        fontSize : 30,
        color : colors.white,
        fontWeight : '300',
        marginBottom:40,

    },
    facebookButonIcon:{
         color : colors.green01,
         position : 'relative',
         left:20,
         zIndex:8,
         
    },
    moreOptionsButton: {
        marginTop:15,
    },
    moreOptionsButtonText:{
        color : colors.white,
        fontSize:16
    },
    termsAndConditions:{
        flexWrap:'wrap',
        alignItems:'flex-start',
        flexDirection:'row',
        marginTop:20
    },
    termsText:{

    },


})


// const mapStateToProps = state => {
//     return {
     
//     };
//   };

//   const mapDispatchToProps = dispatch => ({
//     onLogin: (email,password) => { dispatch(LoginAction(email,password));},
//   });

export default Login;
