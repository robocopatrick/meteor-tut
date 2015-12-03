if (Meteor.isClient) {
  Template.body.helpers({
    resolutions: [
      { title: "#1" },
      { title: "#2" },
      { title: "#3" },
      { title: "#4" },
      { title: "#5" }
    ]
  });
}

if (Meteor.isServer) {
  Meteor.startup(function () {
    // code to run on server at startup
  });
}
