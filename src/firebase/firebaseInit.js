import firebase from "firebase/app"
import "firebase/firestore"

var firebaseConfig = {
    apiKey: "AIzaSyA4Auz561iNxE-l8oTPhZqoTuOpKjwq1dI",
    authDomain: "fireblogs-163e6.firebaseapp.com",
    projectId: "fireblogs-163e6",
    storageBucket: "fireblogs-163e6.appspot.com",
    messagingSenderId: "135972274777",
    appId: "1:135972274777:web:9816db10b16ccb5c0a6748"
}

const firebaseApp = firebase.initializeApp(firebaseConfig)
const timestamp = firebase.firestore.FieldValue.serverTimestamp

export { timestamp }
export default firebaseApp.firestore()