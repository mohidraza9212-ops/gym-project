const express = require('express')
const app = express()

app.use(express.json())
app.use(express.static('public'))

// In-memory data
let members = [
  { id: 1, name: 'Ali Hassan',  email: 'ali@gmail.com',  phone: '0300-1111111', plan: 'Monthly'   },
  { id: 2, name: 'Sara Khan',   email: 'sara@gmail.com', phone: '0311-2222222', plan: 'Quarterly' },
  { id: 3, name: 'Ahmed Raza',  email: 'ahmed@gmail.com',phone: '0321-3333333', plan: 'Yearly'    },
]
let nextId = 4

// GET all members
app.get('/api/members', (req, res) => {
  res.json(members)
})

// POST add member
app.post('/api/members', (req, res) => {
  const m = { id: nextId++, ...req.body }
  members.push(m)
  res.json(m)
})

// PUT update member
app.put('/api/members/:id', (req, res) => {
  const i = members.findIndex(m => m.id == req.params.id)
  members[i] = { ...members[i], ...req.body }
  res.json(members[i])
})

// DELETE member
app.delete('/api/members/:id', (req, res) => {
  members = members.filter(m => m.id != req.params.id)
  res.json({ ok: true })
})

app.listen(3000, () => console.log('Running at http://localhost:3000'))
