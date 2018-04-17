(function(){

    angular
        .module('app.students')
        .service('StudentsService', StudentsService);

    StudentsService.$inject = ['$http', '$state', 'API', 'FORM_CONST', 'exception', 'alert'];
    function StudentsService($http, $state, API, FORM_CONST, exception, alert) {
        var services = {
            getAllStudents : getAllStudents,
            getStudentByID : getStudentByID,
            getTempLectures : getTempLectures,          // remove once api is fixed
            addStudent : addStudent,
            updateStudent : updateStudent,
            deleteStudent : deleteStudent,
            goToStudentPage : goToStudentPage,
            goToEditPage : goToEditPage
        }
        return services;

        var tempStudent = {};
        
        // main functions

        function getAllStudents(){
            var url = API.END_POINT + "/students/";
    
            return $http.get(url)
                .then(function(response){
                    return response.data;
                })
                .catch(function(error) {
                    return exception.showError(FORM_CONST.API_FETCH_FAILED, error.data);
                });
        }

        function getStudentByID(sId){
            var url = API.END_POINT + "/students/" + sId;
    
            return $http.get(url)
                .then(function(response){
                    return response.data;
                })
                .catch(function(error) {
                    return exception.showError(FORM_CONST.API_FETCH_FAILED, error.data);
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
                alert.showSuccess("Student - successfully added!");
                goToStudentPage(data.data.id);
            })
            .catch(function(error) {
                return exception.showError(FORM_CONST.API_ACTION_FAILED, error.data);
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
                alert.showSuccess("Student - successfully updated!");
                goToStudentPage(data.data.id);
            })
            .catch(function(error) {
                return exception.showError(FORM_CONST.API_ACTION_FAILED, error.data);
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
                alert.showSuccess("Student - successfully deleted!");
                $state.reload();
            })
            .catch(function(error) {
                return exception.showError(FORM_CONST.API_ACTION_FAILED, error.data);
            });
        }

        // utilities

        function goToStudentPage(studentId) {
            $state.go("app.students.show", {id: studentId});
        }

        function goToEditPage(studentId) {
            $state.go("app.students.edit", {id: studentId});
        }

        function getTempLectures() {                    // remove once api is fixed
            var url = "test/data/lecture.txt";
            return $http.get(url)
                .then(function(response){
                    return response.data;
                });
        }
    }
})();