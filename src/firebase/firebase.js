// import * as firebase from 'firebase';
import firebase from 'firebase/app';
import 'firebase/database';
import 'firebase/messaging';

const config = {
  apiKey: 'AIzaSyBnjWQ_FqSIljCLISidpS9ZbZgftfMhOwE',
  authDomain: 'contador-de-gastos.firebaseapp.com',
  databaseURL: 'https://contador-de-gastos.firebaseio.com',
  projectId: 'contador-de-gastos',
  storageBucket: 'contador-de-gastos.appspot.com',
  messagingSenderId: '270712574007'
};

firebase.initializeApp(config);

const database = firebase.database();

database.ref().set({
  nome: 'Marcio',
  idade: 35
});
