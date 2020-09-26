// @flow

export type User = {
  +id: number,
  +name: string,
  +last: string,
  +email:string,
  +gender:string,
  +published:string,
}

export type PostPayload = $Diff<User, { id: number }>

export type Users = Array<User>

export type PostsState = {
  +items: Users,
  +loading: boolean
}

export type PostsAction =
  | { type: 'FETCH_POSTS' }
  | { type: 'FETCH_POSTS_IF_NEEDED' }
  | { type: 'FETCH_POSTS_PENDING' }
  | { type: 'FETCH_POSTS_SUCCESS', payload: Users }
  | { type: 'FETCH_POSTS_FAILURE' }
  | { type: 'DELETE_POST' }
  | { type: 'DELETE_POST_PENDING', id: number }
  | { type: 'DELETE_POST_SUCCESS', id: number }
  | { type: 'DELETE_POST_FAILURE' }
  | { type: 'CREATE_POST', payload: User }
  | { type: 'CREATE_POST_PENDING' }
  | { type: 'CREATE_POST_SUCCESS', payload: User }
  | { type: 'CREATE_POST_FAILURE' }
  | { type: 'UPDATE_POST', payload: User }
  | { type: 'UPDATE_POST_PENDING' }
  | { type: 'UPDATE_POST_SUCCESS', payload: User }
  | { type: 'UPDATE_POST_FAILURE' }
