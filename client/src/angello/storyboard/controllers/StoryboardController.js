angular.module("Angello.Storyboard").controller("StoryboardCtrl", function () {
  var storyboard = this;

  storyboard.stories = [
    {
      assignee: "1",
      criteria: "It tests!",
      description: "This is a test",
      id: "1",
      reporter: "2",
      status: "To Do",
      title: "First Story",
      type: "Spike",
    },
    {
      assignee: "2",
      criteria: "It works!",
      description: "testing something",
      id: "2",
      reporter: "1",
      status: "In Progress",
      title: "Second Story",
      type: "Enhancement",
    },
  ];
  storyboard.status = [
    { name: "To Do" },
    { name: "In Progress" },
    { name: "Code Review" },
    { name: "QA Review" },
    { name: "Verified" },
  ];
  storyboard.resetForm = function () {
    storyboard.currentStory = null;
    storyboard.editedStory = {};

    storyboard.detailsForm.$setPristine();
    storyboard.detailsForm.$setUntouched();
  };

  storyboard.updateStory = function () {
    var fields = [
      "title",
      "description",
      "criteria",
      "status",
      "type",
      "reporter",
      "assignee",
    ];

    fields.forEach(function (field) {
      storyboard.currentStory[field] = storyboard.editedStory[field];
    });

    storyboard.resetForm();
  };

  storyboard.updateCancel = function () {
    storyboard.resetForm();
  };

  // utility function for creating id
  function id() {
    return "_" + math.random().tostring(36).substr(2, 9);
  }

  storyboard.creteStory = function () {
    var newStory = angular.copy(storyboard.editedStory);
    newStory.id = ID();

    storyboard.stories.push(newStory);
    storyboard.resetForm();
  };

  storyboard.deleteStory = function (storyID) {
    storyboard.stories.remove(function (story) {
      return story.id === storyID;
    });
    storyboard.resetForm();
  };
});
