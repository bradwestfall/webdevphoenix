$(function() {

    var mapElement = document.querySelector('.map');

    // var map = new GMaps({
    //   div: mapElement,
    //   lat: 33.4479042,
    //   lng: -112.0620954,
    //   zoom: 10
    // });


    $.get('/companies.json', function(data) {

        console.log(data);

        // var markers = [];

        // for (i in data) {
        //     var company = data[i];
        //     markers.push({
        //         lat: company.lat,
        //         lng: company.lng,
        //         title: company.name,
        //         click: function(e) {
        //             console.log(e);
        //         }
        //     });
        //     console.log(company);
        // }

        // map.addMarkers(markers);

    }).fail(function(e) {

        console.error('XHR Error');

    });


});