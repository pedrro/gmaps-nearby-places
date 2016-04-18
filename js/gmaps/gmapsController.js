angular.module('gmapsPOC').controller('gmapsController', gmapsController);

function gmapsController($scope, gmapsRepository) {
  $scope.places = [];
  var placeCoord = {};
  var place_id;

  var searchNearbyPlacesByCoord = function(lat, long) {
    if ($scope.places.length > 0) {
      $scope.places = [];
    }
    gmapsRepository.getNearbyPlaces(lat, long).then(function(response) {
      $scope.places.push(response.data.results);
    });
  };

  var getDetailsFromPlace = function(place_id) {
    gmapsRepository.getCoordFromPlace(place_id).then(function(response) {
      searchNearbyPlacesByCoord(response.data.result.geometry.location.lat, response.data.result.geometry.location.lng);
    });
  };

  $scope.searchPlacesByName = function() {
    gmapsRepository.getIdFromPlace($scope.name).then(function(response) {
      getDetailsFromPlace(response.data.predictions[0].place_id);
    });
  };

  $scope.picturesFromPlaces = function(reference) {
    gmapsRepository.getPictureFromPlace(reference).then(function(response) {
      return response;
    });
  };
}
