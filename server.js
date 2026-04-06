const express = require('express');
const app = express();

app.use(express.json());

const PORT = 3000;

let members = [];

// GET all members
app.get('/members', (req, res) => {
  res.json(members);
});

// ADD member
app.post('/members', (req, res) => {
  const member = req.body;
  members.push(member);
  res.json({ message: 'Member added', member });
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
