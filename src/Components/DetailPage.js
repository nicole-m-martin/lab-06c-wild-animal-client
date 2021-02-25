import React, { Component } from 'react'
import { getOneAnimal, getColors, updateWildAnimal, getWildAnimals } from '../Utils/api-utils'

export default class DetailPage extends Component {

  // State //

    state = {
      animal_common_name: '',
      animal_science_name: '',
      color_id: 1,
      amount: 0,
      is_fun: false,
    }

    componentDidMount = async () => {
      const colors = await getColors();
      const oneAnimal = getOneAnimal(this.props.match.params.colorId)
      const color_id = getColors(oneAnimal, colors)

      this.setState({
        ...oneAnimal,
        color_id,
        colors
      })
    }

    // Handlers //

    handleCommonNameChange = (e) => this.setState({ animal_common_name: e.target.value })

    handleScienceNameChange = (e) => this.setState({ animal_science_name: e.target.value })

    handleIsFunChange = () => this.setState({ is_fun: !this.state.is_fun })

    handleAmountChange = (e) => this.setState({ amount: Number(e.target.value) })

    handleColorChange = (e) => this.setState({ color_id: Number(e.target.value) })

    handleSubmitButton = async (e) => {
      e.preventDefault();
      await updateWildAnimal(this.props.match.params.colorId, this.state)
      this.props.history.push('/wildAnimals')
    }

  render() {
    return (

      <div>
           <form onSubmit={ this.handleSubmitButton }>
          <label>
            Wild Animal Common Name
            <input value={ this.state.animal_common_name } onChange={ this.handleCommonNameChange } /> 
          </label>
          <label>
            Wild Animal Scientific Name
            <input value={ this.state.animal_science_name } onChange={ this.handleScienceNameChange } /> 
          </label>
          <label>
            How many do you have? 
            <input type='number' value={ this.state.amount } onChange={ this.handleAmountChange } /> 
          </label>
          <label>
            Is it a fun Wild Animal?
            <input type='checkbox' value={ this.state.is_fun } checked={ this.state.is_fun } onChange={ this.handleIsFunChange } /> 
          </label>
          <button>Update Animal</button>
        </form>
      </div>
    )
  }
}
