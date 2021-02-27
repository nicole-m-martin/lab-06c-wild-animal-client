import React, { Component } from 'react'
import { makeNewAnimal } from '../Utils/api-utils'

// State
export default class CreatePage extends Component {
  state = {
    kind: '',
    size_id: 1,
    age: 0,
    is_fun: false,
  }

  // Handlers
  handleKindChange = (e) => this.setState({ kind: e.target.value })

  handleIsFunChange = () => this.setState({ is_fun: !this.state.is_fun })

  handleAgeChange = (e) => this.setState({ age: Number(e.target.value) })

  handleSizeChange = (e) => this.setState({ size_id: Number(e.target.value) })

  handleSubmitButton = async (e) => {
    e.preventDefault();
    await makeNewAnimal(this.state)
    this.props.history.push('/wildAnimals')
  }


  render() {
    console.log(this.state)
    return (
      <div>
       <div>
        <div className="form-box">
           <form onSubmit={ this.handleSubmitButton }>
          <label>
            Wild Animal Kind
            <input value={ this.state.kind } onChange={ this.handleKindChange } /> 
          </label>
          <label>
            How Old? 
            <input type='number' value={ this.state.age } onChange={ this.handleAgeChange } /> 
          </label>
          <label>
            Is it a fun Wild Animal?
            <input type='checkbox' value={ this.state.is_fun } checked={ this.state.is_fun } onChange={ this.handleIsFunChange } /> 
          </label>
          <label>
            <select value={ this.state.size_id } onChange={ this.handleSizeChange }>
            <option value={1}>Large</option>
            <option value={2}>Medium</option>
            <option value={3}>Small</option>
            </select>
          </label>
          <button>Add Animal</button>
        </form>
        </div>
      </div>
      </div>
    )
  }
}
        
