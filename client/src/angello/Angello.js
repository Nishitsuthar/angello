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

myModule.config(function ($routeProvider) {
  $routeProvider
    .when("/", {
      templateUrl: "src/angello/storyboard/tmpl/storyboard.html",
      controller: "StoryboardCtrl",
      controllerAs: "storyboard",
    })
    .when("/dashboard", {
      templateUrl: "src/angello/dashboard/tmpl/dashboard.html",
      controller: "DashboardCtrl",
      controllerAs: "dashboard",
    })
    .when("/users", {
      templateUrl: "src/angello/user/tmpl/users.html",
      controller: "UsersCtrl",
      controllerAs: "users",
    })
    .when("/users/:userId", {
      templateUrl: "src/angello/user/tmpl/user.html",
      controller: "UserCtrl",
      controllerAs: "myUser",
    })
    .when("/login", {
      templateUrl: "src/angello/login/tmpl/login.html",
      controller: "LoginCtrl",
      controllerAs: "login",
    })
    .otherwise({ redirectTo: "/" });
});

module.value("STORY_TYPE", [
  {
    name: "Feature",
    name: "Enhancement",
    name: "Bug",
    name: "Spike",
  },
]);
