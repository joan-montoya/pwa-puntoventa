import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {BrowserRouter,Routes,Route} from "react-router-dom";
import Ids from './routes/ids';
import Id from './routes/ids';

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
<Routes>
  <Route path= "/" element= {<App />}>
    <Route path= "/id" element={<Id />} >
      <Route path= ":idsId" element= {<Ids/>}/>
      </Route>
  </Route>
</Routes>
</BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
