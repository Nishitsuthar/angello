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
