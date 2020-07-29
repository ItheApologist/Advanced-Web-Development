var express = require('express')
    app = express()
    // port = process.env.PORT || 3000,
    bodyParser = require('body-parser');

var todoRoutes = require('./routes/todos');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static(__dirname + '/views'));
app.use(express.static(__dirname + '/public'));

app.get('/', function(req, res) {
    res.sendFile("index.html")
})

app.use('/api/todos', todoRoutes)

app.listen(3000, function() {
    console.log("App available at http://localhost:3000")
})