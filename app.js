const EventEmitter = require('events');
const emitter = new EventEmitter();

//Событие - авторизация
emitter.on('Login', function (UserName, LoginTime, status) {
    var fs = require('fs');
    //запись в лог-файл
    if (status) {
        fs.appendFileSync('messages', '\n' + LoginTime + ' Пользователь ' + UserName + ' успешно вошёл в систему');
        console.log(LoginTime + ' Пользователь ' + UserName + ' успешно вошёл в систему');
    } else {
        fs.appendFileSync('messages', '\n' + LoginTime + ' Пользователь ' + UserName + ' ошибка авторизации');
        console.log(LoginTime + ' Пользователь ' + UserName + ' ошибка авторизации');
    }

});

//Событие - выход из аккаунта
emitter.on('Logout', function (UserName, LogoutTime) {
    var fs = require('fs');
    //запись в лог-файл
    fs.appendFileSync('messages', '\n' + LogoutTime + ' Пользователь ' + UserName + ' вышел из системы');
    console.log(LogoutTime + ' Пользователь ' + UserName + ' вышел из системы');
});

//Событие - отправка письма с сайта
emitter.on('sendMail', function (SendTime, UserName, From, To, Subject, data) {
    var fs = require('fs');
    var nodemailer = require('nodemailer');
    var transporter = nodemailer.createTransport({
        service: 'Gmail',
        auth: {
            user: 'imtjs44@gmail.com',
            pass: 'l;fdfcrhbgn78'
        }
    });

    var mailOptions = {
        from: From,
        to: To,
        subject: Subject,
        text: data
    };

    transporter.sendMail(mailOptions, function (error, info) {
        if (error) {
            console.log(error);
        } else {
            //запись в лог-файл
            fs.appendFileSync('messages', '\n' + SendTime + ' Пользователь ' + UserName + ' отправил письмо на адрес ' + To);
            console.log('Email sent: ' + info.response);
        }
    });
});


emitter.emit('sendMail', '13:00', 'Spammer', 'imtjs44@gmail.com', 'csat.vip@gmail.com', 'Тестовое сообщение', 'Это письмо сгенерировано Node.js');

emitter.emit('Login', 'HellBoy', '12:05', false);

emitter.emit('Login', 'Hannibal Lecter', '12:00', true);

emitter.emit('Logout', 'Hannibal Lecter', '21:00');
//Решение задачи запуска скрипта в фоне и мониторинга состояния сервера: forever start -c nodemon app.js

