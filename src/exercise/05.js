// Styling
// http://localhost:3000/isolated/exercise/05.js

import * as React from 'react'
import '../box-styles.css'

// 💰 Use the className for the size and style (backgroundColor, fontStyle) for the color and the font style
// 💰 each of the elements should also have the "box" className applied

// 🐨 add a className prop to each of these and apply the correct class names
// 💰 Here are the available class names: box, box--large, box--medium, box--small

// 🐨 add a style prop to each of them as well so their background color
// matches what the text says it should be as well as `fontStyle: 'italic'`
const smallBox = <div style={{ backgroundColor: 'lightblue', fontStyle: 'italic' }} className="box--small box">small lightblue box</div>
const mediumBox = <div style={{ backgroundColor: 'pink', fontStyle: 'italic' }} className="box--medium box">medium pink box</div>
const largeBox = <div style={{ backgroundColor: 'orange', fontStyle: 'italic' }} className="box--large box">large orange box</div>

function App() {
  return (
    <>
      {smallBox}
      {mediumBox}
      {largeBox}
    </>
  )
}

export default App
