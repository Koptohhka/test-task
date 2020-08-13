import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import store from './redux/store';
import App from './App';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Provider store={store}>
        <App />
      </Provider>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root'),
);

serviceWorker.unregister();

// "eslint": "^7.6.0",
// "eslint-config-airbnb": "^18.2.0",
// "eslint-plugin-import": "^2.22.0",
// "eslint-plugin-jsx-a11y": "^6.3.1",
// "eslint-plugin-react": "^7.20.6",
// "eslint-plugin-react-hooks": "^4.0.8",
