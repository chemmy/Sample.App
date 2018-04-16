(function(){

    angular
        .module('app.students', [
            'app.core'
        ])
        .config(config);

    /* ------------------------------------------------ */
    
    function config($stateProvider) {
        $stateProvider
            .state('app.students', {
                abstract: true,
                url: 'students',
            })
            .state('app.students.all', {
                url: '',
                templateUrl: 'modules/students/all-students.html',
                controller: 'StudentsController',
                controllerAs: 'vm'
            })
            .state('app.students.new', {
                url: '/new',
                templateUrl: 'modules/students/new-student.html',
                controller: 'StudentController',
                controllerAs: 'vm'
            })
            .state('app.students.show', {
                url: '/:id',
                templateUrl: 'modules/students/show-student.html',
                controller: 'StudentController',
                controllerAs: 'vm'
            })
            .state('app.students.edit', {
                url: '/:id/edit',
                templateUrl: 'modules/students/edit-student.html',
                controller: 'StudentController',
                controllerAs: 'vm'
            })
    }
})();