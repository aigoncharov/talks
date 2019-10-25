import React, { useState, useCallback, memo } from 'react'

import './App.css'

const size = 10

const Cell = memo(({ content, setContent, cellI, rowI }) => {
  console.log('cell rendered')
  return (
    <div className="cell" onClick={() => setContent(rowI, cellI, '✔')}>
      {content}
    </div>
  )
})

const initialField = new Array(size).fill(new Array(size).fill(undefined))

export const App = () => {
  const [field, setField] = useState(initialField)

  const setCell = useCallback(
    (rowI, cellI, newContent) =>
      setField((oldField) => [
        ...oldField.slice(0, rowI),
        [
          ...oldField[rowI].slice(0, cellI),
          newContent,
          ...oldField[rowI].slice(cellI + 1),
        ],
        ...oldField.slice(rowI + 1),
      ]),
    [],
  )

  return (
    <div>
      {field.map((row, rowI) => (
        <div className="row" key={rowI}>
          {row.map((cell, cellI) => (
            <Cell
              key={`row${rowI}cell${cellI}`}
              content={cell}
              rowI={rowI}
              cellI={cellI}
              setContent={setCell}
            />
          ))}
        </div>
      ))}
    </div>
  )
}
