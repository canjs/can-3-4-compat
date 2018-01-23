var domEvents = require("can-dom-events");
var domMutateDomEvents = require("can-dom-mutate/dom-events");

domEvents.addEvent(domMutateDomEvents.inserted);
domEvents.addEvent(domMutateDomEvents.removed);
