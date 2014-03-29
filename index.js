require('autodafe').config({
    components: {
        http: {
            port: 3000
        },
        mail: {
            smtp: {
                user: 'florenciahotel43',
                password: '123123Nm,',
                host: 'smtp.gmail.com',
                ssl: true
            },
            defaultMessage: {
                to: 'florenciahotel43@gmail.com',
                from: 'florenciahotel43@gmail.com'
            }
        },
        hotel: {
            path: 'components/HotelComponent'
        }
    }
});