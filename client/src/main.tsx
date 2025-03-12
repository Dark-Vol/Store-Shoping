import React from 'react';
import ReactDOM from 'react-dom/client';
import RouterSystem from './RouterSystem';
import "./scss/reset.scss"


const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
    <React.StrictMode>
      <RouterSystem />
    </React.StrictMode>
);