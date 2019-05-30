const express = require('express')
const app = express()
app.get('/', (req, res) => res.end('Hello Branch Wodgy'))
app.listen(8080, () => console.log('Server Started'))
