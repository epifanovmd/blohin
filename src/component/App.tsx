import * as React from "react";

import "./App.css";
import Header from "./Header";
import Content from "./Content";
import Services from "../component/Services";
import Price from "./Price";
import Footer from "./Footer";

class App extends React.Component {
  public render() {
    return (
      <div className="container">
        <Header />
        <Content />
        <Services />
        <Price />
        <Footer />
      </div>
    );
  }
}

export default App;
