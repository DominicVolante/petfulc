import React, { Component } from "react";
import ApiService from "../services/ApiService";

export default class AddNameForm extends Component {
  handleSubmit = (e) => {
    e.preventDefault();
    const { name } = e.target;
    ApiService.postPerson({ person: name.value }).then(
      this.props.setLine(name.value)
    );
    this.props.setInLine();
    this.props.setPerson(name.value);
    this.props.deleteCat();
  };
  render() {
    return (
      <div className="add-form">
        <form onSubmit={(e) => this.handleSubmit(e)}>
          <input
            className="name-input"
            name="name"
            placeholder="Your Name"
          ></input>
          <button className="btn" type="submit">
            Get in Line
          </button>
        </form>
      </div>
    );
  }
}
