const express = require('express')
const dotenv= require('dotenv').config()
const app = express()
const port = process.env.PORT

app.get('/api/jokes', (req, res) => {
    const jokes = [
        {
            id: 1,
            title: 'A joke',
            content: 'This is a joke.'
        },
        {
            id: 2,
            title: 'Another joke',
            content: 'Why don’t skeletons fight each other? They don’t have the guts.'
        },
        {
            id: 3,
            title: 'Yet another joke',
            content: 'I told my wife she was drawing her eyebrows too high. She seemed surprised.'
        },
        {
            id: 4,
            title: 'Funny joke',
            content: 'I threw a boomerang a few years ago. Now I live in constant fear.'
        },
        {
            id: 5,
            title: 'Last joke',
            content: 'Why did the scarecrow win an award? Because he was outstanding in his field!'
        }
    ];
    
  res.send(jokes)
})


app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})