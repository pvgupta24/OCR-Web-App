var app = angular.module('app', []);

app.controller('ctrl', ['$scope', '$http', function ($scope, $http) {
    console.log('Controller:\n');
    $(document).on('change', '.btn-file :file', function () {
        var input = $(this),
            label = input.val().replace(/\\/g, '/').replace(/.*\//, '');
        input.trigger('fileselect', [label]);
    });

    $('.btn-file :file').on('fileselect', function (event, label) {

        var input = $(this).parents('.input-group').find(':text'),
            log = label;

        if (input.length) {
            input.val(log);
        } else {
            if (log) alert(log);
        }

    });
    /*   var fd = new FormData();*/

    function readURL(input) {
        if (input.files && input.files[0]) {
            var reader = new FileReader();
            reader.onload = function (e) {
                $img= $('#img-upload');
                $img.attr('src', e.target.result);
                $img.attr('height', '500px');
            };
            reader.readAsDataURL(input.files[0]);
            console.log(input.files[0]);
        }
    }

    $("#image").change(function () {
        readURL(this);
    });
   /*
    $scope.uploadFile = function (file) {
        console.log('Trying to upload.');
        //console.log(file);
        var fd = new FormData();

        fd.append('file', file);
       // console.log(file[0]);
        $http({
            method: 'POST',
            url: '/api/getText',
            data: fd,
            headers: {
                'Content-Type': undefined
            }
            ,
            transformRequest: angular.identity
        }).then(function (res) {
            console.log(res + "....");
        }, function (err) {
            console.log("Error" + err);
        });
    };
*/

}]);