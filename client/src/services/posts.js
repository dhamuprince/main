// @flow

import type { User, Users } from '../types/users'

import service from './Api'

export function fetchPostsFromApi(): Promise<User> | Promise<Users> {
  return service.get('/users')
}

export function deletePostFromApi(id: number): Promise<number> {
  console.log('idddddddadfdfdf', id)
  return service.delete(`/users/${id}`)
}

export function createtPostInAPI(payload: User): Promise<User> {
  return service.post('/users', payload)
}

export function updatePostInAPI(payload: User): Promise<User> {
  console.log('service from payload', payload)
  
  const { id, ...rest } = payload
  console.log('service from id', id)
  console.log('service from rest', rest)
  return service.patch(`/users/${id}`, rest)
}
