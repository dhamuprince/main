// @flow

import React from 'react'

import type { User} from '../../types/users'

type Props = {
  loading: boolean,
  user: User,
  onNewPost: () => void,
  onReloadPosts: () => void
}

export default function PostsHeading({
  loading,
  user,
  onNewPost,
  onReloadPosts
}: Props) {
  return (
    <div>
      <div className="posts-heading">
        <h2 className="posts-heading__title">Users</h2>
        <button
          className="btn posts-heading__btn"
          onClick={onNewPost}
          disabled={loading}
        >
          New Post
        </button>
        <button
          className="btn posts-heading__btn"
          onClick={onReloadPosts}
          // disabled={loading || user.length === 0}
        >
          Reload Posts
        </button>
      </div>
    </div>
  )
}
