(function(){

    angular
        .module('app.students')
        .controller('StudentsController', StudentsController);

    StudentsController.$inject = ['$scope', '$stateParams', 'StudentsService'];
    function StudentsController($scope, $stateParams, StudentsService) {
        var vm = this;
        vm.pageStudents = [];
        vm.pagination = {
            numPages: 0,
            currentPage: 1,
            numPerPage: 10,
            maxSize: 5
        };

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
                    vm.pagination.numPages = Math.ceil(vm.allStudents.length / vm.pagination.numPerPage); 
                }
            });
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