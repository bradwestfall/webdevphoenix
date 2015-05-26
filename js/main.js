$(function() {
    (function() {

        var map = {

            /**
             * Initialize
             */
            initialize: function(el) {
            
                // Get the map's region or language
                this.region = $(el).data('region');
                this.language = $(el).data('language');

                // Start a new GMap
                this.gMap = new GMaps({
                  div: mapElement,
                  lat: 33.4479042,
                  lng: -112.0620954,
                  zoom: 9
                });

                // Plot
                this.plot();

            },

            /**
             * Plot Markers
             */
            plot: function() {
                var self = this;
                $.get('/companies.json', function(data) {
                    
                    // An array of markers
                    var markers = [];

                    // Iterate all markers
                    for (i in data) {
                        var company = data[i];

                        // Company must have a lat and long
                        if (!company.lat || !company.lng) continue;

                        // Only plot companies that match the region or language
                        if (self.language && company.stack.split(',').indexOf(self.language) < 0) continue;
                        if (self.region && company.region.split(',').indexOf(self.region) < 0) continue;

                        // Create a marker object
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

                    // Add the markers to GMaps
                    self.gMap.addMarkers(markers);

                });
            }

        }

        /**
         * If the map element is available
         */
        var mapElement = document.querySelector('.map');
        if (mapElement) {
            map.initialize(mapElement);
        }

    })();
});
