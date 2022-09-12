import bindStoreView from "./bindStoreView.js";
import bindStoreInput from "./bindStoreInput.js";

export default function bindConfigurableStoreInput(store, configKey, valueKey, input) {
  return bindStoreView(store, configKey, (config, parent, view) =>
    bindStoreInput(store, valueKey, input(config, parent, view))
  );
}