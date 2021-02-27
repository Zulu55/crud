import firebase from 'firebase/app'

const firebaseConfig = {
    apiKey: "AIzaSyBmpkJy4qZtqVIRZXex0o2rT7zvOVrwIvM",
    authDomain: "crud-45c2d.firebaseapp.com",
    projectId: "crud-45c2d",
    storageBucket: "crud-45c2d.appspot.com",
    messagingSenderId: "1057302844614",
    appId: "1:1057302844614:web:a9de5cd86bbf4811adb3c7"
}

export const firebaseApp = firebase.initializeApp(firebaseConfig)