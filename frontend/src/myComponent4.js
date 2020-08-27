import React from 'react';
import axios from 'axios';

export default class PersonList extends React.Component {
  state = {
    id: '',
  }

  handleChange = event => {
    this.setState({ id: event.target.value });
  }

  handleSubmit = event => {
    event.preventDefault();

    axios.delete(`https://jsonplaceholder.typicode.com/users/${this.state.id}`)
      .then(res => {
        console.log(res);
        //nothing!!
        console.log(res.data);
      })
  }

  render() {
    return (
      <div>
        <form class="form-group" onSubmit={this.handleSubmit}>
          <label>
            Person ID:
            <input class="form-control" type="text" name="id" onChange={this.handleChange} />
          </label>
          <button class="btn btn-danger" type="submit">Delete</button>
        </form>
      </div>
    )
  }
}