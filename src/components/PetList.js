import React, { Component } from "react";
import ApiService from "../services/ApiService";
import Pet from "./Pet";

export default class PetList extends Component {
  renderError = () => {
    return <h1>No more pets!</h1>;
  };

  render() {
    return (
      <div className="pet-list">
        {this.props.cat.message ? (
          <div className="error">{this.renderError()}</div>
        ) : (
          <Pet
            title="Cat"
            key="Cat"
            toggleAdopt={this.props.toggleAdopt}
            dequeue={ApiService.dequeueCats}
            adopt={this.props.adopt}
            pet={this.props.cat}
            getNextPet={this.props.nextCat}
            handleShow={this.props.handleShow}
            setInLine={this.props.setInLine}
            setLine={this.props.setLine}
          />
        )}

        {this.props.dog.message ? (
          <div className="error">{this.renderError()}</div>
        ) : (
          <Pet
            title="Dog"
            key="Dog"
            toggleAdopt={this.props.toggleAdopt}
            dequeue={ApiService.dequeueDogs}
            adopt={this.props.adopt}
            pet={this.props.dog}
            getNextPet={this.props.nextDog}
            handleShow={this.props.handleShow}
            setInLine={this.props.setInLine}
            setLine={this.props.setLine}
          />
        )}
      </div>
    );
  }
}
