import React from "react";
import "./styles.css";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      comments: "",
      select: "vue"
    };
  }
  handleUserNameChange = (event) => {
    this.setState({ username: event.target.value });
  };
  handleCommentChange = (event) => {
    this.setState({ comments: event.target.value });
  };
  handTopicChange = (event) => {
    this.setState({ select: event.target.value });
  };
  handleSubmit = (event) => {
    event.preventDefault();
    alert(
      this.state.username + " " + this.state.comments + " " + this.state.select
    );
  };
  render() {
    return (
      <form onSubmit={this.handleSubmit} className="App">
        <div>
          <label>User Name</label>
          <input
            type="text"
            onChange={this.handleUserNameChange}
            value={this.state.username}
          />
        </div>
        <div>
          <label>Comments</label>
          <textarea
            type="text"
            value={this.state.comments}
            onChange={this.handleCommentChange}
          />
        </div>
        <div>
          <label>Select</label>
          <select value={this.state.select} onChange={this.handTopicChange}>
            <option value="react">React</option>
            <option value="angular">Angular</option>
            <option value="vue">Vue</option>
          </select>
        </div>
        <button>Submit</button>
      </form>
    );
  }
}

export default App;
