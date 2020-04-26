
export const SAVE_EMAIL = "SAVE_EMAIL";

import utils from '../../shared/utils/utils';
import Toast from 'react-native-simple-toast';

export const LoginAction =(email,password)=>{
    if(email == "erickchidubem@gmail.com" && password == "123045"){
        //trigger reducer 
        dispatch({ type: SAVE_EMAIL,payload: email })

        Toast.show('Correct Login credentials');
        //Navigate to dashboard
        utils.reset('MyDashboard',email);
    }else{
        Toast.show('Incorrect login credentials');
    }
}