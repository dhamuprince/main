// @flow

import React, {
  Component
} from 'react'
import {
  connect
} from 'react-redux'
import navigateTo from '../../services/navigation'
import {
  UPDATE_POST
} from '../../actionTypes'
import {
  selectCurrentPost
} from '../../selectors/posts'
import PostForm from './PostForm'

import type {
  Connector
} from 'react-redux'
import type {
  State,
  Dispatch
} from '../../types'
import type {
  User,
  PostPayload as Payload
} from '../../types/users'

type Props = {
  post: User,
  updatePost(payload: Payload): void
}

type OwnProps = {
  match: {
    params: {
      id: number
    }
  }
}

// console.log('postttttt', post)

class EditPostPage extends Component < Props > {
  handleSubmit = (payload: Payload) => {
    console.log('this.props.post....', this.props.post._id)
    const id =  this.props.post._id
    payload = {
      ...payload,
      id
    }
    console.log('edit page from payload', payload)
    console.log('payloaddddd', id)
    this.props.updatePost(payload)
    navigateTo('/admin/posts')
  }
  render() {
    const {
      post
    } = this.props
    console.log('posttttt', post)
    return (
      <div>
        <h2> Edit post </h2>
        {
      post && < PostForm post = {
        post
      }
      onSubmit = {
        this.handleSubmit}
      
        />
      }
      </div>
    )
  }
}

function mapStateToProps(state: State, ownProps: OwnProps) {
  console.log('ownProps.match', ownProps.match.params.id)
  console.log('state', state)
  const post = selectCurrentPost(state, ownProps.match.params.id)
  // console.log('this is from post', post)
  return {
    post
  }
}

function mapDispatchToProps(dispatch: Dispatch) {
  return {
    updatePost: (payload: Payload) => dispatch({
      type: UPDATE_POST,
      payload
    })
  }
}

const connector: Connector < OwnProps, Props > = connect(
  mapStateToProps,
  mapDispatchToProps
)

export default connector(EditPostPage)