import React, { Component } from 'react'
import Spinner from './Spinner'
import { getWildAnimals } from '../Utils/api-utils'
import { Link } from 'react-router-dom'



export default class ListPage extends Component {

  state = {
    animals: [],
    loading: false
  }

  componentDidMount = async () => {
  this.setState({ loading: true })

  const animals = await getWildAnimals()

  this.setState({ animals: animals, loading: false })

  }

  render() {
    console.log(this.props)
    return (
      <div className='all-cards'>
        { this.state.loading ? <Spinner /> : 
         this.state.animals.map(animal => 
          <Link to={ `/wildAnimals/${animal.id}` }
          key= { animal.kind } style={{ textDecoration: 'none', color: 'black' }}>
              <div className='animal-card'>
              <p>Name: { animal.kind } </p>
              <p>Size: { animal.size_id } </p>
              <p>How Old?: { animal.age } </p>
              <p>Fun?: { animal.is_fun ? 'the animal is fun' : 'the animal is not fun' } </p>
              </div>
          </Link> 
          )}
      </div>
    )
  }
}
