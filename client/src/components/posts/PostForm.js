// @flow

import React, { Component } from 'react'

import type { User } from '../../types/users'

type Props = {
  post?: User,
  onSubmit: (payload: { name: string, last: string, email:string, gender:string, published:boolean }) => void
}

type State = {
  name: string,
  last: string,
  email:string,
  gender:string,
  published:soolean,
  error: string
}

export default class PostForm extends Component<Props, State> {
  constructor(props: Props) {
    super(props)
    // this is a controlled form, so
    // let name = ''
    // let last = ''

    // this.props.post && ({ name, last } = this.props.post)

    this.state = {
      name:'',
      last:'',
      email: '',
      gender:'',
      published:false

    }
    this.onChangeName = this.onChangeName.bind(this)
    this.onChangeLast = this.onChangeLast.bind(this)
    this.onChangeEmail = this.onChangeEmail.bind(this)
    this.onChangeRadio = this.onChangeRadio.bind(this)
    this.onChangeCheck = this.onChangeCheck.bind(this)
  }

  onChangeName = (e: SyntheticEvent<HTMLInputElement>) => {
    const name = e.currentTarget.value
    this.setState(() => ({ name }))
  }

  onChangeLast = (e: SyntheticEvent<HTMLInputElement>) => {
    const last = e.currentTarget.value
    this.setState(() => ({ last }))
  }
  onChangeEmail = (e: SyntheticEvent<HTMLInputElement>) => {
    const email = e.currentTarget.value
    this.setState(() => ({ email }))
  }
  onChangeRadio = (e: SyntheticEvent<HTMLInputElement>) => {
    const gender = e.currentTarget.value
    this.setState(() => ({ gender }))
  }
  onChangeCheck = () => {
    this.setState(initialState => ({
      published: !initialState.published,
    }));
  }


  // Just some simple validations
  // (for illustration purposes, atm)
  handleSubmit = (e: SyntheticEvent<*>) => {
    e.preventDefault()

    console.log('submit button')

    let { name, last, email, gender, published } = this.state
    name = name.trim()
    last = last.trim()

    if (!name || !last) {
      this.setState(() => ({
        error: 'Please provide both name and last.'
      }))
      return
    }

    const limit = 12
    if (name.length > limit) {
      this.setState(() => ({
        error: `name is too long (max. ${limit} characters)`
      }))
      return
    }

    this.setState(() => ({ error: '' }))
    this.props.onSubmit({ name, last, email, gender, published})
  }

  render() {

    return (
        <div className="container">
          {this.state.error && <div className="form-error">{this.state.error}</div>}
          <form onSubmit={this.handleSubmit} className="form">
            <div className="form-group">
              <label>First Name</label>
              <br />
              <input
                className="form-control-sm"
                id="name"
                type="text"
                value={this.state.name}
                onChange={this.onChangeName}
              />
            </div>
            <div className="form-group">
              <label>Last Name</label>
              <br />
              <input
                className="form-control-sm"
                id="last"
                type="text"
                value={this.state.last}
                onChange={this.onChangeLast}
              />
            </div>
            <div className="form-group">
              <label>Email</label>
              <br />
              <input
                className="form-control-sm"
                id="email"
                type="text"
                value={this.state.email}
                onChange={this.onChangeEmail}
              />
            </div>
            <div className="form-check">
              <label className="form-check-label" htmlFor="Radios1">
                <input className="form-check-input"
                  type="radio" name="example"
                  id="exampleRadios1"
                  onChange={this.onChangeRadio}
                  value="male" checked={this.state.gender === 'male'}
                />
                male
              </label>
            </div>
            <div className="form-check">
              <label className="form-check-label" htmlFor="Radios2">
                <input className="form-check-input"
                  type="radio" name="example"
                  id="exampleRadios2"
                  value="female"
                  onChange={this.onChangeRadio}
                  checked={this.state.gender === 'female'}
                />
                female
              </label>
            </div>
            <div className="form-check">
              <input type="checkbox"
                className="form-check-input"
                onChange={this.onChangeCheck}
                checked={this.state.published}
                id="exampleCheck1"
              />
              <label className="form-check-label" htmlFor="exampleCheck1">Check me out</label>
            </div>
            <button className="btn btn-primary">Add</button>
          </form>
        </div>
      
    )
  }
}
