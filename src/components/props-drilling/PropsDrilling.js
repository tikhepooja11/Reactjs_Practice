//  Props are passed down from parent components to child components.
//  If a component in the middle doesn't need the props but has to relay them to its children, it's called props drilling.

//  In this example, GrandparentComponent contains the data and passes it down to ParentComponent as a prop. 
//  ParentComponent then passes it down to ChildComponent. This is the typical flow of props drilling.

// GrandparentComponent
import React from 'react';
import ParentComponent from './ParentComponent';

const GrandparentComponent = () => {
  const data = 'Hello, Props Drilling!';

  return <ParentComponent data={data} />;
};

export default GrandparentComponent;



// ParentComponent
import React from 'react';
import ChildComponent from './ChildComponent';

const ParentComponent = ({ data }) => {
  return <ChildComponent data={data} />;
};

export default ParentComponent;


// ChildComponent
import React from 'react';

const ChildComponent = ({ data }) => {
  return <p>{data}</p>;
};

export default ChildComponent;
