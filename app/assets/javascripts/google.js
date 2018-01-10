function initMap() {
    $(document).ready(function(){
    var marker;
    var pos;
    var address;
    var postal;
    var pais;
    var estado;
    var ciudad;
    var delegacion;
    var colonia;
    var calle;
    var numero;
    var locationlat;
    var locationlong;
    var geocoder = new google.maps.Geocoder;
    var infowindow = new google.maps.InfoWindow;
    var banderalocation = 1;
            
    var map = new google.maps.Map(document.getElementById('map'), {
    center: {lat: 19.3750089, lng: -99.1904728},
    zoom: 16,
    });
    
                       
    infoWindow = new google.maps.InfoWindow;
        
        /* BASE DE CONTAINS
        google.maps.event.addListener(map, 'click', function(e) {
        var resultColor =
        google.maps.geometry.poly.containsLocation(e.latLng, zonaReparto) ?
            alert('si esta') :
            alert('no esta');
        });
        */
        
        /*
        $('#siguiente-filtro').click(function(){
              google.maps.geometry.poly.containsLocation(pos, zonaReparto) ?
              alert('si esta') :
              alert('no esta');
          });
        */
                        
        //infoWindow = new google.maps.InfoWindow({map: map});
                        
        // Try HTML5 geolocation.
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(function(position) {
            pos = {
                lat: position.coords.latitude,
                lng: position.coords.longitude
            };
                 
            infoWindow.setPosition(pos);
            infoWindow.setContent('Location found.');
            map.setCenter(pos);
            
                             
            marker = new google.maps.Marker({
                position: pos,
                draggable: true
            });
                            
            // To add the marker to the map, call setMap();
            marker.setMap(map);
            
           
            
            geocoder.geocode({'location': pos}, function(results, status) {
              if (status === 'OK') {
                if (results[1]) {
                  //map.setZoom(13);
                  //var marker2 = new google.maps.Marker({
                  //position: pos,
                  //map: map
                  //});
                  address = results[0].address_components;
                  postal = address[address.length - 1].long_name;
                  pais = address[address.length - 2].long_name;
                  estado = address[address.length - 3].long_name;
                  ciudad = address[address.length - 4].long_name;
                  delegacion = address[address.length - 5].long_name;
                  colonia = address[address.length - 6].long_name;
                  calle = address[address.length - 7].long_name;
                  numero = address[address.length - 8].long_name;
                  
                  locationlat = results[0].geometry.location.lat();
                  locationlong = results[0].geometry.location.lng();
                  
                  $('#cp').val(postal);
                  $('#calle').val(calle.concat(" ").concat(numero));
                  $('#colonia').val(colonia);
                  $('#ciudad').val(ciudad);
                  $('#coords').val(locationlat+", "+locationlong);
                  $('#clat').text(locationlat+", "+locationlong);
                  
                  //infowindow.setContent(results[1].formatted_address);
                  //infowindow.open(map, marker2);
                } else {
                  window.alert('No results found');
                }
              } else {
                //window.alert('Geocoder failed due to: ' + status);
              }
            });
            
            
            
            google.maps.event.addListener(marker, 'dragend', function() {
                banderalocation = 1;
                var pos = marker.getPosition()
                
                geocoder.geocode({'location': pos}, function(results, status) {
                  if (status === 'OK') {
                    if (results[1]) {
                      //map.setZoom(13);
                      map.setCenter(pos);
                      //var marker2 = new google.maps.Marker({
                      //position: pos,
                      //map: map
                      //});
                      address = results[0].address_components;
                      postal = address[address.length - 1].long_name;
                      pais = address[address.length - 2].long_name;
                      estado = address[address.length - 3].long_name;
                      delegacion = address[address.length - 4].long_name;
                      ciudad = address[address.length - 5].long_name;
                      colonia = address[address.length - 6].long_name;
                      calle = address[address.length - 7].long_name;
                      numero = address[address.length - 8].long_name;
                     // infowindow.setContent(results[1].formatted_address);
                     // infowindow.open(map, marker2);
                     
                     locationlat = results[0].geometry.location.lat();
                     locationlong = results[0].geometry.location.lng();
                     
                    $('#cp').val(postal);
                    $('#calle').val(calle.concat(" ").concat(numero));
                    $('#colonia').val(colonia);
                    $('#ciudad').val(ciudad);
                    $('#coords').val(locationlat+", "+locationlong);
                    $('#clat').text(locationlat+", "+locationlong);
                    
                    } else {
                      window.alert('No results found');
                    }
                  } else {
                    //window.alert('Geocoder failed due to: ' + status);
                  }
                });
            });
            
            
            
                             
        },function() {
                handleLocationError(true, infoWindow, map.getCenter());
            },{timeout:10000});
        } else {
            // Browser doesn't support Geolocation
            handleLocationError(false, infoWindow, map.getCenter());
        }
    
    });
    }
