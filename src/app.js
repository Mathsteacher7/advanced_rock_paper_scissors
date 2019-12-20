import React, { Component } from 'react'
import ReactDOM from  'react-dom'

import Regular from './components/Regular'

import "./style.scss"

export default class App extends Component {
    render() {
        return (
            <div>
              <Regular/> 

              <footer>
              <p>Photo by Zoltan Tasi, Morgan Harris and Skyla Design on Unsplash</p>
              </footer>
            </div>
        )
    }
}

ReactDOM.render(
    <App />,
    document.getElementById('root')
)
