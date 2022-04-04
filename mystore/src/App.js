import Navbar from "./component/Navbar";
import "./App.css";
import Home from "./component/Home";
import {Router , Route} from 'react-router'
import Products from "./component/Products";
// import { Router } from "react-router-dom";


function App() {
  return (
    <>
      <Navbar />
      <Home/>

      {/* <Router> */}

      {/* <Route exact path="/" component={Home} />
      <Route exact path="/products" component={Products} />
      </Router> */}
    </>
  );
}

export default App;
