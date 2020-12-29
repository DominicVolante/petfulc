import React, { Component } from "react";
import ApiService from "../services/ApiService";

export default class Pet extends Component {
  state = {
    pet: {},
  };

  dequeueAndPeek = () => {
    this.props
      .dequeue()
      .then(this.props.getNextPet)
      .then(() => {
        ApiService.getPeople().then((res) => {
          this.props.setLine(res);
        });
      })
      .then(() => {
        this.props.handleShow();
        this.props.toggleAdopt();
        this.props.setInLine();
      });
  };

  showButton = () => {
    return (
      this.props.adopt && (
        <button className="btn" onClick={() => this.dequeueAndPeek()}>
          Pick Me!
        </button>
      )
    );
  };

  render() {
    const {
      age,
      breed,
      description,
      gender,
      imageURL,
      name,
      story,
    } = this.props.pet;
    return (
      <div className="pet-container">
        <h1>{this.props.title}</h1>

        <img className="pet-img" src={imageURL} alt="pet"></img>
        <div className="pet-details-container">
          <ul className="pet-details">
            <h2>{name}</h2>
            <li>Breed: {breed} </li> <li>Gender: {gender}</li>{" "}
            <li>Age: {age}</li>
            <li>Story: {story}</li>
            <li>Description: {description}</li>
          </ul>
          {this.showButton()}
        </div>
      </div>
    );
  }
}
