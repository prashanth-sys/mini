import {Component} from 'react'

import './index.css'

class MemoryMatrix extends Component {
  render() {
    return (
      <div className="memory-matrix-container">
        <h1 className="game-heading">Memory Matrix</h1>
        <div className="level-container">
          <p className="level">Level-1</p>
          <p className="level">Max Level-00</p>
        </div>
        <div className="game-container">
          <button type="button" className="button">
            .
          </button>
          <button type="button" className="button">
            .
          </button>
          <button type="button" className="button">
            .
          </button>
          <button type="button" className="button">
            .
          </button>
          <button type="button" className="button">
            .
          </button>
          <button type="button" className="button">
            .
          </button>
          <button type="button" className="button">
            .
          </button>
          <button type="button" className="button">
            .
          </button>
          <button type="button" className="button">
            .
          </button>
        </div>
      </div>
    )
  }
}

export default MemoryMatrix
