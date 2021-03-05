var myModule = angular.module("Angello", [
  "ngRoute",
  "ngAnimate",
  "firebase",
  "ngMassages",
  "Angello.Common",
  "Angello.Dashboard",
  "Angello.Login",
  "Angello.Storyboard",
  "Angello.User",
  "auth0",
  "angular-jwt",
  "angular-storage",
]);

myModule.config(function(routeProvider) {
    $routeProvider.when("/",{
        templateUrl: "src/angello/storyboard/tmpl/storyboard.html",
        controller: "StoryboardCtrl",
        controllerAs: "storyboard"
    });
});