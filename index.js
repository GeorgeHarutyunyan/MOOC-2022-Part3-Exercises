const express = require('express')
const app = express()

let contacts = [
    { 
      "id": 1,
      "name": "Arto Hellas", 
      "number": "040-123456"
    },
    { 
      "id": 2,
      "name": "Ada Lovelace", 
      "number": "39-44-5323523"
    },
    { 
      "id": 3,
      "name": "Dan Abramov", 
      "number": "12-43-234345"
    },
    { 
      "id": 4,
      "name": "Mary Poppendieck", 
      "number": "39-23-6423122"
    }
]

app.use(express.json())

app.get('/', (req, res) => res.send('Hello World!'))

app.get('/api/persons', (req, res) => res.json(contacts))


const PORT = 3001
app.listen(PORT, () => console.log(`Listening to server on port ${PORT}`))