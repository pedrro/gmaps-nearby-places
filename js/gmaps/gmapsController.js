angular.module('gmapsPOC').controller('gmapsController', gmapsController);

function gmapsController($scope, gmapsRepository) {
  $scope.places = [];


  $scope.searchPlaces = function() {
    if($scope.places.length > 0){
      $scope.places = [];
    }
    gmapsRepository.getNearbyPlaces($scope.latitude,$scope.longitude).then(function (response) {
      $scope.places.push(response.data.results);
    });
  };

  // $scope.picturesFromPlaces = function(reference){
  //   gmapsRepository.getPictureFromPlace(reference).then(function (response) {
  //     return response;
  //   });
  //};
}
