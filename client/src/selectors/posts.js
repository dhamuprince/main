// @flow
import type {
  State
} from '../types'
import type {
  PostsState,
  Users,
  User
} from '../types/users'

export function selectPosts(state: State): PostsState {
  return state.entities.posts
}

export function selectCurrentPost(state: State, id: number): User | void {
  console.log('idddddd', id);

  const items: Users = state.entities.posts.items
  console.log('itemssssss', items.find(item => item._id === id))
  return items.find(item => item._id === id)
}