(function() {
    'use strict';

    angular
        .module('angularFlickering')
        .controller('AngularListController', AngularListController);

    function AngularListController($scope) {
        var vm = this;

        vm.limit = 5;
        vm.limitInt = 5;
        vm.items = initItems();

        function initItems() {
            var items = [];

            for (var i = 1; i <= 100; i++) {
                var item = {
                    name: 'Item'+ i.toString(),
                    description: 'this is a sample item',
                    number: i
                }
                items.push(item);
            }

            return items;
        }

        vm.increaseLimit = function() {
            if (vm.limit < 100) {
                vm.limit += 5;
            }
        }

        vm.resetLimit = function() {
            vm.limit = 5;
        }

        $scope.$watch('vm.limit', function() {
            console.log('limit changed', vm.limit);
            vm.limitInt = parseInt(vm.limit);
        })
    }

})();

