(function(){

    angular
        .module('app.students')
        .controller('StudentsController', StudentsController);

    StudentsController.$inject = ['$scope', '$stateParams', 'StudentsService'];
    function StudentsController($scope, $stateParams, StudentsService) {
        var vm = this;
        vm.pageStudents = [];
        vm.pagination = {
            currentPage: 1,
            numPerPage: 10,
            maxSize: 5
        };
        vm.goToStudent = goToStudent;
        vm.goToEdit = goToEdit;
        vm.deleteStudent = deleteStudent;

        activate();

        // main functions

        function activate() {
            getAllStudents();
        }

        function getAllStudents() {
            StudentsService.getAllStudents().then(function(data){
                if(data.success!==false){
                    vm.allStudents = data;
                    getPageStudents(); 
                }
            });
        }

        function deleteStudent(student) {
            StudentsService.deleteStudent(student);
        }

        // routing

        function goToStudent(studentId) {
            StudentsService.goToStudentPage(studentId);
        }

        function goToEdit(studentId) {
            StudentsService.goToEditPage(studentId);
        }

        // watches 
        
        $scope.$watch('vm.pagination.currentPage + vm.pagination.numPerPage', function(){
            getPageStudents();
        });

        // utilities

        function getPageStudents(){
            if(vm.allStudents){
                var begin = ((vm.pagination.currentPage - 1) * vm.pagination.numPerPage);
                var end = begin + vm.pagination.numPerPage;
                vm.pageStudents = vm.allStudents.slice(begin, end);
            }
        }

    }
})();