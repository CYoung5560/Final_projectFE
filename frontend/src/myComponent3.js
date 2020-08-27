import React from "react";

import "./App.css";
import axios from 'axios';




export default class PersonList extends React.Component {
    componentDidMount() {
        axios.get(`https://jsonplaceholder.typicode.com/users/1`)
          .then(res => {
            const persons = res.data;
            console.log(persons)
            let userID = persons.id;
            let personName = persons.name;
            let emails = persons.email;
            let username = persons.userName;
            this.setState({ persons,userID,personName,emails,username
        });
        console.log(personName)
        console.log(userID)
          })
      }
  state = {
      id: this.userID,
    uname: this.personName,
    email:this.emails,
    userName:this.username
  }

  handleChange = event => {
    this.setState({ name: event.target.value });
  }

  handleSubmit = event => {
    event.preventDefault();

    const user = {
      name: this.state.name
    };

    axios.post(`https://jsonplaceholder.typicode.com/users`, { user })
      .then(res => {
        console.log(res);
        console.log(res.data);
        let id = res.data.id
        
        alert(id)
        console.log("this is the state",this.state());
      })
  }

  
  render() {
    return (
        
      
        <div>
       
    <h1>Let us update some data + {this.state.uname} dksdfklkds</h1>
        <form onSubmit={this.handleSubmit} class="form-group">
          <label>
            Person id:
            <input class="form-control" value= {this.state.id} type="text" name="id" />
          </label>
          <br/>
          <label>
            Person Name:
            <input class="form-control" type="text" value= {this.state.name} name="name" />
          </label>
          <br/>
          <label>
            Person title:
            <input class="form-control" type="text" name="email" onChange={this.handleChange} />
          </label>
          <br/>
          <label>
            Person body:
            <input class="form-control" type="text" name="username" onChange={this.handleChange} />
          </label>
          <br/>
          <button class="btn btn-danger" type="submit">update</button>
        </form>
      </div>
    )
  }
}



