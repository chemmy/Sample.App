(function(){

    angular
        .module('app.students')
        .service('StudentsService', StudentsService);

    StudentsService.$inject = ['$http', 'API'];
    function StudentsService($http, API) {
        var services = {
            getAllStudents : getAllStudents,
            addStudent : addStudent
        }
        return services;
        
        // main functions

        function getAllStudents(){
            var url = API.END_POINT + "/students";
    
            return $http.get(url)
                .then(function(response){
                    return response.data;
                }, function(error) {
                    return {
                        success: false,
                        message: "Unable to retrieve students. Please try again later."
                    }
                });
        }

        function addStudent(student) {
            var url = API.END_POINT + "/students";

            $http({
                method  : 'POST',
                url     : url,
                data    : student
            })
            .then(function(data) {
                if (data.errors) {
                    console.log(data.errors);
                } else {
                    alert("Student - successfully added!");
                    // $state.go("app.students.show", {id: (data.data.id)});
                }
            });
        }
    }
})();