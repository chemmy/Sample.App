(function(){

    angular
        .module('app.students')
        .controller('StudentsController', StudentsController);

    StudentsController.$inject = ['$stateParams', 'StudentsService'];
    function StudentsController($stateParams, StudentsService) {
        var vm = this;

        activate();

        function activate() {
            getAllStudents();
        }

        function getAllStudents() {
            StudentsService.getAllStudents().then(function(data){
                if(data.success!==false){
                    vm.allStudents = data;
                }
            });
        }
    }
})();