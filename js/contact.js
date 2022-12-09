let map;

function initMap() {
  map = new google.maps.Map(document.getElementById("map"), {
    center: { lat: 52.0053949, lng: 4.3307384 },
    zoom: 13,
  });
}