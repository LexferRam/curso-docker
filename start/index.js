const express = require('express')
const axios = require('axios')

const app = express();

app.set('PORT', 3333)

app.get('/', async (req, res) => {
    let image = await axios.get('https://source.unsplash.com/random');
    res.send(`<img src="${image.request.res.responseUrl}"/>`)
})

app.listen(app.get('PORT'), () => {
    console.log(`Server listening on port ${app.get('PORT')}`)
})