import React, { useState } from 'react'

import './App.css'

const size = 10

const Cell = ({ content, setContent }) => {
  console.log('cell rendered')
  return (
    <div className="cell" onClick={() => setContent('✔')}>
      {content}
    </div>
  )
}

const initialField = new Array(size).fill(new Array(size).fill(undefined))

export const App = () => {
  const [field, setField] = useState(initialField)

  return (
    <div>
      {field.map((row, rowI) => (
        <div className="row" key={rowI}>
          {row.map((cell, cellI) => (
            <Cell
              key={`row${rowI}cell${cellI}`}
              content={cell}
              setContent={(newContent) =>
                setField([
                  ...field.slice(0, rowI),
                  [
                    ...field[rowI].slice(0, cellI),
                    newContent,
                    ...field[rowI].slice(cellI + 1),
                  ],
                  ...field.slice(rowI + 1),
                ])
              }
            />
          ))}
        </div>
      ))}
    </div>
  )
}
