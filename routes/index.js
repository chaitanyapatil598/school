module.exports=(app)=>{
   
   // welcome test api
    app.get('/', (req, res) => {
        console.log('hello from client')
        try {
            return res.status(200).send({
                massage: ' welcome to school API',
                status: true,
                statusCode: 200
            }
            )
        } catch (error) {
            return res.status(500).send({
                message: "internal server error",
                status: false,
                statusCode: 500,
                error
            })
        }
    })
}