import React from 'react';
import { connect } from 'react-redux'
import { updateTwitch, addTwitch } from '../reducers/twitches'
import { Form } from 'semantic-ui-react';

class TwitchForm extends React.Component {
  initialState = { 
    post: '', 
    liked: false, 
    c
  }

  state = {...this.initialState}

  componentDidMount() {
    if (this.props.id) 
      this.setState({ ...this.props })
  }

  handleChange = (e) => {
    const { name, value } = e.target
    this.setState({ [name]: value })
  }

  handleSubmit = (e) => {
    e.preventDefault()
    const app = {...this.state}
    const { closeForm, dispatch } = this.props
    const func = this.props.id ? updateTwitch : addTwitch
    dispatch(func(twitch))
    closeForm()
  }

  render() {
    const { post, liked  } = this.props
    return (
      <Form onSubmit={this.handleSubmit}>
        <Form.Input
          post="post"
          required
          defaultValue={post}
          onChange={this.handleChange}
          label="post"
        />
     
        />
        <Form.Input
          liked = ''
          defaultValue={false}
          onChange={this.handleChange}
          label="Like"
        />

        <Form.Button>Save</Form.Button>
      </Form>
    )
  }
}

export default connect()(TwitchForm);