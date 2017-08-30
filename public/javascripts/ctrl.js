var app = angular.module('app',[]);

app.controller('ctrl', ['$scope', '$http', function ($scope, $http) {
    console.log('Controller:\n');

    $scope.uploadFile=function (file) {
        var fd = new FormData();
        fd.append('file', file);
        $http({
            method: 'POST',
            url: '/api/getText',
            data: fd,
            headers: {
                'Content-Type' : undefined // important
            }
        }).then(function (res) {
            console.log(res.data);
        }, function (err) {
            console.log("Error" + err);
        });
    };


}]);