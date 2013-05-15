function initialize() {
    var myLatlng = new google.maps.LatLng(45.518965, 9.214319);

    var myOptions = {
        zoom: 14,
        center: myLatlng,
        navigationControl: true,
        navigationControlOptions: {
            style: google.maps.NavigationControlStyle.SMALL
        },
        mapTypeControl: false,
        scrollwheel: false,
        mapTypeId: google.maps.MapTypeId.ROADMAP
    }

    var map = new google.maps.Map(document.getElementById("gmap_canvas"), myOptions);

    var rubypin = new google.maps.MarkerImage('/images/rubypin.png');
    var shadow = new google.maps.MarkerImage('/images/rubypin_shadow.png',
        new google.maps.Size(42, 22),
        new google.maps.Point(0,0),
        new google.maps.Point(16, 22)
    );
    var marker = new google.maps.Marker({
        position: myLatlng,
        map: map,
        animation: google.maps.Animation.DROP,
        icon: rubypin,
        shadow: shadow
    });

    var infoWindowContent = '<div id="gmap_info_window_content">' +
        '<h4 class="red-color">RubyDay 2013</h4>' +
        '<strong>Building U6</strong><br />' +
        "Piazza dell'Ateneo Nuovo, 1<br />" +
        '20126, Milan<br />' +
        '<a href="https://maps.google.com/maps?q=Piazza+dell%27Ateneo+Nuovo,+Milan,+Province+of+Milan,+Italy&hl=en&ll=45.518963,9.214311&spn=0.010464,0.022724&sll=45.518015,9.216027&sspn=0.010464,0.022724&oq=piaz&hnear=Piazza+dell%27Ateneo+Nuovo,+Milano,+Lombardia,+Italy&t=m&z=16" target="_blank">Google Maps &#x2192;</a>' +
        '</div>';
    var infoWindow = new google.maps.InfoWindow({
        content: infoWindowContent
    });

    google.maps.event.addListener(marker, 'click', function() {
        infoWindow.open(map, marker);
    });
}

// Asynchronously loading of the API
function loadScript() {
    var script = document.createElement("script");
    script.type = "text/javascript";
    script.src = "http://maps.googleapis.com/maps/api/js?key=AIzaSyAA2-g_xQA8xOQWSbGLQdbYC5V-rot63RE&sensor=false&callback=initialize";
    document.body.appendChild(script);
}

window.onload = loadScript;
