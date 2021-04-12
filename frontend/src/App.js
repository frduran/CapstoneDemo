import logo from "./logo.svg";
import "./App.css";
import { FindBook, AllBooks } from "./Views/Book";
import Header from "./components/Header";
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";

function App() {
  return (
    <div className='App'>
      <Header />
      <Router>
        <Switch>
          <Route path='/books/:id' className='text-blue-500'>
            <FindBook />
          </Route>
          <Route path='/books/' className='text-blue-500'>
            <AllBooks />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
