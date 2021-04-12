import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";

export function FindBook() {
  const { id } = useParams();
  const [book, setBook] = useState(null);
  const url = `/books/${id}`;
  useEffect(() => {
    axios.get(url).then((response) => {
      console.log(response.data);
      setBook(response.data);
    });
  }, [url]);

  if (book) {
    return (
      <div>
        <h1>{book.name}</h1>
        <h2>{book.author}</h2>
        <h3>{book.year}</h3>
        <h3>{book.genre}</h3>
      </div>
    );
  }
  return <div>No book</div>;
}

export function AllBooks() {
  const [books, setBook] = useState(null);
  const url = `/books/`;
  useEffect(() => {
    axios.get(url).then((response) => {
      console.log(response.data);
      setBook(response.data);
    });
  }, [url]);

  if (books) {
    return (
      <div>
        {books.books.map((book) => (
          <h1>{book.name}</h1>
        ))}
      </div>
    );
  }
  return <div>No book</div>;
}
