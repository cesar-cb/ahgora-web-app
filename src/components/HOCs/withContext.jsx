import React from "react";
import { Subscribe } from "unstated";

export default function withContext(containers, WrappedComponent) {
  return props => (
    <Subscribe to={containers}>
      {(...containers) => {
        const mapping = containers
          .map(container => ({
            name: container.constructor.name,
            value: container
          }))
          .reduce((obj, item) => {
            obj[item.name] = item;
            return obj;
          }, {});
        return <WrappedComponent {...mapping} {...props} />;
      }}
    </Subscribe>
  );
}
