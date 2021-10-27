const express = require("express")
const app = express()
app.use(express.json())
const port = 3000

//require mongoDB connection
require('./configration/mongo')
//require routes
require('./routes/index')(app)

app.listen(port, () => {
    console.log(`congratulation !! server is listening on ${port}`)
})
