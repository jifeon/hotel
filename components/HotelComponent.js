var Component = require('autodafe').Component;

// todo: use post queries

/**
 * @class HotelComponent
 * @extends Component
 */
var HotelComponent = module.exports = Component.extend(/**@lends HotelComponent*/{
    processRequest: function (request, callback) {
        switch (request.getPath()) {
            case '/book':
                this._bookRoom(request, callback);
                break;

            case '/feedback':
                this._sendFeedback(request, callback);
                break;

            default:
                callback();
        }
    },

    _bookRoom: function (request, callback) {
        var params = request.getParams(),
            checkIn = params['checkin'].substr(0, 10).replace(/[^\d.]/g, ''),
            checkOut = params['checkout'].substr(0, 10).replace(/[^\d.]/g, ''),
            phone = params['phone'].substr(0, 30).replace(/[^\d \(\).-]/g, '');
        this._app.get('mail').sendMessage({
            subject: 'Бронирование номера',
            text: 'Дата заезда: ' + checkIn + '\n' +
                'Дата отъезда: ' + checkOut + '\n' +
                'Контактный телефон: ' + phone
        });
        request.end('ok');
        callback();
    },

    _sendFeedback: function (request, callback) {
        var params = request.getParams(),
            name = params['name'].substr(0, 50).replace(/[^a-zа-яё -]/gi, ''),
            email = params['email'].substr(0, 100),
            phone = params['phone'].substr(0, 30).replace(/[^\d \(\).-]/g, ''),
            message = params['message'].substr(0, 10000);
        this._app.get('mail').sendMessage({
            from: name + ' <' + email + '>',
            subject: 'Отзыв клиента',
            text: 'Имя: ' + name + '\n' +
                'Контактный телефон: ' + phone + '\n' +
                'Контактный email: ' + email + '\n' +
                'Сообщение:\n\n' + message
        });
        request.end('ok');
        callback();
    }
});