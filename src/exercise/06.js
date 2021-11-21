// Basic Forms
// http://localhost:3000/isolated/exercise/06.js

import * as React from 'react'
import {useRef} from 'react'

function UsernameForm({onSubmitUsername, myRef}) {
  const handleSubmit = (event) => {
    event.preventDefault()
    onSubmitUsername(myRef.current.value)
  }

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="my-input">Username:</label>
        <input ref={myRef} type="text" id="my-input"/>
      </div>
      <button type="submit">Submit</button>
    </form>
  )
}

function App() {
  const myRef = useRef();

  const onSubmitUsername = username => alert(`You entered: ${username}`)
  return <UsernameForm onSubmitUsername={onSubmitUsername} myRef={myRef} />
}

export default App
