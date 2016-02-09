/**
 * Created by BenHus on 09.02.16.
 */

angular
    .module('angularFlickering')
    .config(config)

config.$inject = ['$urlRouterProvider', '$stateProvider', '$locationProvider'];

/* @ngInject */
function config ($urlRouterProvider, $stateProvider, $locationProvider) {
    $locationProvider.html5Mode(true);

    $stateProvider
        .state('items', {
            url: '/',
            templateUrl: 'client/itemsList/itemsList.html',
            controller: 'ItemsListController',
            controllerAs: 'vm'
        })
        .state('angularItems', {
            url: '/angularList',
            templateUrl: 'client/angularList/angularList.html',
            controller: 'AngularListController',
            controllerAs: 'vm'
        })

    $urlRouterProvider.otherwise("/");
}