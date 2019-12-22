import React from 'react'
import { Link, withRouter } from 'react-router-dom'

class Navbar extends React.Component {
    render(){
        return (
            <div>
                <div className="navbar is-warning">
                    <Link to="/rockpaperscissors" className="navbar-item">Rock Paper Scissors</Link>
                    <Link to="/rockpaperscissorslizardspock" className="navbar-item">Rock Paper Scissors Lizard Spock</Link>
                </div>
            </div>
        )
    }
}

export default withRouter(Navbar)