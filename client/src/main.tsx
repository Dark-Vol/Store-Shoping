import React from 'react';
import ReactDOM from 'react-dom/client';
import RouterSystem from './RouterSystem';
import "./scss/reset.scss"
import ClickSpark from './ClickSpark'


const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <ClickSpark
    sparkColor='black'
    sparkSize={10}
    sparkRadius={15}
    sparkCount={8}
    duration={400}
  >
    <React.StrictMode>
      <RouterSystem />
    </React.StrictMode>
  </ClickSpark>
);