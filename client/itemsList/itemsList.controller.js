(function() {
    'use strict';

    angular
        .module('angularFlickering')
        .controller('ItemsListController', ItemsListController);

    ItemsListController.$inject = ['$scope', '$reactive'];

    function ItemsListController($scope, $reactive) {
        $reactive(this).attach($scope);
        var vm = this;

        vm.limit = 5;

        vm.helpers({
            items: function() {
                return Items.find({}, {limit: vm.getReactively('limit')});
            }
        });

        vm.subscribe('items');

        vm.autorun(function() {
            console.log('limit changed', vm.getReactively('limit'));
        });

        vm.increaseLimit = function() {
            if (vm.limit < 100) {
                vm.limit += 5;
            }
        }

        vm.resetLimit = function() {
            vm.limit = 5;
        }
    }

})();

