import React, {Component} from 'react';
import colors from '../../assets/styles/colors';
import Toast from 'react-native-simple-toast';
import {StyleSheet,Text,View, Image,TouchableHighlight,TextInput} from 'react-native';
import * as common from '../../components/common/';

class Dashboard extends Component {

    onMoreOptionsPress=()=>{

    }

    render (){

        return (
        <View style={styles.wrapper}>
                <View style={styles.welcomeWrapper}>
                   <Text style={styles.welcomeText}>Welcome to Dashboard</Text>
                   <Text style={styles.welcomeText}>Today is a happy day</Text>

                     <common.CommonRoundButton 
                       text="Logout" textColor={colors.white}
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

export default Dashboard;
