angular.module('simpleApp',[]).controller('simpleCtrl', function ($scope) {
    $scope.firstName = "Vladimir";
    $scope.lastName = "Fedorin";
    $scope.salary = 30000;
    console.log($scope);
});