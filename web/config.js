const dotenv = require('dotenv');
const assert = require('assert');

//This line sets the environment variables found in .env
dotenv.config();

//Grab the environment variables

const PORT = process.env.PORT || 5000;
const {
    FIREBASE_API_KEY,
    FIREBASE_AUTH_DOMAIN,
    FIREBASE_PROJECT_ID,
    FIREBASE_STORAGE_BUCKET,
    FIREBASE_MESSAGING_SENDER_ID,
    FIREBASE_APP_ID
} = process.env;

assert(PORT, 'PORT environment variable is rquired');
assert(FIREBASE_API_KEY, 'FIREBASE_API_KEY environment variable is rquired');
assert(FIREBASE_AUTH_DOMAIN, 'FIREBASE_AUTH_DOMAIN environment variable is rquired');
assert(FIREBASE_PROJECT_ID, 'FIREBASE_PROJECT_ID environment variable is rquired');
assert(FIREBASE_STORAGE_BUCKET, 'FIREBASE_STORAGE_BUCKET environment variable is rquired');
assert(FIREBASE_MESSAGING_SENDER_ID, 'FIREBASE_MESSAGING_SENDER_ID environment variable is rquired');
assert(FIREBASE_APP_ID, 'FIREBASE_APP_ID environment variable is rquired');


module.exports = {
    port: PORT,
    firebaseConfig: {
        apiKey: FIREBASE_API_KEY,
        authDomain: FIREBASE_AUTH_DOMAIN,
        projectId: FIREBASE_PROJECT_ID,
        storageBucket: FIREBASE_STORAGE_BUCKET,
        messagingSenderId: FIREBASE_MESSAGING_SENDER_ID,
        appId: FIREBASE_APP_ID
    }
}
