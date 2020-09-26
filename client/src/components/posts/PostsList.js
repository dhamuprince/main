// @flow

import React from 'react'
import { Link } from 'react-router-dom'

import type { Users } from '../../types/users'

type Props = {
  loading: boolean,
  posts: Users,
  url: string,
  onEditPost: (id: number) => void,
  onDeletePost: (id: number) => void
}

export default function PostsList(props: Props) {
  const { loading, posts, url, onEditPost, onDeletePost } = props

  if (loading) return <p>Loading...</p>
  if (posts.length === 0) return <div>No posts.</div>
  
  return (
   
    <div className="App">
        <table className="table table-dark">
          <thead>
            <tr>
              <th>First Name</th>
              <th>Last Name</th>
              <th>Email</th>
              <th>Gender</th>
              <th>Published</th>
            </tr>
          </thead>
          <tbody>
            {
              posts.map(u => (
                <tr key={u._id}>
                 
                  <td> <Link className="posts__title" to={`${url}/${u._id}`}>{u.name}</Link></td>
                  <td>{u.last}</td>
                  <td>{u.email}</td>
                  <td>{u.gender}</td>
                  <td>{u.published ? "published" : "pending"}</td>

                  <td>
                    <button
            className="btn posts__btn"
            onClick={() => onEditPost(u._id)}
            title="Edit"
          >
            <i className="fa fa-pencil-square-o" />
          </button>
                  </td>
                  <td>
                  <button
            className="btn posts__btn"
            onClick={() => onDeletePost(u._id)}
            title="Delete"
          >
            <i className="fa fa-trash-o" />
          </button>
                  </td>
                </tr>
              ))}
          </tbody>
        </table>
      </div >

  )
}
