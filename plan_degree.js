var courses = require('./courses');

module.exports = function planDegree(taken, pending, load) {
  if (!load) load = 16; // Default to 16 hours maximum per semester

  // Remove duplicates
  pending = pending.filter(function(el) {
    return taken.indexOf(el) === -1;
  });

  // Plan semesters
  var plan = [];

  // Get them
  while (pending.length > 0) {
    // Find all eligible courses
    var eligible = pending.filter(function(course) {
      return courses.canTake(taken, course);
    }).map(function(course) {
      return courses.details(course);
    });

    // Find hours and put them in
  }
};
