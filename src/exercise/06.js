// Basic Forms
// http://localhost:3000/isolated/exercise/06.js

import * as React from 'react'
import {useRef} from 'react'

function UsernameForm({onSubmitUsername, myRef}) {
  const handleSubmit = event => {
    event.preventDefault()
    onSubmitUsername(myRef.current.value)
  }

  const [errorState, setErrorState] = React.useState(null)

  const handleChange = event => {
    let input = event.target.value
    const isValid = input === input.toLowerCase()
    setErrorState(isValid ? null : 'Username must be lower case')
  }

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="my-input">Username:</label>
        <input onChange={handleChange} ref={myRef} type="text" id="my-input" />
      </div>
      <button type="submit" disabled={errorState}>
        Submit
      </button>
      {errorState ? <p role="alert">{errorState}</p> : null}
    </form>
  )
}

function App() {
  const myRef = useRef()

  const onSubmitUsername = username => alert(`You entered: ${username}`)
  return <UsernameForm onSubmitUsername={onSubmitUsername} myRef={myRef} />
}

export default App
