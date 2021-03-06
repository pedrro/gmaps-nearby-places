angular.module('gmapsPOC').factory('gmapsRepository', function($http) {
  var api_key = "AIzaSyDNGPh2ERYJq9Ei1tzDSNG-nOyYAJVhpY4";
  var url = "";
  return {
    //https://developers.google.com/places/web-service/autocomplete#place_autocomplete_responses
    getIdFromPlace: function(name) {
      url = "https://maps.googleapis.com/maps/api/place/autocomplete/json?input=" + name + "&key=" + api_key;
      return $http.get(url);
    },
    //https://developers.google.com/places/web-service/details#PlaceDetailsRequests
    getCoordFromPlace: function(placeid) {
      url = "https://maps.googleapis.com/maps/api/place/details/json?placeid=" + placeid + "&key=" + api_key;
      return $http.get(url);
    },
    //https://developers.google.com/places/web-service/search#PlaceSearchRequests
    getNearbyPlaces: function(lat, long) {
      url = "https://maps.googleapis.com/maps/api/place/nearbysearch/json?location=" + lat + "," + long + "&radius=300&language=pt-PT&key=" + api_key;
      return $http.get(url);
    },
    //https://developers.google.com/places/web-service/photos#photo_references
    getPictureFromPlace: function(photoReference) {
      url = "https://maps.googleapis.com/maps/api/place/photo?maxwidth=400&photoreference=" + photoReference + "&key=" + api_key;
      return $http.get(url);
    }
  };
});
