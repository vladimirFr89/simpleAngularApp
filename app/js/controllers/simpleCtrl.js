angular.module('simpleApp',[]).controller('simpleCtrl', function ($scope, $timeout) {
    $scope.firstName = "Vladimir";
    $scope.lastName = "Fedorin";
    $scope.salary = 30000;
    $scope.increaseSalary = function () {
        if (!$scope.clicked) {
            $scope.salary = $scope.salary + ($scope.salary * $scope.multiple);
            $scope.clicked = true;
            $timeout(function () {
                $scope.clicked = false;
            }, 3000);
        }
    };
    console.log($scope);
});