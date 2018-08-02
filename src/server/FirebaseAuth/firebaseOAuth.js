
import firebase from 'firebase';
import {config} from './config';

export const FirebaseOAuth=()=>{
    
    return firebase.initializeApp(config);
}

 

