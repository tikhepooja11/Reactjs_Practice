// Portals ->  Means You can render a child component at a different place in a DOM tree outside the parent component
//  useful for scenarios like modals, popovers, tooltips, and other overlays.

import React, { useState } from 'react';
import ReactDOM from 'react-dom';

const PortalComponent = () => {
  const [showPortal, setShowPortal] = useState(false);

  const handleClick = () => {
    setShowPortal(!showPortal);
  };

  return (
    <div>
      <button onClick={handleClick}>Toggle Portal</button>
      {showPortal && (
        ReactDOM.createPortal(
          <div className="portal-content">
            This content is rendered outside the root DOM element.
          </div>,
          document.getElementById('portal-root')
        )
      )}
    </div>
  );
};

const App = () => {
  return (
    <div>
      <h1>Main App Content</h1>
      <div id="portal-root"></div>
      <PortalComponent />
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById('root'));
