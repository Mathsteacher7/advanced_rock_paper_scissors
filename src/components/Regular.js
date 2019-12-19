import React from 'react'

class Regular extends React.Component {
    constructor(){
        super()
        this.state = {
            src: "https://i.imgur.com/5wtoqPT.jpg"
        }
        
    }



    render(){
        return(
            <div>
                <h1>Welcome to the good old Rock Paper Scissors</h1>
                <div>
                    <h3>Player</h3>
                    <div id='playerPick'>
                        <img src={this.state.src}></img>
                    </div>
                    <div>
                        <button onClick={this.playerChoose}> 
                            <img src="https://i.imgur.com/Rf3Mi4I.jpg"></img>
                            <p>Rock</p>
                        </button> 
                        <button onClick={this.playerChoose}>
                            <img src="https://i.imgur.com/iAVdpUK.jpg"></img>
                            <p>Paper</p>
                        </button> 
                        <button onClick={this.playerChoose}>
                            <img src="https://i.imgur.com/2Uiz9nB.jpg"></img>
                            <p>Scissors</p>
                        </button> 
                    </div>
                </div>
            </div>
        )
    }
}

export default Regular