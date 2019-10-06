//Сервер на порту 3001
//
//
const http = require('http'),
      fs = require('fs');
http.createServer(function (req, res) {
    if (req.url === '/') {
        res.write('Hello World!');
        res.end();
        // Ссылка для быстрой проверки http://localhost:3001
    } else if (req.url === '/about') {
        console.log(req);
        res.end();
        // Ссылка для быстрой проверки http://localhost:3001/about результат в консоли
    } else if (req.url === '/contact') {
        fs.readFile('index.html', 'utf-8', function(err, data) {
            if (err) throw err;
            res.write(data);
            res.end();
            // Ссылка для быстрой проверки http://localhost:3001/contact
        });
    }
}).listen(3001, function () {
    console.log('Server at http://localhost:3001');
});