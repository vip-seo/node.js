//Прибавление интервала к текущей дате в формате (год, месяц, день, час, минута)
//
module.exports.addInterval = function (years, months, days, hours, minutes) {
    var today = new Date();
    var future, newYear, newMonth, newDay, newHour, newMinute;

    newYear = years ? today.getFullYear() + years : today.getFullYear();
    newMonth =  months ? today.getMonth() + months : today.getMonth();
    newDay = days ? today.getDate() + days : today.getDate();
    newHour = hours ? today.getHours() + hours : today.getHours();
    newMinute = minutes ? today.getMinutes() + minutes : today.getMinutes();
    future = new Date(newYear, newMonth, newDay, newHour, newMinute);
    return future.toString('dd.MM.yyyy hh:mm');
};

//Вычитание интервала из текущей дате в формате (год, месяц, день, час, минута)
//
module.exports.subtInterval = function (years, months, days, hours, minutes) {
    var today = new Date();
    var past, newYear, newMonth, newDay, newHour, newMinute;

    newYear = years ? today.getFullYear() - years : today.getFullYear();
    newMonth =  months ? today.getMonth() - months : today.getMonth();
    newDay = days ? today.getDate() - days : today.getDate();
    newHour = hours ? today.getHours() - hours : today.getHours();
    newMinute = minutes ? today.getMinutes() - minutes : today.getMinutes();
    past = new Date(newYear, newMonth, newDay, newHour, newMinute);
    return past.toString('dd.MM.yyyy hh:mm');
};

//Вычитание двух временных интервалов (dd.mm.yyyy, dd.mm.yyyy)
//
module.exports.diffInterval = function (interval1, interval2) {
    
};
