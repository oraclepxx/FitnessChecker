/**
 * Created by xinpan on 04/10/2015.
 */

var fitness = angular.model("fitness", []);


fitness.controller("initController", function ($scope) {

    $scope.fitnessItems = [
        {"id": 1, "desc": "This is the first item"},
        {"id": 2, "desc": "This is the second item"},
        {"id": 3, "desc": "This is the third item"},
        {"id": 4, "desc": "This is the forth item"},
        {"id": 5, "desc": "This is the fifth item"}
    ];




});