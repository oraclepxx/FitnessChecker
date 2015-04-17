/**
 * Created by xinpan on 04/10/2015.
 */

var fitness = angular.module("fitness", []);

//var fitnessItems = [
//    {"id": 1, "desc": "This is the first item"},
//    {"id": 2, "desc": "This is the second item"},
//    {"id": 3, "desc": "This is the third item"},
//    {"id": 4, "desc": "This is the forth item"},
//    {"id": 5, "desc": "This is the fifth item"}
//];

var fitnessItems = {};
var dataURL = "data/items.json";

fitness.controller("dataController", ["$scope", "$http", function ($scope, $http) {

    $scope.allItems = {};

    $scope.select = function (item) {
        alert("[" + item.desc + "] checked.");
    };

    $scope.initData = function () {
        $http.get(dataURL).success(function (data) {
            $scope.allItems = data;
            fitnessItems = data;
        });
    };

}]);

fitness.controller("displayController", function ($scope) {
    $scope.editing = false;

    $scope.setEditing = function (editValue) {
        $scope.editing = editValue;
    }

});

fitness.controller("editController", function ($scope, $http) {

    $scope.itemDesc = "";

    $scope.addItem = function (itemDesc) {
        var index = fitnessItems.length;
        $scope.itemDesc = itemDesc;
        var tempItem = {"id": index, "desc": itemDesc};
        fitnessItems.push(tempItem);
        $scope.clearItem();
    };

    $scope.removeItem = function (item) {
        var index = fitnessItems.indexOf(item);
        fitnessItems.splice(index, 1);
    };

    $scope.clearItem = function () {
        $scope.itemDesc = "";
    };

    $scope.done = function () {
        $scope.setEditing(false);


        //$http.put(dataURL, fitnessItems).success(function (data) {
        //    alert(data);
        //});

        $http.post(dataURL, fitnessItems).then(function (data) {
            //alert("Data saved");
        });

    };


});


