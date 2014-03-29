angular.module("ProjectRate").config(["$stateProvider", "$urlRouterProvider", function ($stateProvider, $urlRouterProvider) {

    $stateProvider
        .state("home", {
            url: "",
            views: {
                main: {
                    templateUrl: "/templates/home.html",
                    controller: "HomeController"
                }
            }
        })
}]);
