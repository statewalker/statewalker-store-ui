import { getElementInvalidation, replaceDomContent, toDomNode } from "@statewalker/utils-dom";

export default function bindStoreView(store, view, keys, action) {
  if (action === undefined) {
    action = keys;
    keys = view;
    view = "div";
  }
  view = view || "div";
  if (typeof view === "string") view = document.createElement(view);
  else if (typeof view === "function") view = toDomNode(view());
  if (typeof keys === "string") keys = keys.split(",");
  const invalidation = getElementInvalidation(view);
  let prev;
  invalidation.then(
    store.useAll(keys, (values) =>
      replaceDomContent(view, (prev = toDomNode(action(values, view, prev))))
    )
  );
  return view;
}