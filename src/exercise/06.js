// Basic Forms
// http://localhost:3000/isolated/exercise/06.js

import * as React from 'react'
import {useRef} from 'react'

function UsernameForm({onSubmitUsername, myRef}) {
  const handleSubmit = event => {
    event.preventDefault()
    onSubmitUsername(myRef.current.value)
  }

  const [username, setUsername] = React.useState(null)

  const handleChange = event => {
    let input = event.target.value
    const newInput = input.toLowerCase()
    setUsername(newInput)
  }

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="my-input">Username:</label>
        <input onChange={handleChange} ref={myRef} type="text" id="my-input" value={username}/>
      </div>
      <button type="submit">
        Submit
      </button>
    </form>
  )
}

function App() {
  const myRef = useRef()

  const onSubmitUsername = username => alert(`You entered: ${username}`)
  return <UsernameForm onSubmitUsername={onSubmitUsername} myRef={myRef} />
}

export default App
