// Función para inicializar el mapa
function initMap() {
  // Obtener la geolocalización de donde estoy
  navigator.geolocation.getCurrentPosition(function(position) {
    let lati = position.coords.latitude;
    let long = position.coords.longitude;

    // Crear objeto de mapa
    let map = new google.maps.Map(document.getElementById('map'), {
      center: {lat: lati, lng: long},
      zoom: 10
    });

    // Crear marcadores en diferentes lugares
    let marker0 = new google.maps.Marker({
      position: {lat: lati, lng: long},
      map: map,
      title: 'Casa'
    });
    let marker1 = new google.maps.Marker({
      position: {lat: -2.15234, lng: long + 0.1},
      map: map,
      title: 'Punta Blanca'
    });

    let marker2 = new google.maps.Marker({
      position: {lat: -2.18836, lng: -81.01058},
      map: map,
      title: 'La Lobatera'
    });

    let marker3 = new google.maps.Marker({
      position: {lat: -2.28000, lng: -80.91823},
      map: map,
      title: 'Punta Carnero'
    });
  });
}
