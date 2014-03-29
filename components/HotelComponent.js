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
        console.log(request);
        this._app.get('mail').sendMessage({
            subject: 'Бронирование номера',
            text: '<a href="http://google.com">google</a>' + Object.keys(request.getParams())
        });
        callback();
    },

    _sendFeedback: function (request, callback) {
        console.log(request);
        this._app.get('mail').sendMessage({
            subject: 'Отзыв клиента',
            text: '<a href="http://google.com">google</a>' + Object.keys(request.getParams())
        });
        callback();
    }
});