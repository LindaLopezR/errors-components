// Import Tinytest from the tinytest Meteor package.
import { Tinytest } from "meteor/tinytest";

// Import and rename a variable exported by errors-components.js.
import { name as packageName } from "meteor/errors-components";

// Write your tests here!
// Here is an example.
Tinytest.add('errors-components - example', function (test) {
  test.equal(packageName, "errors-components");
});
