const express = require('express')
const cors = require('cors')

const app = express()

app.use(cors())

app.use(express.json())

app.post('/answer', (req, res) => {
  const { question } = req.body
  const answer = getAnswer(question)
  res.json({ answer })
})

function getAnswer(question) {
  let lowercaseQuestion = question.toLowerCase()
  switch (lowercaseQuestion) {
    case 'hello':
    case 'hi':
      return 'Hello, nice to meet you!'
    case 'what is your name?':
      return 'My name is Querio and I am a simulation AI made by Raigardas Tautkus for UNLOCKTests.'
    case 'what is unlock tests?':
      return 'UNLOCK Tests is the platform of choice for businesses seeking an all-round solution for organizational and employee assessment. It bridges decades of research in management and organizational psychology with real-life knowledge of what works in business.'
    case 'when was unlock tests founded?':
      return 'UNLOCK Tests was founded in 2012 by a team of psychologists'
    case 'who is the head of platform development at unlocktests?':
      return 'The Head of Platform Development at unlocktests is Mindaugas Kunevičius'
    case 'what is 2*2?':
      return '2*2 = 4'
    case 'what is the name of this company?':
      return 'UNLOCK Testss'
    case 'what is the meaning of life?':
      return '42... and maybe the success of UNLOCK Tests customers'
    case 'how old are you?':
      return 'I am a fresh simulation AI made by Raigardas Tautkus for UNLOCKTests, and I am less than a week old.'
    case 'who are the co-founders of unlocktests?':
      return 'The co-founders of UNLOCK Tests are Giedrė Lečičkienė and Aistė Kratavičiūtė-Ališauskienė'
    case 'why does raigardas tautkus want to work at unlocktests?':
      return 'Raigardas Tautkus is really fascinated by the company and the people working there. He is also very interested in the field of psychology and he believes that working at unlocktests will be a great opportunity to begin a career as a full-stack developer in a company with great people!.'
    default:
      return `There is no answer for ${question} yet`
  }
}

const PORT = process.env.PORT || 5000
app.listen(PORT, () => console.log(`Server started on port ${PORT}`))
