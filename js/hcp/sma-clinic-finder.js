jQuery(function($) {
    // Asynchronously Load the map API
    var script = document.createElement('script');
    script.src = "//maps.googleapis.com/maps/api/js?sensor=false&callback=initialize";
    document.body.appendChild(script);
});

function initialize() {
    var map;
    var bounds = new google.maps.LatLngBounds();
    var mapOptions = {
        mapTypeId: 'roadmap'
    };

    // Display a map on the page
    map = new google.maps.Map(document.getElementById("map_canvas"), mapOptions);
    map.setTilt(45);

    // Multiple Markers
    var markers = [
        ['The Children’s Hospital at Westmead, NSW', -33.8024225,150.9883929],
        ['Sydney Children’s Hospital, NSW', -33.917408, 151.237604],
        ['Royal Children’s Hospital, VIC', -37.7936993, 144.9490846],
        ['Sydney Children’s Hospital, NSW', -27.48169036, 153.02645624],
        ['The Children’s Hospital at Westmead, NSW', -31.94527988, 115.8363542],
        ['Sydney Children’s Hospital, NSW', -34.9115459, 138.5999903]
    ];

    // Info Window Content
    var infoWindowContent = [
        ['<div class="info_content">' +
        '<p><b>The Children’s Hospital at Westmead</b></p>' +
        '<p>Children’s Assessment Centre (CAC) Level 3</p> <p>Cnr Hawkesbury Road and Hainsworth St</p> <p>Westmead NSW 2145</p>' +        '</div>'],
        ['<div class="info_content">' +
        '<p><b>Sydney Children’s Hospital</b></p>' +
        '<p>Randwick High Street</p>  <p>Randwick NSW 2031</p>' +
        '</div>'],
        ['<div class="info_content">' +
        '<p><b>Royal Children’s Hospital</b></p>' +
        '<p>50 Flemington Road</p> <p>Parkville VIC 3052</p>' +
        '</div>'],
        ['<div class="info_content">' +
        '<p><b>Lady Cilento Children’s Hospital</b></p>' +
        '<p>501 Stanley Street</p> <p>South Brisbane QLD 4101</p>' +
        '</div>'],
        ['<div class="info_content">' +
        '<p><b>Princess Margaret Hospital </b></p>' +
        '<p>Roberts Road</p> <p>Subiaco WA 6008</p>' +
        '</div>'],
        ['<div class="info_content">' +
        '<p><b>Womens and Childrens Hospital</b></p>' +
        '<p>72 King William Road</p> <p>North Adelaide SA 5006</p>' +
        '</div>']
    ];

    // Display multiple markers on a map
    var infoWindow = new google.maps.InfoWindow({maxWidth: 200}), marker, i;

    // Loop through our array of markers & place each one on the map
    for( i = 0; i < markers.length; i++ ) {
        var position = new google.maps.LatLng(markers[i][1], markers[i][2], markers[i][3], markers[i][4], markers[i][5], markers[i][6]);
        var markercustom = '/content/dam/commercial-au/specialty/sma/hcp/en_au/images/icons/marker-icon.png';

        bounds.extend(position);
        marker = new google.maps.Marker({
            position: position,
            map: map,
            title: markers[i][0],
            icon: markercustom
        });


        // Allow each marker to have an info window
        google.maps.event.addListener(marker, 'click', (function(marker, i) {
            return function() {
                infoWindow.setContent(infoWindowContent[i][0]);
                infoWindow.open(map, marker);
            }
        })(marker, i));

        // Automatically center the map fitting all markers on the screen
        map.fitBounds(bounds);
    }

    // Override our map zoom level once our fitBounds function runs (Make sure it only runs once)
    var boundsListener = google.maps.event.addListener((map), 'bounds_changed', function(event) {
        this.setZoom(4);
        google.maps.event.removeListener(boundsListener);
    });

}
