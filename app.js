const express = require('express');
const port = 3000;
const app = express();

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
app.listen(port, function () {
    console.log('Server at http://localhost:3000');
});


//CRUD
//--------------------------
//CREATE - POST
//READ - GET
//UPDATE - PUT
//DELETE - DELETE
