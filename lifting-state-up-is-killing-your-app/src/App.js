import React, { useReducer, useEffect } from 'react'

import './App.css'

const size = 10

class Field {
  constructor(fieldSize) {
    this.size = fieldSize
    // Copy-paste from `initialState`
    this.data = new Array(this.size).fill(new Array(this.size).fill(undefined))
    this.subscribers = {}
  }

  _cellSubscriberId(rowI, cellI) {
    return `row${rowI}cell${cellI}`
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
    const cellSubscriber = this.subscribers[this._cellSubscriberId(rowI, cellI)]
    if (cellSubscriber) {
      cellSubscriber()
    }
  }

  map(cb) {
    return this.data.map(cb)
  }

  // Note that we subscribe not to updates of the whole filed, but to updates of one cell only
  subscribeCellUpdates(rowI, cellI, onSetCellCallback) {
    this.subscribers[this._cellSubscriberId(rowI, cellI)] = onSetCellCallback
  }

  unsubscribeCellUpdates(rowI, cellI) {
    delete this.subscribers[this._cellSubscriberId(rowI, cellI)]
  }
}

const field = new Field(size)

const useForceRender = () => {
  const [, forceRender] = useReducer((oldVal) => oldVal + 1, 0)
  return forceRender
}

const Cell = ({ cellI, rowI }) => {
  console.log('cell rendered')
  const forceRender = useForceRender()
  useEffect(() => {
    field.subscribeCellUpdates(rowI, cellI, forceRender)
    return () => field.unsubscribeCellUpdates(rowI, cellI)
  }, [forceRender, rowI, cellI])
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
