(function(){

    angular
        .module('app', [
            /* shared modules */
            'app.core',

            /* feature areas */
            'app.dashboard',
            'app.students'
        ])
        .config(config);

    /* ------------------------------------------------ */
    
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