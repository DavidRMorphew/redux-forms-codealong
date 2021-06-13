import React, { Component } from 'react'
import { connect } from 'react-redux'

class CreateTodo extends Component {
  
  state = {
    text: ''
  }

  handleChange = (e) => (
    this.setState({
      text: e.target.value
    })
  )

  handleSubmit = e => {
    e.preventDefault()
    console.log(this.state.text)
    this.props.addToDo(this.state)
    this.setState({text: ''})
  }

  render() {
    return(
      <div>
        <form onSubmit={this.handleSubmit}>
          <p>
            <label>add todo</label>
            <input onChange={this.handleChange} type="text" value={this.state.text}/>
          </p>
            <input type="submit"/>
        </form>
        {this.props.todos.length}
      </div>
    )
  }
}

const mapDispatchToProps = dispatch => {
  return {addToDo: formData => dispatch({type: 'ADD_TODO', payload: formData})}
}

export default connect(state => ({todos: state.todos}), mapDispatchToProps)(CreateTodo);
