/**
 * Created by xinpan on 04/10/2015.
 */

var fitness = angular.module("fitness", []);

var fitnessItems = [
    {"id": 1, "desc": "This is the first item"},
    {"id": 2, "desc": "This is the second item"},
    {"id": 3, "desc": "This is the third item"},
    {"id": 4, "desc": "This is the forth item"},
    {"id": 5, "desc": "This is the fifth item"}
];

fitness.controller("dataController", function ($scope) {
    $scope.allItems = fitnessItems;
});

fitness.controller("editController", function ($scope) {
    $scope.edit = false;

    $scope.setEdit = function (editValue) {
        $scope.edit = editValue;
    }

});

fitness.controller("itemController", function ($scope) {

    $scope.data = fitnessItems;
    $scope.itemDesc = "";

    $scope.select = function (item) {
        alert(item.desc);
    };

    $scope.addItem = function (itemDesc) {
        var index = $scope.data.length;
        $scope.itemDesc = itemDesc;
        var tempItem = {"id": index, "desc": itemDesc};
        $scope.data.push(tempItem);
        $scope.clearItem();
    };

    $scope.removeItem = function(item){
        $scope.data.pop(item);
    };

    $scope.clearItem = function () {
        $scope.itemDesc = "";
    };


});


