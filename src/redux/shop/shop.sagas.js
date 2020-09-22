import { takeLatest, call, put, all } from 'redux-saga/effects';

import {
  firestore,
  convertCollectionsSnapshotToMap,
} from '../../firebase/firebase';

import {
  fetchCollectionsSuccess,
  fetchCollectionsFailure,
} from './shopActions';
import ShopActionTypes from './shopTypes';

export function* fetchCollectionsAsync() {
  try {
    //yield console.log("I am fired.");
    const collectionRef = firestore.collection('collections');
    const snapshot = yield collectionRef.get();
    //call ->  is a method that takes some function or method as its first argument and subsequent argument will be the
    //parameters passed into the function call
    const collectionsMap = yield call(
      convertCollectionsSnapshotToMap,
      snapshot
    );

    //put is saga effect for creating actions
    yield put(fetchCollectionsSuccess(collectionsMap));
  } catch (error) {
    yield put(fetchCollectionsFailure(error.message));
  }
}

export function* fetchCollectionsStart() {
  yield takeLatest(
    ShopActionTypes.FETCH_COLLECTIONS_START,
    fetchCollectionsAsync
  );
}

export function* shopSagas() {
  yield all([call(fetchCollectionsStart)]);
}
