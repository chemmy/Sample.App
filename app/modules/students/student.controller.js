(function(){

    angular
        .module('app.students')
        .controller('StudentController', StudentController);

    StudentController.$inject = ['$state', '$stateParams', 'StudentsService'];
    function StudentController($state, $stateParams, StudentsService) {
        var vm = this;

        vm.state = $state.current.name;
        vm.student = {};
        vm.init = init;
        vm.addStudent = addStudent;
        vm.deleteStudent = deleteStudent;
        vm.updateStudent = updateStudent;

        // main functions

        function init() {
            var currStudentId = $stateParams.id;
            getStudent(currStudentId)
        }

        function addStudent() {
            StudentsService.addStudent(vm.student);
        }

        function updateStudent() {
            StudentsService.updateStudent(vm.student);
        }
        
        function deleteStudent() {
            StudentsService.deleteStudent(vm.student);
        }

        // utilities

        function getStudent(studentId) {
            StudentsService.getStudentByID(studentId).then(function(data){
                vm.student = data;
                getTempLectures();
            });
        }
        
        function getTempLectures() {                    // remove once api is fixed
            StudentsService.getTempLectures().then(function(data){
                vm.student.lectures = data.data;
            });          
        }
    }
})();