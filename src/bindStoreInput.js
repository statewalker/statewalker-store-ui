import { newMutex } from "@statewalker/utils";
import { getElementInvalidation, toDomNode } from "@statewalker/utils-dom";

export default function bindStoreInput(store, key, input) {
  if (typeof input === "function") input = input();
  input = toDomNode(input);
  const [get, set, use] = Array.isArray(key)
    ? [store.getAll, store.setAll, store.useAll]
    : [store.get, store.set, store.use];
  const mutex = newMutex();
  const handler = () => mutex(() => set(key, input.value));
  input.addEventListener("input", handler);
  const invalidation = getElementInvalidation(input);
  invalidation.then(() => input.removeEventListener("input", handler));
  invalidation.then(use(key, (value) => mutex(() => (input.value = value))));
  input.value = get(key);
  return input;
}