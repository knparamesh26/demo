import { h } from "preact";
import { Router } from "preact-router";

import Header from "./header";

import Home from "../routes/home";
import Pokemon from "../routes/pokemon";
import Character from "../routes/character";

const App = () => (
  <div id="app">
    <Header />
    <Router>
      <Home path="/" />
      <Pokemon path="/pokemon" />
      <Character path="pokemon/character/:id" />
    </Router>
  </div>
);

export default App;
