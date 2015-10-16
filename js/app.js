var droneDataApp = angular.module('droneDataApp', []);

droneDataApp.constant('DRONE_API_URL', 'http://api.dronestre.am/data');

// DataStore
droneDataApp.factory('dataFactory', function ($q, $http, DRONE_API_URL){
    var data;
    return {
        query: function() {
            return $http.get(DRONE_API_URL, {cache: 'true'}).then(function(response) {
                data = response.data;
                return data;
            });
        }
     }
});

droneDataApp.factory('d3', function() {
    return d3;
});

droneDataApp.controller('MainCtrl', function ($scope, dataFactory, d3) {
    dataFactory.query().then(function (data) {
        $scope.dataStrike = data.strike;
    });
});
                                      
droneDataApp.directive('myChart', ['d3', function(d3) {
    
    // directive constructor
    function link(scope, element, attr) {
        
        var data = scope.data;
        var chart = d3.select(element[0]);
       
    }

    function draw(svg, width, height, data, dispatch) {
        
    }

    return {
        link: link,
        restrict: 'E',
        replace: false,
        scope: { data: '='},
        /*
        compile: function( element, attrs, transclude) {
            // create a SVG root element
             console.log(element);
        }
        */
    }
}]);