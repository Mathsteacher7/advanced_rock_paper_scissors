import React from 'react'

// let grid = []
// for (let i = 0; i < 9; i++){
//     grid.push(i)
// }
// console.log(grid)

class TicTacToe extends React.Component {

    constructor(){
        super()


    }


    changeBackground(e){
        console.log(e)

    }

    render(){
        let grid = []
        for (let i = 0; i < 9; i++){
            grid.push(i)
        }
        return(
            <div className="tictactoe">

                <h1 className="title">Soon we will have here also TicTacToe</h1>
                <div className="boxes">
                    {grid.map(box => <button onClick={this.changeBackground} key={box} className="empty ">{box}</button>)}
                </div>
            </div>
        )
    }
}

export default TicTacToe