angular.module('gmapsPOC').factory('gmapsRepository', function($http) {
  return {
    getNearbyPlaces: function(lat, long) {
        var url = "https://maps.googleapis.com/maps/api/place/nearbysearch/json?location="+lat+","+long+"&radius=300&language=pt-PT&key=AIzaSyDNGPh2ERYJq9Ei1tzDSNG-nOyYAJVhpY4";
      return $http.get(url);
    },
    getPictureFromPlace: function(photoReference) {
      var url = "https://maps.googleapis.com/maps/api/place/photo?maxwidth=400&photoreference="+photoReference+"&key=AIzaSyDNGPh2ERYJq9Ei1tzDSNG-nOyYAJVhpY4";
      return $http.get(url);
    }
  };
});
