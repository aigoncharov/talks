import React from 'react'

import './App.css'

const size = 10

class Field {
  constructor(fieldSize) {
    this.size = fieldSize
    // Copy-paste from `initialState`
    this.data = new Array(this.size).fill(new Array(this.size).fill(undefined))
  }

  cellContent(rowI, cellI) {
    return this.data[rowI][cellI]
  }

  // Copy-paste from  old `setCell`
  setCell(rowI, cellI, newContent) {
    console.log('setCell')
    this.data = [
      ...this.data.slice(0, rowI),
      [
        ...this.data[rowI].slice(0, cellI),
        newContent,
        ...this.data[rowI].slice(cellI + 1),
      ],
      ...this.data.slice(rowI + 1),
    ]
  }

  map(cb) {
    return this.data.map(cb)
  }
}

const field = new Field(size)

const Cell = ({ cellI, rowI }) => {
  console.log('cell rendered')
  return (
    <div className="cell" onClick={() => field.setCell(rowI, cellI, '✔')}>
      {field.cellContent(rowI, cellI)}
    </div>
  )
}

export const App = () => {
  return (
    <div>
      {field.map((row, rowI) => (
        <div className="row" key={rowI}>
          {row.map((cell, cellI) => (
            <Cell key={`row${rowI}cell${cellI}`} rowI={rowI} cellI={cellI} />
          ))}
        </div>
      ))}
    </div>
  )
}
