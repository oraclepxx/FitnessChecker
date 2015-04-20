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
var groups = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
var dataURL = "data/items.json";
var PAGE = {
    DISPLAY: "display", SETTING: "setting"
}

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

//fitness.controller("displayController", function ($scope) {
//    $scope.editing = false;
//
//    $scope.setEditing = function (editValue) {
//        $scope.editing = editValue;
//    }
//
//});

fitness.controller("editController", function ($scope, $http) {

    $scope.item = {};

    $scope.addItem = function (newItem) {
        $scope.item = newItem;
        var grp = $scope.item.groups;
        var index = fitnessItems.length;
        $scope.item.id = index;
        $scope.item.groups = Number(grp);
        fitnessItems.push($scope.item);
        $scope.clearItem();
    };

    $scope.removeItem = function (item) {
        var index = fitnessItems.indexOf(item);
        fitnessItems.splice(index, 1);
    };

    $scope.clearItem = function () {
        $scope.item = {};
    };

});

fitness.controller("pageController", function ($scope, $http) {

    $scope.page = PAGE.DISPLAY;
    $scope.setting = false;
    $scope.editing = false;

    $scope.setPage = function (value) {
        if (value == PAGE.DISPLAY) {
            $scope.page = PAGE.DISPLAY;
            $scope.setting = false;
        } else {
            $scope.page = PAGE.SETTING;
            $scope.setting = true;
        }

    };

    $scope.isCurrentPage = function (value) {
        return $scope.page == value;
    };

    $scope.isSetting = function () {
        return $scope.setting;
    };

    $scope.isEditing = function () {
        return $scope.editing;
    };

    $scope.edit = function () {
        $scope.editing = true;
    };

    $scope.done = function () {

        $scope.editing = false;

        //$http.put(dataURL, fitnessItems).success(function (data) {
        //    alert(data);
        //});

        $http.post(dataURL, fitnessItems).then(function (data) {
            //alert("Data saved");
        });

    };


});
