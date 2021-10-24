const mongoose = require ( 'mongoose')
mongoose.promise = require ( 'bluebird')
let dbUrl='mongodb://localhost:27017/schoolDB'
let dbUrl1='mongodb://localhost:27017/studentDB'
mongoose.connect(dbUrl)
mongoose.connect(dbUrl1)

// when we connected successfully
mongoose.connection.on('connected', function(){
    console.log(' we connected with mongoose ')

});

// when connection trow error

mongoose.connection.on('error', function(error){
console.log('mongoose connection error'+ error)
});

// when we disconnect

mongoose.connection.on('disconnected', function(){
    console.log(' mongoose connection disconnected')
});