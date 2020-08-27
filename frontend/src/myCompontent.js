import React from "react";
import "./App.css";
// import App2 from './myAddress.js'
// import salary from './SalarySlip';
import axios from 'axios';
import Posting from './myCompontent2';
import ClockTime from './myComponent3';
import Delete from './myComponent4';
import Task from './myComponent5';




class PersonList extends React.Component {
  state = {
    persons: []
  }

  componentDidMount() {
    //the url i want to get
    axios.get(`https://jsonplaceholder.typicode.com/users`)
      .then(res => {
        // we store the response data
        const persons = res.data;
        // logging the data
        console.log("my data",persons)
        //we setState from the data we got
        this.setState({ persons });
      })
  }

  render() {
    return (
      <div class="container">
      <div>
        <table class="table table-striped table-dark">
          <thead>
            <tr>
              <td>
                id
              </td>
              <td>
                name
              </td>
              <td>
                email
              </td>
              <td>
                username
              </td>
            </tr>
          </thead>
          <tbody>
        <tr>
          <td>
          { this.state.persons.map(person => <tr>{person.id}</tr>)}
          </td>
          <td>
          { this.state.persons.map(person => <tr>{person.name}</tr>)}
          </td>
          <td>
          { this.state.persons.map(person => <tr>{person.email}</tr>)}
          </td>
          <td>
          { this.state.persons.map(person => <tr>{person.username}</tr>)}
          </td>
          <td>
          { this.state.persons.map(person => <tr>{person.company.city}</tr>)}
          </td>
        </tr>
        </tbody>
        <tfoot>
          My data
        </tfoot>
        </table>
      <div>
        <Posting/>
      </div>

      <div>
        <Delete/>
      </div>
      <div>
        {/* <ClockTime/> */}
      </div>
      <div>
       
      </div>
      </div>
      </div>
    )
  }
}


// function App1() {
//   return (
   
//     <h1>
//       <h2>Java</h2>
//       <b>QA</b>
//       <br/>
//       <u>Consulting</u>
//       <App2/>
  
//     </h1>
//   );
// }



// export default App1;

export default PersonList;
