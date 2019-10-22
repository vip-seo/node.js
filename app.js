const express = require('express');
const bodyParser = require('body-parser');
const port = 3000;
const app = express();

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))
 
// parse application/json
app.use(bodyParser.json())

const courses = [
    {
        id: 1,
        name: 'Node.js'
    },
    {
        id: 2,
        name: 'Angular'
    },
    {
        id: 3,
        name: 'JQuery'
    }
];

app.get('/', function (req, res) {
    res.send('Hello world');
});

app.get('/api/courses', function (req, res) {
    res.send(courses);
});

app.get('/api/courses/:id', function (req, res) {
    //console.log(typeof req.params.id);
    let course = courses.find(function(course){
        return course.id === parseInt(req.params.id);
    });
    res.send(course);
});

app.post('/api/courses', function(req, res){
    let course = {
        id: Date.now(),
        name: req.body.name
    }
    courses.push(course);
    res.send(courses);
});

app.listen(port, function () {
    console.log('Server at http://localhost:3000');
});


//CRUD
//--------------------------
//CREATE - POST
//READ - GET
//UPDATE - PUT
//DELETE - DELETE
