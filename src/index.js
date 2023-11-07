import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { ConfigProvider } from 'antd';

const theme = {
  components: {
    Button: {
      colorPrimary: '#FF5733',
      colorSecondary:"#DC143C",
      colorPrimaryHover : '#FFBF00',
      borderRadius: '4px'
    }
  },
  token: {
    borderRadius : '2px',
    colorPrimary: "#673AB7",
  },
};

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <ConfigProvider theme={theme}>
      <App />
    </ConfigProvider>
  </React.StrictMode>
);

reportWebVitals();
