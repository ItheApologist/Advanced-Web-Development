var express = require('express')
    app = express()
    // port = process.env.PORT || 3000,
    bodyParser = require('body-parser');

var todoRoutes = require('./routes/todos');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}))

app.listen(3000, function() {
    console.log("App is running on port 3000")
})

app.get('/', function(req, res) {
    res.send("App is working")
})

app.use('/api/todos', todoRoutes)