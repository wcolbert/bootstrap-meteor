Template.header.greeting = function () {
  return "Welcome to secretjudge.";
};

Template.header.events({
  'click button': function () {
    // template data, if any, is available in 'this'
    if (typeof console !== 'undefined')
      console.log("You pressed the button");
  }
});
