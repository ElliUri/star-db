import React, {Component} from "react";

export default class ErrorButton extends Component {
  state = {
    renderError: false,
  };

  render() {
    if (this.state.renderError) {
      this.foo.bar = 0;
    }

    return (
      <button
        className="error-button btn btn-danger btn-lg"
        onClick={() => this.setState({ renderError: true })}>
        Throw Error
      </button>
    );
  }
}


// import React from 'react';
// import axios from 'axios';

// class MessageForm extends React.Component {
//   constructor(props) {
//     super(props);
  //   this.state = {
  //     message: '',
  //     response: '',
  //     error: ''
  //   };
  // }

  // handleMessageChange = (event) => {
  //   this.setState({ message: event.target.value });
  // }

  // handleSubmit = (event) => {
  //   event.preventDefault();

    // Create a payload object with the message
    // const payload = {
    //   message: this.state.message
    // };

    // Send a POST request to the API endpoint
//     axios.post('http://13.53.133.130/email/email/api/', payload)
//       .then(response => {
//         this.setState({ response: response.data, error: '' });
//       })
//       .catch(error => {
//         this.setState({ response: '', error: 'An error occurred.' });
//       });
//   }

//   render() {
//     return (
//       <div>
//         <form onSubmit={this.handleSubmit}>
//           <label>
//             Message:
//             <input type="text" value={this.state.message} onChange={this.handleMessageChange} />
//           </label>
//           <button type="submit">Send</button>
//         </form>
//         {this.state.response && <div>Response: {this.state.response}</div>}
//         {this.state.error && <div>Error: {this.state.error}</div>}
//       </div>
//     );
//   }
// }

// export default MessageForm;
