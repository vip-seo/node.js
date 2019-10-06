//Вывод данных JSON в консоль
// и по адресу http://localhost:3001/
//
//
var https = require('https');
https.get('https://api.privatbank.ua/p24api/pubinfo?json&exchange&coursid=3&fbclid=IwAR189Exxxx_ZwKcaPCZl7EnJ1v-yc0A3ApLGt56lxrq-w0oPCFykvk2el00', function (res) {
    res.setEncoding('utf8');
    let rawData = '';
    res.on('data', function (chunk) {
        //получаем содержимое ссылки в строку
        rawData += chunk;
    });
    res.on('end', function () {
        try {
            //преобразуем строку в объект
            const parsedData = JSON.parse(rawData);
            //выводим в консоль данные
            console.log(parsedData);

            const http = require('http'),
                fs = require('fs');
            http.createServer(function (req, res) {
                if (req.url === '/') {
                    res.writeHead(200, {
                        'Content-Type': 'text/html; charset=utf8'
                    });
                    var index = fs.readFileSync('index_serv.html');
                    res.write(index);
                    for (var key in parsedData) {
                        var str = '<p>' + parsedData[key]['ccy'] + '  |  ' + parsedData[key]['buy'] + '  |  ' + parsedData[key]['sale'] + '</p>';
                        res.write(str);
                    }
                    res.end();
                    //Ссылка для проверки http://localhost:3001/
                }
            }).listen(3001, function () {
                console.log('Server at http://localhost:3001');
            });
        } catch (e) {
            console.error(e.message);
        }
    });
}).on('error', function (e) {
    console.error(`Got error: ${e.message}`);
});
