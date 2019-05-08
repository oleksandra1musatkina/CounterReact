import React from "react";
import ReactDOM from "react-dom";

import Counter from "./Counter";
import Header from "./Header";
import Footer from "./Footer/Footer";

// import Hello from "./Hello";

import "./styles.css";

function App() {
  return (
    //   <div>
    //     <Counter />
    //   </div>
    // );
    <div>
      <Header />
      <div className="body">
        <Counter />
      </div>
      <Footer />
    </div>
  );
}
const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
