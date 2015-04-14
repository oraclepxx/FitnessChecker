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

fitness.controller("itemController", function ($scope) {

    $scope.data = fitnessItems;
    $scope.itemDesc = "";


    $scope.select = function (item) {
        alert(item.id + " / " + item.desc);
    };

    $scope.addItem = function (itemDesc) {
        var index = $scope.data.length;
        $scope.itemDesc = itemDesc;
        var addItem = {"id": index, "desc": itemDesc};
        $scope.data.push(addItem);
        $scope.clearItem();
    };

    $scope.clearItem = function () {
        $scope.itemDesc = "";
    };


});

fitness.controller("timerController", function ($scope) {
    $scope.running = false;
    $scope.status = "Start";

    $scope.hours = "";
    $scope.minutes = "";
    $scope.seconds = "";

    $scope.timerToggle = function () {
        if ($scope.running) {
            $scope.running = false;
            $scope.status = "Start";
        } else {
            $scope.running = true;
            $scope.status = "Stop";
            //setInterval(function () {
            //    var timer = new Date();
            //    var h = timer.getHours();
            //    var m = timer.getMinutes();
            //    var s = timer.getSeconds();
            //    if (h <= 9) {
            //        $scope.hours = "0" + h;
            //    } else {
            //        $scope.hours = h;
            //    }
            //    if (m <= 9) {
            //        $scope.minutes = "0" + m;
            //    } else {
            //        $scope.minutes = m;
            //    }
            //    if (s <= 9) {
            //        $scope.seconds = "0" + s;
            //    } else {
            //        $scope.seconds = s;
            //    }
            //}, 1000);
            updateTimer();
        }
    };

    $scope.timerStatus = function () {
        return $scope.status;
    };

    //$scope.now = new Date();

    var updateTimer = function () {
        $scope.now = new Date();
        var h = $scope.now.getHours();
        var m = $scope.now.getMinutes();
        var s = $scope.now.getSeconds();
        if (h <= 9) {
            $scope.hours = "0" + h;
        } else {
            $scope.hours = h;
        }
        if (m <= 9) {
            $scope.minutes = "0" + m;
        } else {
            $scope.minutes = m;
        }
        if (s <= 9) {
            $scope.seconds = "0" + s;
        } else {
            $scope.seconds = s;
        }


    };

    setInterval(function () {
        $scope.$apply(updateTimer)
    }, 1000);


});