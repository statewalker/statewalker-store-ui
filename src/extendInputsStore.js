import bindStoreInput from "./bindStoreInput.js";
import bindStoreView from "./bindStoreView.js";
import bindConfigurableStoreInput from "./bindConfigurableStoreInput.js";

export default function extendInputsStore(store) {
  store.bindView = store.bindView || ((view, keys, action) =>
    bindStoreView(store, view, keys, action));

  store.bindInput = store.bindInput || ((key, configKey, input) =>
    input === undefined
      ? ((input = configKey), bindStoreInput(store, key, input))
      : bindConfigurableStoreInput(store, configKey, key, input));

  // store.observe = (key) => observeStore(store, key);
  return store;
}