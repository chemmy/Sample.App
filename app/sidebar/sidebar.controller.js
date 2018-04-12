(function(){

    angular
        .module('app')
        .controller('SidebarController', SidebarController);

    function SidebarController() {
        var vm = this;
        vm.sidebarLogo = "assets/img/generic-logo.png";
    }

})();