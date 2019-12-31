import React from 'react'

class TicTacToe extends React.Component {

    constructor(){
        super()
        this.state = {
            addClass: false
        }

        this.toggle = this.toggle.bind(this)

    }



    toggle(e){
        this.setState({addClass: !this.state.addClass})
    }

    render(){
        let grid = []
        for (let i = 0; i < 9; i++){
            grid.push(i)
        }
        let boxClass = ["empty"];
        if(this.state.addClass) {
          boxClass.push('playerMove'), boxClass.shift()}
        return(
            <div className="tictactoe">

                <h1 className="title">Soon we will have here also TicTacToe</h1>
                <div className="boxes">
                    {grid.map(box => 
                    
                    <button 
                        onClick={this.toggle}
                        key={box} 
                        className={boxClass.join(' ')}
                    >
                        {box}
                    </button>
                    )
                    }
                </div>
            </div>
        )
    }
}



export default TicTacToe