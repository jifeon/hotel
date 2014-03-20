/*global $:false, ymaps:false*/
$(function () {
    $('.date-picker').each(function () {
        $(this).datetimepicker({
            language: 'ru'
        });
    });

    $('.thumbnail .btn').click(function (e) {
        e.preventDefault();
        $(e.currentTarget).closest('.thumbnail').find('a[data-gallery]:first').click();
    });

    var myLatLng = new google.maps.LatLng(59.397821,48.970585);
    var mapOptions = {
        center: myLatLng,
        zoom: 16
    };
    var map = new google.maps.Map(document.getElementById("map"),
        mapOptions);

    new google.maps.Marker({
        position: myLatLng,
        map: map,
        title: 'Гостиница Флоренция'
    });
});