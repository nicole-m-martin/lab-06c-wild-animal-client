import React, { Component } from 'react'
import { getOneAnimal, updateWildAnimal, deleteOneAnimal } from '../Utils/api-utils'

export default class DetailPage extends Component {

  // State //

    state = {
      kind: '',
      size_id: 1,
      age: 0,
      is_fun: false,
      owner_id: 1,
      
    }

    componentDidMount = async () => {
      const {
        kind, 
        size_id, 
        age, 
        is_fun, 
        owner_id
      } = await getOneAnimal(this.props.match.params.animalId)
  

    this.setState({
      kind: kind,
      size_id: size_id,
      age: age,
      is_fun: is_fun,
      owner_id: owner_id

    })

  }

    // Handlers //

    handleKindChange = (e) => this.setState({ kind: e.target.value })

    handleIsFunChange = () => this.setState({ is_fun: !this.state.is_fun })

    handleAgeChange = (e) => this.setState({ age: Number(e.target.value) })

    handleSizeChange = (e) => this.setState({ size_id: Number(e.target.value) })

    handleDeleteChange = async () => {
      await deleteOneAnimal(this.state);
      this.props.history.push('/');
  }

    handleSubmitButton = async (e) => {
      e.preventDefault();
      await updateWildAnimal(this.props.match.params.animalId, this.state)
      this.props.history.push('/wildAnimals')
    }

  render() {
    return (

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
            <option value={1} selected={ this.state.size_id === 1 }>Large</option>
            <option value={2} selected={ this.state.size_id === 2 }>Medium</option>
            <option value={3} selected={ this.state.size_id === 3 }>Small</option>
            </select>
          </label>
          <button> Update Animal </button>
        </form>
        <button onClick={this.handleDeleteClick}> Delete Animal </button>
        </div>
      </div>
    )
  }
    }