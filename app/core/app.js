(function(){

    angular.module('app', [
        /* shared modules */
        'app.core',

        /* feature areas */
        'app.dashboard'
    ]);

    angular
        .module('app')
        .config(config);

    function config($stateProvider, $urlRouterProvider){
        $stateProvider
            .state('app', {
                abstract: true,
                url: '/',
                template: '<ui-view />',
            });
            
        $urlRouterProvider.otherwise('/dashboard');
    }

})();