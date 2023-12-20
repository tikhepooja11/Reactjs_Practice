import React from "react";
import config from "./config";

const renderComponent = (component, index) => {
  switch (component.type) {
    case "text":
      return (
        <p key={index} className={component.style}>
          {component.content}
        </p>
      );
    case "button":
      return (
        <button
          key={index}
          onClick={component.onClick}
          className={component.style}
        >
          {component.label}
        </button>
      );
    case "image":
      return (
        <img
          key={index}
          className={component.style}
          src={component.src}
          alt={component.alt}
        />
      );
    default:
      return null;
  }
};
const DisplayConfigDrivenUI = () => {
  return (
    <div>
      <h1 className="text-center bg-pink-300 p-5 m-5">{config.title}</h1>

      {config.sections.map((section, index) => (
        <div key={index}>
          <h2>{section.title}</h2>
          {section.components.map((component, componentIndex) =>
            renderComponent(component, componentIndex)
          )}
        </div>
      ))}
    </div>
  );
};

export default DisplayConfigDrivenUI;
