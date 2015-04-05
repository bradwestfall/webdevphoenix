$(function() {

    $('button').on('click', function() {
        $('.page').toggleClass('full-map');
    });

    var map = new GMaps({
      div: '#map',
      lat: 33.4479042,
      lng: -112.0620954,
      zoom: 10
    });

    $.get('companies.json', function(data) {

        var markers = [];

        for (i in data) {
            var company = data[i];
            markers.push({
                lat: company.lat,
                lng: company.lng,
                title: company.name,
                click: function(e) {
                    console.log(e);
                }
            });
            console.log(company);
        }

        map.addMarkers(markers);

    });


});