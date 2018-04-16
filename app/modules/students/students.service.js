(function(){

    angular
        .module('app.students')
        .service('StudentsService', StudentsService);

    StudentsService.$inject = ['$http', '$state', 'API'];
    function StudentsService($http, $state, API) {
        var services = {
            getAllStudents : getAllStudents,
            getStudentByID : getStudentByID,
            addStudent : addStudent,
            updateStudent : updateStudent,
            deleteStudent : deleteStudent,
            goToStudentPage : goToStudentPage,
            goToEditPage : goToEditPage
        }
        return services;
        
        // main functions

        function getAllStudents(){
            var url = API.END_POINT + "/students/";
    
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

        function getStudentByID(sId){
            var url = API.END_POINT + "/students/" + sId;
    
            return $http.get(url)
                .then(function(response){
                    return response.data;
                });
        }

        function addStudent(student) {
            var url = API.END_POINT + "/students/";

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
                    goToStudentPage(data.data.id);
                }
            });
        }

        function updateStudent(student) {
            var url = API.END_POINT + '/students/' + student.id + '/';

            $http({
                method  : 'PATCH',
                url     : url,
                data    : student
            })
            .then(function(data) {
                if (data.errors) {
                    console.log(data.errors);
                } else {
                    alert("Student - successfully updated!");
                    goToStudentPage(data.data.id);
                }
            });
        }

        function deleteStudent(student) {
            var url = API.END_POINT + '/students/' + student.id + '/';

            $http({
                method  : 'DELETE',
                url     : url,
                data    : student
            })
            .then(function(data) {
                if (data.errors) {
                    console.log(data.errors);
                } else {
                    alert("Student - successfully deleted!");
                    $state.reload();
                }
            });
        }

        // utilities

        function goToStudentPage(studentId) {
            $state.go("app.students.show", {id: studentId});
        }

        function goToEditPage(studentId) {
            $state.go("app.students.edit", {id: studentId});
        }
    }
})();