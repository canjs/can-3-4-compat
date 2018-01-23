# can-3-4-compat

[![Build Status](https://travis-ci.org//can-3-4-compat.svg?branch=master)](https://travis-ci.org//can-3-4-compat)

Utilities for easing the upgrade from CanJS 3 to CanJS 4.

## Modules

### can-3-4-compat/dom-mutation-events

This module enables the legacy mutation events __inserted__ and __removed__ in places such as can-components.

```js
import "can-3-4-compat/dom-mutation-events";
import Component from "can-component";

Component.extend({
	tag: "some-component",

	events: {
		inserted: function(){
			// This will fire!
		}
	}
})
```

## license

MIT
