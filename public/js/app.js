//Create a single global variable
var MAPAPP = {};
MAPAPP.markers = [];
MAPAPP.currentInfoWindow;
MAPAPP.pathName = window.location.pathname;

$(document).ready(function() {
    initialize();
    populateMarkers(MAPAPP.pathName);
});


//Initialize our Google Map
function initialize() {
    var center = new google.maps.LatLng(40.101, -96.62);
    var mapOptions = {
        zoom: 4,
        mapTypeId: google.maps.MapTypeId.ROADMAP,
        center: center,
    };
    this.map = new google.maps.Map(document.getElementById('map_canvas'),
        mapOptions);

};

// Fill map with markers
function populateMarkers(dataType) {
    // apiLoc = typeof apiLoc !== 'undefined' ? apiLoc : '/data/' + dataType + '.json';
    // jQuery AJAX call for JSON
    $.getJSON('/data/policewatchdata.json', function(data) {

        $.each(data, function(i, ob) {
            var marker = new google.maps.Marker({
                map: map,
                position: new google.maps.LatLng(this.lat, this.lon),
                icon: 'http://maps.google.com/mapfiles/ms/icons/red-dot.png'
            });

            var content = 'Name: ' + this.name +
                        '<br>Age: ' + this.age +
                        '<br>Sex: ' + this.sex +
                        '<br>Race: ' + this.race +
                        '<br>Cause: ' + this.cause +
                        '<br>Armed: ' + this.armed +
                        '<br>Dept: ' + this.dept;

        	marker.infowindow = new google.maps.InfoWindow({
            	content: content,
            	maxWidth: 400
            });

            google.maps.event.addListener(marker, 'click', function() {
                if (MAPAPP.currentInfoWindow) MAPAPP.currentInfoWindow.close();
                marker.infowindow.open(map, marker);
                MAPAPP.currentInfoWindow = marker.infowindow;
            });
            MAPAPP.markers.push(marker);
        });
        var markerCluster = new MarkerClusterer(map, MAPAPP.markers,
            {imagePath: '/images/m'});
    });
};
