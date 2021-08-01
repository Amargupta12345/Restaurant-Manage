import React from 'react'
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Customer from "./components/Customer";
import Added from "./components/Added";
// import GenratedBill from "./components/GenratedBill";


const App = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Customer} />
        <Route exact path="/add" component={Added} />
      
      </Switch>
    </BrowserRouter>
  );
}

export default App
