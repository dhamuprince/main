// @flow

import React from 'react'
import { connect } from 'react-redux'
import { selectCurrentPost } from '../../selectors/posts'

import type { Connector } from 'react-redux'
import type { State, Dispatch } from '../../types'
import type { User } from '../../types/users'

type Props = {
  post: User
}

type OwnProps = {
  match: {
    params: {
      id: number
    }
  }
}


function PostPage({ post }: Props) {

console.log('single possttttt',post)
  return (
    <div>
      {post && (
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
            <tr>
             <td>{post.name}</td>
             <td>{post.last}</td>
             <td>{post.email}</td>
             <td>{post.gender}</td>
             <td>{post.published ? 'Published': 'Pending'}</td>
            </tr>
          </tbody>
        </table>
      </div >
      )}
    </div>
  )
}

function mapStateToProps(state: State, ownProps: OwnProps) {
  const post = selectCurrentPost(state, ownProps.match.params.id)
  console.log('post hereeeeeeee', post)
  return {
    post
  }
}

// https://github.com/flowtype/flow-typed/issues/1269
// eslint-disable-next-line no-unused-vars
function mapDispatchToProps(dispatch: Dispatch) {
  return {}
}

const connector: Connector<OwnProps, Props> = connect(
  mapStateToProps,
  mapDispatchToProps
)

export default connector(PostPage)
