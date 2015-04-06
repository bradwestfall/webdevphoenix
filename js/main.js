$(function() {
    (function() {

        var mapElement = document.querySelector('.map');

        if (mapElement) {

            var map = new GMaps({
              div: mapElement,
              lat: 33.4479042,
              lng: -112.0620954,
              zoom: 10
            });

            $.get('/companies.json', function(data) {

                var markers = [];

                for (i in data) {
                    var company = data[i];
                    if (!company.lat || !company.lng) continue;
                    markers.push({
                        lat: company.lat,
                        lng: company.lng,
                        title: company.name,
                        details: {
                            url: company.url
                        },
                        click: function(e) {
                            location.href = e.details.url
                        }
                    });
                }

                map.addMarkers(markers);

            });
        }

    })();
});