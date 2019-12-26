import React, { Component } from 'react'
import ReactDOM from  'react-dom'

import { HashRouter, Route, Switch } from 'react-router-dom'


import Regular from './components/games/Regular'
import Advance from './components/games/Advance'
import TicTacToe from './components/games/TicTacToe'
import Navbar from './components/common/Navbar'
import Footer from './components/common/Footer'
import Home from './components/pages/Home'

import "./style.scss"

export default class App extends Component {
    render() {
        return (
            <HashRouter>
                
                <Navbar/>
                <Switch>
                    <Route path="/rockpaperscissors" component={Regular}/> 
                    <Route path="/rockpaperscissorslizardspock" component={Advance}/>
                    <Route path="/TicTacToe" component={TicTacToe}/>
                    <Route path="/" component={Home}/>
                </Switch>
                <Footer/>


            </HashRouter>
        )
    }
}

ReactDOM.render(
    <App />,
    document.getElementById('root')
)
