import { takeLatest, put, call } from 'redux-saga/effects'
import { deletePostFromApi } from '../../services/posts'
import navigateTo from '../../services/navigation'

function* deletePost(action) {
  console.log('delete action from', action)
  yield put({ type: 'DELETE_POST_PENDING', id: action.id })

  try {
    console.log('sdfdfdfdf', action.id)
    const count  = yield call(deletePostFromApi, action.id)
    console.log('counttttttt', count)
    // if (count !== 1) throw new Error('API delete request failed')
    console.log('countttttttafteraaaaa', count)
    yield put({ type: 'DELETE_POST_SUCCESS', count })
    yield put({type:'FETCH_POSTS'})
   
  } catch (error) {
    yield put({ type: 'DELETE_POST_FAILURE' })
    console.error(error) // eslint-disable-line
    yield put(navigateTo('/error'))
  }
}

export default function* watchDeletePost() {
  yield takeLatest('DELETE_POST', deletePost)
}
