import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {BrowserRouter,Routes,Route} from "react-router-dom";
import Matricu from './routes/matricu';
import Matricula from './routes/matricula';
import Pokemons from './routes/pokemons';
import Pokemon from './routes/pokemon';

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
<Routes>
  <Route path= "/" element= {<App />}>
  <Route path= "/pokemons" element={<Pokemons />} >
  <Route path=":pokemonId" element={<Pokemon />} />
    </Route>
    <Route path= "/190967" element={<Matricula />} >
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
