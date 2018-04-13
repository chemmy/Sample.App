(function(){

    angular
        .module('app.students')
        .service('StudentsService', StudentsService);

    StudentsService.$inject = ['$http', 'API'];
    function StudentsService($http, API) {
        var services = {
            getAllStudents: getAllStudents
        }
        return services;
        
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
    }
})();