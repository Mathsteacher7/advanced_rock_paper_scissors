import React, { Component } from 'react'
import ReactDOM from  'react-dom'

import { HashRouter, Route, Switch } from 'react-router-dom'


import Regular from './components/games/Regular'
import Advance from './components/games/Advance'
import Navbar from './components/common/Navbar'

import "./style.scss"

export default class App extends Component {
    render() {
        return (
            <HashRouter>
                
                <Navbar/>
                <Route path="/rockpaperscissors" component={Regular}/> 
                <Route path="/rockpaperscissorslizardspock" component={Advance}/> 

                <footer>
                <p>Photo by Zoltan Tasi, Morgan Harris and Skyla Design on Unsplash</p>
                </footer>
            </HashRouter>
        )
    }
}

ReactDOM.render(
    <App />,
    document.getElementById('root')
)
