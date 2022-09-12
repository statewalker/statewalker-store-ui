# @statewalker/store-ui: UI binding for Stores

This module provides binding between Stores ([@statewalker/store](https://github.com/statewalker/statewalker-store)) and
DOM elements.

Methods: 
* `extendInputStore(store)` - the main method of this library; it binds two additional store methods:
  - `store.bindView(view, keys, action)` - binds the given `view` DOM object to store values corresponding to the given `keys`; if the `view` is not defined then a new `div` element is created; it uses internally the `bindStoreView(..)` method described below
  - `store.bindStoreInput(key, configKey, input)` - binds the store values corresponding to the `key` parameter to input instances returned by the `input` function; if the `configKey` parameter is defined then the `input` is called each time when these dependencies are changed
* `bindStoreView(store, view, keys, action)` - bind a `view` (a DOM element) to the `store`; the specified `action` allows to update the `view` each time when some fields (defined by the `keys` parameters) change its value.
* `bindStoreInput(store, key, input)` - synchronizes the given `input` to the `store` field defined by the `key` parameter; an input is a DOM element with the `value` property and rising the "`input`" event when user updates values; see the [ObservableHQ inputs library](https://observablehq.com/@observablehq/inputs) ([GitHub](https://github.com/observablehq/inputs)) for more information.
* `bindConfigurableStoreInput(store, configKey, valueKey, input)` - binds input values  to a specific field of the `store` defined by the `valueKey` parameter; the `input` function should return a new input instance and it is called each time when the `configKey` field of the `store` changes its values

Used libraries in GitHub:
* [@statewalker/store](https://github.com/statewalker/statewalker-store)
* [@statewalker/utils](https://github.com/statewalker/statewalker-utils) 
* [@statewalker/utils-dom](https://github.com/statewalker/statewalker-utils-dom) 

For working examples see this Observable Notebook: 
- https://observablehq.com/@kotelnikov/observable-store-example
- https://observablehq.com/@kotelnikov/observable-store-description
- https://observablehq.com/@kotelnikov/observable-store

