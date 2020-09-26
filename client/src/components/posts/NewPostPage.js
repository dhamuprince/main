// @flow

import React, { Component } from 'react'
import { connect } from 'react-redux'
import navigateTo from '../../services/navigation'
import { CREATE_POST } from '../../actionTypes'
import PostForm from './PostForm'

import type { Connector } from 'react-redux'
import type { Dispatch } from '../../types'
import type { PostPayload as Payload } from '../../types/users'

type Props = {
  dispatch: Dispatch,
  createPost(payload: Payload): void
}

class NewPostPage extends Component<Props> {
  handleSubmit = (payload: Payload) => {
    this.props.createPost(payload)
    navigateTo('/admin/posts')
  }

  render() {
    return (
      <div>
        <h2>Create new user</h2>
        <PostForm onSubmit={this.handleSubmit} />
      </div>
    )
  }
}

function mapDispatchToProps(dispatch: Dispatch) {
  return {
    createPost: (payload: Payload) => dispatch({ type: CREATE_POST, payload })
  }
}

const connector: Connector<{}, Props> = connect(null, mapDispatchToProps)
export default connector(NewPostPage)
