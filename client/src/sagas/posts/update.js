import { takeLatest, put, call } from 'redux-saga/effects'
import { updatePostInAPI } from '../../services/posts'
import navigateTo from '../../services/navigation'

function* updatePost(action) {
  yield put({ type: 'UPDATE_POST_PENDING' })
  console.log('saga update from',action)

  try {
    console.log('saga update from',action.payload)
    const updatedPost = yield call(updatePostInAPI, action.payload)
    console.log('updatedPostttttt', updatedPost)
    yield put({ type: 'UPDATE_POST_SUCCESS', payload: updatedPost })
    yield put({type:'FETCH_POSTS'})
    // navigateTo('/admin/posts')
  } catch (error) {
    yield put({ type: 'UPDATE_POST_FAILURE' })
    console.error(error) // eslint-disable-line
    yield put(navigateTo('/error'))
  }
}

export default function* watchUpdatePost() {
  yield takeLatest('UPDATE_POST', updatePost)
}
