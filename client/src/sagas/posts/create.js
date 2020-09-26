import { takeLatest, put, call } from 'redux-saga/effects'
import { createtPostInAPI } from '../../services/posts'
import navigateTo from '../../services/navigation'

function* createPost(action) {
  yield put({ type: 'CREATE_POST_PENDING', data:'this is from crate' })

  try {
   
    const newPost = yield call(createtPostInAPI, action.payload)
    console.log('newPostssssss', newPost)
    // console.log('put here',{ type: 'CREATE_POST_SUCCESS', payload: newPost })
    yield put({ type: 'CREATE_POST_SUCCESS', payload: newPost })
    navigateTo('/admin/posts')
  } catch (error) {
    yield put({ type: 'CREATE_POST_FAILURE' })
    console.error(error) // eslint-disable-line
    yield put(navigateTo('/error'))
  }
}

export default function* watchCreatePost() {
  yield takeLatest('CREATE_POST', createPost)
}
