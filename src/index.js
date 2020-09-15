import React from 'react';
import ReactDOM from 'react-dom';
import Routes from 'routes';
import {BrowserRouter} from 'react-router-dom';
import TopBar from 'components/topBar';

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <TopBar />
        <Routes />
      </BrowserRouter>
    </div>
  )
}

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

