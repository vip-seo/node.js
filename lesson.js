var fs = require('fs');

fs.appendFileSync('test.txt', 'Hello content!'); //добавляет в файл данные, если файла нет - создаёт, НЕ перезаписывает, а добавляет в конец файла
console.log(fs.readFileSync('mynewfile2.txt', 'utf-8')); // читаем и выводим файл
fs.writeFileSync('test.txt', 'Hello content!'); // перезаписывает файл и его содержимое если он был, или же создаёт новый файл с указанными данными
fs.openSync('test.txt', 'w'); // открывает файл или создаёт его, с флагами. w - для записи

fs.appendFileSync('test.txt', '\n' + 'Hello content!'); //добавляем с переносом строки

var nodemailer = require('nodemailer');
var transporter = nodemailer.createTransport({
    service: 'Gmail',
    auth: {
      user: 'imtjs44@gmail.com',
      pass: 'l;fdfcrhbgn78'
    }
  });
  
  var mailOptions = {
    from: 'imtjs44@gmail.com',
    to: 'csat.vip@gmail.com',
    subject: 'Письмо с использованием node.js',
    text: 'Тест!'
  };
  
  transporter.sendMail(mailOptions, function(error, info){
    if (error) {
      console.log(error);
    } else {
      console.log('Email sent: ' + info.response);
    }
  });
//Прежде всего, вы должны включить настройки, чтобы разрешить менее безопасные приложения для учетной записи Gmail, которую вы используете. Вот ссылка: https://myaccount.google.com/lesssecureapps
//Во-вторых, разрешить доступ к опции "Показать разблокировку капча" (разрешить доступ к вашей учетной записи Google). Вот ссылка: https://accounts.google.com/DisplayUnlockCaptcha