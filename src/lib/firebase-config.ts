// Firebase configuration
export const firebaseConfig = {
  apiKey: "AIzaSyDlXpMKumjFJCcYRQaPgmdftnDAQSND9Os",
  authDomain: "bai001.firebaseapp.com",
  projectId: "bai001",
  storageBucket: "bai001.appspot.com",
  messagingSenderId: "934824698688",
  appId: "1:934824698688:web:306bcb1b9bdf746d8610a5"
};
// Email configuration
export const actionCodeSettings = {
  url: 'https://b-ai.ru/program',
  handleCodeInApp: true,
  iOS: {
    bundleId: 'com.bai.app'
  },
  android: {
    packageName: 'com.bai.app',
    installApp: true,
    minimumVersion: '12'
  }
};