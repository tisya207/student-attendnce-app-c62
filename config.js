import firebase from 'firebase';
// put your own firebase db configuration
   var firebaseConfig = {
    apiKey: "AIzaSyBk5PpkR0nQ7aEBHkWWVRM_skO7UptgGn8",
    authDomain: "project60-attendance-app.firebaseapp.com",
    databaseURL: "https://project60-attendance-app-default-rtdb.firebaseio.com",
    projectId: "project60-attendance-app",
    storageBucket: "project60-attendance-app.appspot.com",
    messagingSenderId: "434394891585",
    appId: "1:434394891585:web:bad36af62197b3f1a94dc0"
  };
 // Initialize Firebase
if(!firebase.apps.length){
 firebase.initializeApp(firebaseConfig);
}


export default  firebase.database()