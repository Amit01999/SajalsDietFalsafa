import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import './index.css';
import App from './App.jsx';
// import SmoothScrollWrapper from './utils/SmoothScrollWrapper.jsx';
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      {/* <SmoothScrollWrapper> */}
      <App />
      {/* </SmoothScrollWrapper> */}
    </BrowserRouter>
  </StrictMode>
);
