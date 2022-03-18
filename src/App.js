import React from "react"
import Header from "./components/elements/Header";
import SwipeButtons from "./components/pages/SwipeButtons";
import TinderCards from "./components/pages/TinderCards";

function App() {
  return (
    <div className="app">
      <Header />
      <TinderCards />
      <SwipeButtons />
    </div>
  );
}

export default App;
