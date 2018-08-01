import { firebase } from 'firebase';

export default class CreateChallangeService {
  constructor() {
    const config = {
      apiKey: 'AIzaSyCmo8KDSPyTWauu7z5dFhGUUi_cuTi-XF8',
      authDomain: 'quizapp-social.firebaseapp.com',
      databaseURL: 'https://quizapp-social.firebaseio.com',
      projectId: 'quizapp-social',
      storageBucket: 'quizapp-social.appspot.com',
      messagingSenderId: '367717626621',
    };
    firebase.initializeApp(config);
  }

  static storeChallange(challangeJsonObj) {
    // Get a reference to the database service
    const database = firebase.database();
    database.ref(`users/${userId}`).set(challangeJsonObj);
    console.log('Change has been created');
  }
}
