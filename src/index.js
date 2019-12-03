import React from "react";
import ReactDOM from "react-dom";

import UseStateHook from './containers/UseStateHook'

function App() {
  return (
    <div className="App">
       <UseStateHook/>
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
