import React from 'react'
import { Link, withRouter } from 'react-router-dom'

class Navbar extends React.Component {
    render(){
        return (
            <div>
                <div className="navbar is-warning">
                    <Link to="/" className="navbar-item">Home</Link>
                    <Link to="/rockpaperscissors" className="navbar-item">Rock Paper Scissors</Link>
                    <Link to="/rockpaperscissorslizardspock" className="navbar-item">Rock Paper Scissors Lizard Spock</Link>
                    <Link to="/TicTacToe" className="navbar-item">Tic Tac Toe</Link>
                    <a href="https://mathsteacher7.github.io/Project1/" target="_blank" className="navbar-item">Mine Sweeper</a>
                </div>
            </div>
        )
    }
}

export default withRouter(Navbar)