const firebase = require('firebase');
// Required for side-effects
require("firebase/firestore");
const config = require('./config');

firebase.initializeApp(config.firebaseConfig);

// Initialize Cloud Firestore through Firebase
var db = firebase.firestore();

module.exports = db;