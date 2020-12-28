import React, { Component } from "react";
import { Link } from "react-router-dom";

export default class Home extends Component {
  render() {
    return (
      <div className="Homepage">
        <div className="page-container">
          <h1 className="welcome">Welcome to Petful Adoption Service</h1>
          <div className="process-container">
            <h2>Welcome to Petful!</h2>
            <p>
              Petful is an animal shelter that treats all animals with fairness.
              We follow a strict "first-in-first-out" policy. The focus here is
              to get all our animals placed in their forever-home without
              spending too much time in the shelter.
            </p>
            <p>
              We treat our animals with all the love we can spare, but no matter
              how well they're treated, it's stressful on animals to spend too
              much time in the shelter. That's why, when an animal comes to our
              shelter we make sure to find them a home as fast as possible,
              without neglecting any other animals.
            </p>
            <p>
              To adopt an animal, enter your name below. You'll be placed in a
              queue and when it's your turn, we'll show you the dog or cat
              available to you.
            </p>
            <h3>
              Can you provide a forever home to an animal in need?
              <br />
              Click{" "}
              <Link className="adopt" to="/adoption">
                Adopt
              </Link>{" "}
              to begin the process!
            </h3>
          </div>
        </div>
      </div>
    );
  }
}
