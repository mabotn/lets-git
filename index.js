var express = require('express'),
    port = process.env.PORT | 1337,
    app = express()

app.use(express.static('public'))
app.listen(port)