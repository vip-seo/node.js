const Converter = require('./converter_new');
const request = require('request');
const http = require('http');
const url = 'https://api.privatbank.ua/p24api/pubinfo?json&exchange&coursid=5';
const port = 3000;
let baseCurrencyUs;
var parsedData;
let conv = new Converter(baseCurrencyUs);

http.createServer(function (req, res) {
    recieve(res);
   
}).listen(port);

function recieve(res) {
    request(url, function (error, response, data) {
        parsedData = JSON.parse(data);
        for (var key in parsedData) {
            if (parsedData[key]['ccy'] == 'USD')
                baseCurrencyUs = +parsedData[key]['buy'];
        }
        res.writeHead(200, {
            'Content-Type': 'text/html; charset=utf8'
        });
        res.write('Текущий курс доллара ' + baseCurrencyUs + ' гривен за 1 доллар');
        res.end();
    });
}

    console.log(conv.convertToUa(100));
    console.log(conv.convertToUs(50000));
