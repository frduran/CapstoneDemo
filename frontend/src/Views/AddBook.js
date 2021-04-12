import axios from "axios";
import React from "react";

class AddBook extends React.Component {
  state = {
    name: "",
    author: "",
    genre: "",
    year: "",
  };

  add = (e) => {
    e.preventDefault();
    console.log(this.state);
    if (
      this.state.name === "" ||
      this.state.author === "" ||
      this.state.genre === "" ||
      this.state.year === ""
    ) {
      alert("ALL the fields are mandatory!");
      return;
    }
    axios
      .post("/books", this.state)
      .then((response) => {
        console.log(response);
      })
      .catch((error) => {
        console.log(error);
      });

    this.setState({ name: "", author: "", genre: "", year: "" });
    this.props.history.push("/addbook");
  };
  render() {
    return (
      <div className='ui main'>
        <h2>Add Book</h2>
        <form className='ui form' onSubmit={this.add}>
          <div className='field'>
            <label>Name</label>
            <input
              type='text'
              name='name'
              placeholder='Name'
              value={this.state.name}
              onChange={(e) => this.setState({ name: e.target.value })}
            />
          </div>
          <div className='field'>
            <label>Author</label>
            <input
              type='text'
              name='author'
              placeholder='Author'
              value={this.state.author}
              onChange={(e) => this.setState({ author: e.target.value })}
            />
          </div>
          <div className='field'>
            <label>Genre</label>
            <input
              type='text'
              name='genre'
              placeholder='Genre'
              value={this.state.genre}
              onChange={(e) => this.setState({ genre: e.target.value })}
            />
          </div>
          <div className='field'>
            <label>Year</label>
            <input
              type='text'
              name='year'
              placeholder='Year'
              value={this.state.year}
              onChange={(e) => this.setState({ year: e.target.value })}
            />
          </div>
          <button className='ui button blue'>Add</button>
        </form>
      </div>
    );
  }
}

export default AddBook;
