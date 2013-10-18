/*global
    FirmCard:false
*/
// FirmCard.dictionary = {};

FirmCard.prototype.dict = {

    t: function (lang, msg, argument) { // (String, Number) -> String
        var result,
            msgIsset = false,
            dictionaryMsg,
            exp;

        if (typeof this[lang] === 'undefined') {
            lang = 'ru';
        }
        dictionaryMsg = this[lang][msg];
        msgIsset = typeof dictionaryMsg !== 'undefined';
        if (!msgIsset) {
            return msg;
        }
        result = msgIsset ? dictionaryMsg : msg;

        if (argument !== undefined) {
            argument = parseInt(argument, 10);
            argument = isNaN(argument) ? 0 : argument;
            exp = this[lang].pluralRules(argument);
            result = argument + ' ' + dictionaryMsg[exp];
        }
        return result ? result : msg;
    },

    ru: {
        pluralRules: function (n) { // (Number)
            if (n % 10 === 1 && n % 100 !== 11) { // 1, 21
                return 0;
            }
            if ((n % 10 >= 2 && n % 10 <= 4 && (n % 10) % 1 === 0) && (n % 100 < 12 || n % 100 > 14)) { // 2, 3
                return 1;
            }

            if ((n % 10 === 0) || (n % 10 >= 5 && n % 10 <= 9 && (n % 10) % 1 === 0) || (n % 100 >= 11 && (n % 100) <= 14 && (n % 100) % 1 === 0)) { // 13, 17
                return 2;
            }
        },

        btnBack: 'Назад',
        btnFindWay: 'Проехать сюда',
        btnEntrance: 'Найти вход',
        linkReviews: ['отзыв', 'отзыва', 'отзывов'],
        linkPhoto: ['фото', 'фото', 'фото'],
        linkBooklet: ['Подробнее'],
        stars: 'звёзд',
        tommorow: 'завтра',
        afterTommorow: 'послезавтра',
        afterWeek: 'через неделю',
        nextSun: 'в воскресенье',
        nextMon: 'в понедельник',
        nextTue: 'во вторник',
        nextWed: 'в среду',
        nextThu: 'в четверг',
        nextFri: 'в пятницу',
        nextSat: 'в субботу',
        willOpen: 'откроется',
        willClose: 'закроется',
        isOpen: 'Открыто',
        openTill: 'Открыто до ',
        closeIn: 'Закроется через ',
        openAt: 'Откроется в ',
        openIn: 'Откроется через ',
        open: 'Откроется ',
        nHours: ['час', 'часа', 'часов'],
        nMins: ['минуту', 'минуты', 'минут'],
        lunch: 'обед',
        Lunch: 'Обед. ',
        workingDays: 'Рабочие дни',
        weekdays: 'Будние дни',
        restDay: 'выходной',
        reviewsOnFlamp: 'Отзывы на Флампе',
        writeReviewOnFlamp: 'Написать отзыв на Флампе',
        payment: 'оплата',
        everyday: 'Ежедневно',
        worksAroundTheClock: 'Работает круглосуточно',
        aroundTheClock: 'Круглосуточно',
        knowMore: 'узнать больше',
        toClose: 'до закрытия',
        monday: 'понедельник',
        tuesday: 'вторник',
        wednesday: 'среда',
        thursday: 'четверг',
        friday: 'пятница',
        saturday: 'суббота',
        sunday: 'воскресенье',
        toLunch: 'до обеда',
        today: 'Сегодня',
        lessThenHour: 'менее часа',
        youCouldLate: 'вы можете не успеть',
        workingTime: 'рабочее время',
        showAllOrgInRubric: 'Показать все организации рубрики',
        todayIsRestDay: 'Сегодня выходной',
        internet: 'Оплата через Интернет',
        noncash: 'Безналичный расчет',
        goldcrown: 'Золотая Корона',
        dinersclub: 'Diners Club',
        mastercard: 'Mastercard',
        visa: 'Visa',
        cash: 'Наличный расчет',
        americanexpress: 'American Express',
        hour : 'час',
        less: 'менее',
        'in' : 'Через',
        isClosingOnDinner : ' закрывается на обед'
    },

    it: {
        pluralRules: function (n) { // (Number)
            if (n === 1) { // 1
                return 0;
            }
            if (n >= 2) { // 2, 3, 4 ..
                return 1;
            }
        },

        btnBack: 'it Назад',
        btnFindWay: 'it Проехать сюда',
        btnEntrance: 'it Найти вход',
        linkReviews: ['it отзыв', 'it отзыва', 'it отзывов'],
        linkPhoto: ['it фото'],
        linkBooklet: ['it Подробнее'],
        stars: 'it звёзд',
        tommorow: 'it завтра',
        afterTommorow: 'it послезавтра',
        afterWeek: 'it через неделю',
        nextSun: 'it в воскресенье',
        nextMon: 'it в понедельник',
        nextTue: 'it во вторник',
        nextWed: 'it в среду',
        nextThu: 'it в четверг',
        nextFri: 'it в пятницу',
        nextSat: 'it в субботу',
        willOpen: 'it откроется',
        willClose: 'it закроется',
        isOpen: 'it Открыто',
        openTill: 'it Открыто до ',
        closeIn: 'it Закроется через ',
        openAt: 'it Откроется в ',
        openIn: 'it Откроется через ',
        open: 'it Откроется ',
        nHours: ['it час', 'it часа', 'it часов'],
        nMins: ['it минуту', 'it минуты', 'it минут'],
        lunch: 'it обед',
        Lunch: 'it Обед',
        workingDays: 'it Рабочие дни',
        restDay: 'it выходной',
        reviewsOnFlamp: 'it Отзывы на Флампе',
        writeReviewOnFlamp: 'it Написать отзыв на Флампе',
        payment: 'it оплата',
        everyday: 'it Ежедневно',
        worksAroundTheClock: 'it Работает круглосуточно',
        knowMore: 'it узнать больше',
        toClose: 'it до закрытия',
        monday: 'it понедельник',
        tuesday: 'it вторник',
        wednesday: 'it среда',
        thursday: 'it четверг',
        friday: 'it пятница',
        saturday: 'it суббота',
        sunday: 'it воскресенье',
        toLunch: 'it до обеда',
        today: 'it Сегодня',
        lessThenHour: 'it менее часа',
        youCouldLate: 'it вы можете не успеть',
        workingTime: 'it рабочее время',
        showAllOrgInRubric: 'it Показать все организации рубрики',
        todayIsRestDay: 'it Сегодня выходной',
        internet: 'it Оплата через Интернет',
        noncash: 'it Безналичный расчет',
        goldcrown: 'it Золотая Корона',
        dinersclub: 'it Diners Club',
        mastercard: 'it Mastercard',
        visa: 'it Visa',
        cash: 'it Наличный расчет',
        americanexpress: 'it American Express',
        hour : 'it час',
        less: 'it менее'
    },

    en: {
        pluralRules: function (n) { // (Number)
            if (n === 1) { // 1
                return 0;
            }
            if (n >= 2) { // 2, 3, 4 ..
                return 1;
            }
        },

        btnBack: 'en Назад',
        btnFindWay: 'en Проехать сюда',
        btnEntrance: 'en Найти вход',
        linkReviews: ['en отзыв', 'en отзыва', 'en отзывов'],
        linkPhoto: ['en фото'],
        linkBooklet: ['en Подробнее'],
        stars: 'en звёзд',
        tommorow: 'en завтра',
        afterTommorow: 'en послезавтра',
        afterWeek: 'en через неделю',
        nextSun: 'en в воскресенье',
        nextMon: 'en в понедельник',
        nextTue: 'en во вторник',
        nextWed: 'en в среду',
        nextThu: 'en в четверг',
        nextFri: 'en в пятницу',
        nextSat: 'en в субботу',
        willOpen: 'en откроется',
        willClose: 'en закроется',
        isOpen: 'en Открыто',
        openTill: 'en Открыто до ',
        closeIn: 'en Закроется через ',
        openAt: 'en Откроется в ',
        openIn: 'en Откроется через ',
        open: 'en Откроется ',
        nHours: ['en час', 'часа', 'часов'],
        nMins: ['en минуту', 'минуты', 'минут']
    },

    cs: {
        pluralRules: function (n) { // (Number)
            if (n === 1) { // 1
                return 0;
            }
            if (n >= 2) { // 2, 3, 4 ..
                return 1;
            }
        },

        btnBack: 'cs Назад',
        btnFindWay: 'cs Проехать сюда',
        btnEntrance: 'cs Найти вход',
        linkReviews: ['cs отзыв', 'cs отзыва', 'cs отзывов'],
        linkPhoto: ['cs фото'],
        linkBooklet: ['cs Подробнее'],
        stars: 'cs звёзд',
        tommorow: 'cs завтра',
        afterTommorow: 'cs послезавтра',
        afterWeek: 'cs через неделю',
        nextSun: 'cs в воскресенье',
        nextMon: 'cs в понедельник',
        nextTue: 'cs во вторник',
        nextWed: 'cs в среду',
        nextThu: 'cs в четверг',
        nextFri: 'cs в пятницу',
        nextSat: 'cs в субботу',
        willOpen: 'cs откроется',
        willClose: 'cs закроется',
        isOpen: 'cs Открыто',
        openTill: 'cs Открыто до ',
        closeIn: 'cs Закроется через ',
        openAt: 'cs Откроется в ',
        openIn: 'cs Откроется через ',
        open: 'cs Откроется ',
        nHours: ['cs час', 'часа', 'часов'],
        nMins: ['cs минуту', 'минуты', 'минут']
    }
};
