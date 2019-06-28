var QUnit = require("steal-qunit");
require("./dom-mutation-events");

var Component = require("can-component");
var stache = require("can-stache");

QUnit.module('can-3-4-compat/dom-mutation-events');

QUnit.test('Inserted event is fired', function(assert){
	var done = assert.async();
  Component.extend({
		tag: "some-component",
		events: {
			inserted: function(el, ev){
				assert.ok(true, "inserted was called");
				assert.equal(el.tagName, "SOME-COMPONENT");
				assert.ok(ev, "got an event");
				done();
			}
		}
	});

	var view = stache("<some-component/>");
	document.getElementById("qunit-fixture").appendChild(view());
});
