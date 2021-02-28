import React, { Component } from 'react'
import { NavLink } from 'react-router-dom';

export default class Header extends Component {
    render() {
        return (
        <div>
          <header className='header-box'>
          <NavLink className='header-link' exact activeClassName="active" 
          to="/">Home</NavLink>

          <NavLink className='header-link' exact activeClassName="active" 
          to="/createAnimal">Create New Animal</NavLink>

          <NavLink className='header-link' exact activeClassName="active" 
          to="/wildAnimals">List All Animals</NavLink>

          </header>
        </div>
        )
    }
}
