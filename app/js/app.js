(function () {
    var app = angular.module('bootsrapDrapDown', ['ngRoute', 'ui.bootstrap', "ngAnimate", "ngDragDrop"]);
    app.controller("dragDropBody", ['$scope', function ($scope) {

        $scope.name = "Basic Drag and Drop";
        $scope.list1 = {
            title: 'AngularJS - Drag Me'
        };
        $scope.list2 = {};
        }]);

})()