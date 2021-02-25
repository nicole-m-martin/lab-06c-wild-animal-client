import React, { Component } from 'react'
import './App.css';
import Header from './Components/Header';
import HomePage from './Components/HomePage';
import ListPage from './Components/ListPage';
import CreatePage from './Components/CreatePage';
import DetailPage from './Components/DetailPage';
import {
    BrowserRouter as Router, 
    Route, 
    Switch,
} from 'react-router-dom';



export default class App extends Component {
    render() {
        return (
            <div>
                <Router>
                    <Header />
                    <Switch>
                        <Route 
                            path="/" 
                            exact
                            component={HomePage} 
                        />
                        <Route 
                            path="/wildAnimals" 
                            exact
                            component={ListPage} 
                        />            
                        <Route 
                            path="/wildAnimals/:colorId" 
                            exact
                            component={DetailPage} 
                        />
                        <Route 
                            path="/createAnimal" 
                            exact
                            component={CreatePage} 
                        />
                    </Switch>
                </Router>
            </div>
        )
    }
}

