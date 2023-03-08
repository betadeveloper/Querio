import React, { useState } from 'react'
import logo from './assets/querio.webp'
import './assets/App.css'

function App() {
  const [question, setQuestion] = useState('')
  const [answer, setAnswer] = useState('')
  const [formSubmitted, setFormSubmitted] = useState(false)

  const handleSubmit = async (e) => {
    e.preventDefault()
    try {
      const response = await fetch('https://querio-unlocktests.onrender.com/answer/', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ question }),
      })

      const data = await response.json()
      setAnswer(data.answer)
      setFormSubmitted(true)
    } catch (error) {
      setAnswer('Error: Could not connect to server')
      console.error(error)
    }
  }
  return (
    <div className={`container ${formSubmitted ? 'submitted' : ''}`}>
      <div className='header'>
        <img src={logo} className='logo' alt='querio-logo'></img>
      </div>
      <form onSubmit={handleSubmit} className='form'>
        <div className='form-group'>
          <input
            type='text'
            className='form-control'
            value={question}
            onChange={(e) => setQuestion(e.target.value)}
            placeholder='Type your question here...'
            required
          />
        </div>
        <button type='submit' className='btn'>
          Submit
        </button>
      </form>
      {answer && (
        <div className='answer'>
          <h2>Answer</h2>
          <p className='answer-text'>{answer}</p>
        </div>
      )}
    </div>
  )
}

export default App
