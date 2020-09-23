import firebase from 'firebase/app';
import 'firebase/firestore';

const firebase = firebase.firestore();

firebase.collection('users').doc('z0PK1pUyPe7X9BlXfpvj').collection('cartItems').doc('TPwMiySzb09b4b1q9Jcr');

//get doc
firebase.doc('/users/z0PK1pUyPe7X9BlXfpvj/cartItems/TPwMiySzb09b4b1q9Jcr');

//get collection
firebase.collection('/users/z0PK1pUyPe7X9BlXfpvj/cartItems');