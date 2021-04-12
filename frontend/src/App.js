import logo from "./logo.svg";
import "./App.css";
import React, { useEffect, useState } from "react";
import { FindBook, AllBooks } from "./Views/Book";
import AddBook from "./Views/AddBook";
import Header from "./components/Header";

import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";

function App() {
  const LOCAL_STORAGE_KEY = "books";
  const [books, setBooks] = useState([]);
  const addBookHandler = (book) => {
    console.log(book);
  };

  useEffect(() => {
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(books));
  }, [books]);

  return (
    <div className='App'>
      <Header />
      <Router>
        <div>
          <Link to='/addbook'> Add book</Link>
        </div>
        <Link to='/books/'> Get all books</Link>
        <div></div>
        <Switch>
          <Route path='/books/:id' className='text-blue-500'>
            <FindBook />
          </Route>
          <Route path='/books/' className='text-blue-500'>
            <AllBooks />
          </Route>
        </Switch>
        <Route
          path='/addbook'
          render={(props) => <AddBook {...props} />}
        ></Route>
      </Router>
    </div>
  );
}

export default App;
