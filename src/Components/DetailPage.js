import React, { Component } from 'react'
import { getOneAnimal, getSizes, updateWildAnimal } from '../Utils/api-utils'

export default class DetailPage extends Component {

  // State //

    state = {
      kind: '',
      size_id: 1,
      age: 0,
      is_fun: false,
    }

    componentDidMount = async () => {
      const sizes = await getSizes();
      const oneAnimal = getOneAnimal(this.props.match.params.sizeId)
      const size_id = getSizes(oneAnimal, sizes)

      this.setState({
        ...oneAnimal,
        size_id,
        sizes
      })
    }

    // Handlers //

    handleKindChange = (e) => this.setState({ kind: e.target.value })

    handleIsFunChange = () => this.setState({ is_fun: !this.state.is_fun })

    handleAgeChange = (e) => this.setState({ age: Number(e.target.value) })

    handleSizeChange = (e) => this.setState({ size_id: Number(e.target.value) })

    handleSubmitButton = async (e) => {
      e.preventDefault();
      await updateWildAnimal(this.props.match.params.sizeId, this.state)
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
          <button>Update Animal</button>
        </form>
        </div>
      </div>
    )
  }
}
