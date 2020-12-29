import React, { Component } from "react";
import AddNameForm from "./AddNameForm";

export default class PeopleList extends Component {
  peopleQueue = () => {
    return this.props.line.map((index, i) => (
      <li key={btoa(index + i)}>{index}</li>
    ));
  };
  render() {
    return (
      <div className="people-container">
        <h2>Adoption line:</h2>
        <ul>{this.peopleQueue()} </ul>
        {!this.props.inLine && (
          <AddNameForm
            setInLine={this.props.setInLine}
            setPerson={this.props.setPerson}
            setLine={this.props.setLine}
            deleteCat={this.props.deleteCat}
          />
        )}
      </div>
    );
  }
}
