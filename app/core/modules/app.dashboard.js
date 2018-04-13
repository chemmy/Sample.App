(function(){

    angular.module('app.dashboard', [
        'app.core'
    ]);

    angular
        .module('app.dashboard')
        .config(config);

    function config($stateProvider, $urlRouterProvider) {
        $stateProvider
            .state('app.dashboard', {
                url: 'dashboard',
                templateUrl: 'modules/dashboard/dashboard.html',
            })
    }
})();