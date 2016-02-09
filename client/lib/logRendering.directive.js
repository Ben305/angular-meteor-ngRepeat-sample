(function() {
    'use strict';

    angular
        .module('angularFlickering')
        .directive('logRendering', logRendering);

    function logRendering() {
        var directive = {
            link: link,
            restrict: 'A',
            scope: {
                logRendering: '='
            }
        };
        return directive;

        function link(scope) {
            console.log('rendering', scope.logRendering);
        }
    }
})();

