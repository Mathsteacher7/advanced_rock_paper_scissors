import React from 'react'


class Regular extends React.Component {
    constructor(){
        super()
        this.state = {
            player: 3,
            src: "https://i.imgur.com/5wtoqPT.jpg",
            computersrc: "https://i.imgur.com/Yi1jFrO.jpg",
            winner: "Who will win?"
        }
        this.playerChoice = this.playerChoice.bind(this)
        this.computerChoosing = this.computerChoosing.bind(this)
        this.winner = this.winner.bind(this)
        this.reset = this.reset.bind(this)
    }

    playerChoice(e){
        this.setState({player: +e.target.id, src: e.target.src}, function() {
            this.computerChoosing()
        })

        
            
    }
    computerChoosing(){
        const computerChoice = Math.floor(Math.random() * 3)
        if (computerChoice === 0){
            this.setState({computersrc: "https://i.imgur.com/Rf3Mi4I.jpg"})
        } else if (computerChoice === 1){
            this.setState({computersrc: "https://i.imgur.com/iAVdpUK.jpg"})
        } else {
            this.setState({computersrc: "https://i.imgur.com/2Uiz9nB.jpg"})
        }
        this.winner(computerChoice)
    }

    winner(number){
        switch(true){
            case(this.state.player === number):
            this.setState({winner: "It's a tie!"})
            break
            case((this.state.player === 0 && number === 2) || (this.state.player === 1 && number === 0) || (this.state.player === 2 && number === 1)):
            this.setState({winner: "You won!"})
            break
            case((this.state.player === 0 && number === 1) || (this.state.player === 1 && number === 2) || (this.state.player === 2 && number === 0)):
            this.setState({winner: "You lost!"})
            break
            default:
                this.setState({winner: "Let's hope"})
            }
    }
    reset(){
        this.setState({
            player: 3,
            src: "https://i.imgur.com/5wtoqPT.jpg",
            computersrc: "https://i.imgur.com/Yi1jFrO.jpg",
            winner: "Who will win?"
        })
    }
        
    render(){

        return(
            <div id="regular">
                <h1 className="title text-color">Welcome to the good old Rock Paper Scissors</h1>
                <div className="structure">
                    <div className="player">
                        <h3 className="subtitle text-color">Player</h3>
                        <div id='playerPick'>
                            <img className="main" src={this.state.src}></img>
                        </div>
                        <div className="options">
                            <div>  
                                <button onClick={this.playerChoice}> 
                                    <img  src="https://i.imgur.com/Rf3Mi4I.jpg" id="0"></img>
                                </button> 
                                    <p className="names text-color">Rock</p>
                            </div>  
                            <div>
                                <button onClick={this.playerChoice}>
                                    <img src="https://i.imgur.com/iAVdpUK.jpg" id="1"></img>
                                </button> 
                                    <p className="names text-color">Paper</p>
                            </div>
                            <div>
                                <button onClick={this.playerChoice}>
                                    <img src="https://i.imgur.com/2Uiz9nB.jpg" id="2"></img>
                                </button> 
                                    <p className="names text-color">Scissors</p>
                            </div>
                        </div>
                    </div>
                    <div className="results">
                        <h3 className="subtitle">{this.state.winner}</h3>
                    </div>
                    <div className="computer">
                        <h3 className="subtitle text-color">AI</h3>
                        <div id='playerPick'>
                            <img className="main" src={this.state.computersrc}></img>
                        </div>


                    </div>
                </div>
                <div>
                    <button onClick={this.reset} className="resetButton">Reset</button>
                </div>
            </div>
        )
    }
}

export default Regular