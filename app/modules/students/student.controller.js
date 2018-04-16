(function(){

    angular
        .module('app.students')
        .controller('StudentController', StudentController);

    StudentController.$inject = ['$stateParams', 'StudentsService'];
    function StudentController($stateParams, StudentsService) {
        var vm = this;

        vm.student = {};
        vm.init = init;
        vm.addStudent = addStudent;

        // main functions

        function init() {
            var currStudentId = $stateParams.id;
            getStudent(currStudentId)
        }

        function addStudent() {
            StudentsService.addStudent(vm.student);
        }

        // utilities

        function getStudent(sId) {

        }
    }
})();