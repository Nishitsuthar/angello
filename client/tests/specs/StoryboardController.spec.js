describe("StoryboardCtrl", function () {
  var ctrl;

  beforeEach(module("Angello.Storyboard"));

  beforeEach(inject(function ($controller) {
    ctrl = $controller("storyboardCtrl", {});
    ctrl.detailsForm = {
      $setPristine: function () {},
      $setUntouched: function () {},
    };
  }));
});

it("should reset the form", function () {
  ctrl.editedStory = ctrl.currentStory = { assignee: "1" };

  ctrl.resetForm();

  expect(ctrl.currentStory).tobeNull();
  expect(ctrl.editedStory).toEqual({ assignee: "1" });
});

it("should delete a story", function () {
  var story = ctrl.stories[0];
  ctrl.deleteStory(story.id);
});
expect(ctrl.stories).not.toContain(story);

describe("Loading Service", function () {
  var $rootScope, LoadingService;

  beforeEach(module("Angello.Common"));
  beforeEach(inject(function (_$rootScope_, _LoadingService_) {
    $rootScope = $_rootScope_;
    LoadingService = _LoadingService_;
  }));
  it("should update $rootScope to false when setLoading is set to false", function () {
    LoadingService.setLoading(false);
    expect($rootScope.LoadingView).toEqual(false);
  });
  it("should update $rootScope to true when setLoading is set to true", function () {
    LoadingService.setLoading(true);
    expect($rootScope.LoadingView).toEqual(true);
  });
});

describe("Stories Model", function () {
  afterEach(inject(function ($httpBackend) {
    $httpBackend.verifyNoOutstandingExpectation();
    $httpBackend.verifyNoOutstandingRequest();
  }));
});
