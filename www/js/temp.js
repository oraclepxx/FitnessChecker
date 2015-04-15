/**
 * Created by xinpan on 04/15/2015.
 */

fitness.controller("timerController", function ($scope) {
    $scope.running = false;
    $scope.status = "Start";

    $scope.hours = "";
    $scope.minutes = "";
    $scope.seconds = "";
    $scope.millsec = "";

    $scope.timer = function () {
        if ($scope.running) {
            $scope.running = false;
            $scope.status = "Start";
        } else {
            $scope.running = true;
            $scope.status = "Stop";
            updateTimer();
        }
    };

    $scope.timerStatus = function () {
        return $scope.status;
    };

    //$scope.now = new Date();

    var updateTimer = function () {
        $scope.now = new Date();
        var hh = $scope.now.getHours();
        var mm = $scope.now.getMinutes();
        var ss = $scope.now.getSeconds();
        var ms = $scope.now.getMilliseconds();
        if (hh <= 9) {
            $scope.hours = "0" + hh;
        } else {
            $scope.hours = hh;
        }
        if (mm <= 9) {
            $scope.minutes = "0" + mm;
        } else {
            $scope.minutes = mm;
        }
        if (ss <= 9) {
            $scope.seconds = "0" + ss;
        } else {
            $scope.seconds = ss;
        }
        $scope.millsec = ms;

    };

    setInterval(function () {
        $scope.$apply(updateTimer)
    }, 100);


});

fitness.controller("counterController", function ($scope) {

    $scope.running = false;
    $scope.status = "Start";

    $scope.hour = 0;
    $scope.min = 0;
    $scope.sec = 0;

    $scope.hourLabel = "00";
    $scope.minLabel = "00";
    $scope.secLabel = "00";

    $scope.counter = function () {
        if ($scope.running) {
            $scope.running = false;
            $scope.status = "Reset";
        } else {
            if (needReset()) {
                reset();
                $scope.status = "Start";
            } else {
                $scope.running = true;
                $scope.status = "Stop";
                updateCounter();
            }
        }

    };

    var updateCounter = function () {
        setInterval(function () {
            $scope.$apply(function () {

                if ($scope.running) {
                    $scope.sec = $scope.sec + 1;
                    if ($scope.sec == 60) {
                        $scope.sec = 0;
                        $scope.min = $scope.min + 1;
                        if ($scope.min == 60) {
                            $scope.min = 0;
                            $scope.hour = $scope.hour + 1;
                        }
                    }
                    if ($scope.sec <= 9) {
                        $scope.secLabel = "0" + $scope.sec;
                    } else {
                        $scope.secLabel = $scope.sec;
                    }
                    if ($scope.min <= 9) {
                        $scope.minLabel = "0" + $scope.min;
                    } else {
                        $scope.minLabel = $scope.min;
                    }
                    if ($scope.hour <= 9) {
                        $scope.hourLabel = "0" + $scope.hour;
                    } else {
                        $scope.hourLabel = $scope.hour;
                    }
                }


            });
        }, 1000);

    };

    var needReset = function () {
        return $scope.sec != 0 || $scope.min != 0 || $scope.hour != 0;
    }

    var reset = function () {
        $scope.sec = 0;
        $scope.min = 0;
        $scope.hour = 0;
        $scope.hourLabel = "00";
        $scope.minLabel = "00";
        $scope.secLabel = "00";

    }


});
