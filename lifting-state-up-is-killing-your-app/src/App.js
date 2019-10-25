import React, {
  useReducer,
  useEffect,
  createContext,
  useState,
  useContext,
} from 'react'

import './App.css'

const size = 10

const AppContext = createContext()

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

const useForceRender = () => {
  const [, forceRender] = useReducer((oldVal) => oldVal + 1, 0)
  return forceRender
}

const Cell = ({ cellI, rowI }) => {
  console.log('cell rendered')
  const forceRender = useForceRender()
  const field = useContext(AppContext)
  useEffect(() => {
    field.subscribeCellUpdates(rowI, cellI, forceRender)
    return () => field.unsubscribeCellUpdates(rowI, cellI)
  }, [forceRender, rowI, cellI, field])
  return (
    <div className="cell" onClick={() => field.setCell(rowI, cellI, '✔')}>
      {field.cellContent(rowI, cellI)}
    </div>
  )
}

export const App = () => {
  // Note how we used a factory to initialize our state here.
  // Field creation could be quite expensive for big fields.
  // So we don't want to create it each time we render and block the event loop.
  const [field] = useState(() => new Field(size))
  return (
    <AppContext.Provider value={field}>
      <div>
        {field.map((row, rowI) => (
          <div className="row" key={rowI}>
            {row.map((cell, cellI) => (
              <Cell key={`row${rowI}cell${cellI}`} rowI={rowI} cellI={cellI} />
            ))}
          </div>
        ))}
      </div>
    </AppContext.Provider>
  )
}
