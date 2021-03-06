angular.module("Angello.common").service("StoryModel", function () {
    var storyboard = this;

    storyboard.currentStory = null;
    storyboard.editstory = {};

    storyboard.setCurrentStory = function(story){
        storyboard.currentStory = story;
        storyboard.editstory = angular.copy(storyboard.currentStory);
    }
});
