const express = require("express")
const app = express()
app.use(express.json())
const port = 3000

//require mongoDB connection
require('./configration/mongo')
//require routes
require('./routes/index')(app)
<<<<<<< HEAD
=======

>>>>>>> fa79e6613bea5457155918638ed81d6a7f2ef8de

app.listen(port, () => {
    console.log(`congratulation !! server is listening on ${port}`)
})
