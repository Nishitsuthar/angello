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

myModule.config(function ($routeProvider, $httpProvider, $provide) {
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

  $httpProvider.interceptors.push("loadingInterceptor");

  $provide.decorator('$log', function($delegate){
    function timestamp(){}
    var debugFn = $delegate.debug;

    $delegate.debug = function(){
      arguments[0] = timestamp() + '-' + arguments[0];
      debugFn.apply(null, arguments)
    }
    return $delegate;
  });
});

module.value("STORY_TYPE", [
  {
    name: "Feature",
    name: "Enhancement",
    name: "Bug",
    name: "Spike",
  },
]);

myModule.factory("loadingInterceptor", function (LoadingService) {
  var loadingInterceptor = {
    request: function (config) {
      LoadingService.setLoading(true);
      return config;
    },
    response: function (response) {
      LoadingService.setLoading(false);
      return response;
    },
  };
  return loadingInterceptor;
});
