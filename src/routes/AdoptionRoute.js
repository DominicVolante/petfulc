import React, { Component } from "react";
import PetList from "../components/PetList";
import PeopleList from "../components/PeopleList";
import ApiService from "../services/ApiService";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";

export default class Adoption extends Component {
  constructor(props) {
    super(props);
    this.state = {
      cat: {},
      dog: {},
      line: [],
      inLine: false,
      adopt: false,
      person: "",
      nextInLine: null,
      dequeueCat: false,
      dequeueDog: false,
      show: false,
      error: null,
    };
    this.timer = null;
  }

  componentDidMount() {
    this.getNextCat();
    this.getNextDog();
    ApiService.getPeople().then((res) => {
      this.setState({ line: res });
    });
    ApiService.getNextPerson()
      .then((res) => this.setState({ nextInLine: res }))
      .catch((res) => this.setState({ error: res }));
  }
  componentDidUpdate(prevState) {
    if (this.state.line[0] !== this.state.person) {
      if (this.timer === null && this.state.inLine === true) {
        this.timer = setInterval(() => {
          this.generatePetQueue();
          this.generatePeopleQueue(this.state.nextInLine);
        }, 6000);
      }
    }
    if (this.state.line[0] === this.state.person && this.timer !== null) {
      clearInterval(this.timer);
      this.timer = null;
      if (prevState.adopt !== true) {
        this.toggleAdopt();
      }
    }
  }
  getNextCat = () => {
    return ApiService.getCats().then((res) => {
      this.setState({ cat: res });
    });
  };
  getNextDog = () => {
    return ApiService.getDogs().then((res) => this.setState({ dog: res }));
  };
  setAdopt = () => {
    this.state.nextInLine === this.state.person &&
      this.setState({ adopt: true });
  };
  toggleAdopt = () => {
    this.setState({ adopt: !this.state.adopt });
  };
  setLine = (person) => {
    this.setState({ line: [...this.state.line, person] });
  };
  setInLine = () => {
    this.setState({ inLine: !this.state.inLine });
  };
  getAndSetLine = (res) => {
    this.setState({ line: res });
  };
  deleteCat = () => {
    this.setState({ dequeueCat: !this.state.dequeueCat });
  };
  deleteDog = () => {
    this.setState({ dequeueDog: !this.state.dequeueDog });
  };
  setPerson = (name) => {
    this.setState({ person: name });
  };
  generatePetQueue = () => {
    if (this.state.dequeueCat === true) {
      ApiService.dequeueCats().then(() => {
        ApiService.getCats()
          .then((res) => {
            this.setState({ cat: res });
            ApiService.getNextPerson().then((res) =>
              this.setState({ nextInLine: res })
            );
            this.deleteCat();
            this.deleteDog();
          })
          .catch((res) => {
            this.setState({ cat: res });
            this.deleteCat();
            this.deleteDog();
          });
      });
    } else if (this.state.dequeueDog === true) {
      ApiService.dequeueDogs().then(() => {
        ApiService.getDogs()
          .then((res) => {
            this.setState({ dog: res });
            ApiService.getNextPerson().then((res) =>
              this.setState({ nextInLine: res })
            );
            this.deleteCat();
            this.deleteDog();
          })
          .catch((res) => {
            this.setState({ dog: res });
            this.deleteCat();
            this.deleteDog();
          });
      });
    }
  };
  generatePeopleQueue = (name) => {
    ApiService.postPerson({ person: name }).then(() => {
      ApiService.getPeople().then((res) => this.setState({ line: res }));
    });
  };
  handleShow = () => {
    this.setState({ show: true });
  };

  handleClose = () => {
    this.setState({ show: false, dequeueCat: false, dequeueDog: false });
  };
  renderAdopt = () => {
    return (
      <div>
        {this.state.adopt === true && (
          <h2>It's your turn! Which pet is coming home?</h2>
        )}
      </div>
    );
  };

  render() {
    return (
      <div className="adoption-container">
        <PeopleList
          line={this.state.line}
          inLine={this.state.inLine}
          setInLine={this.setInLine}
          setPerson={this.setPerson}
          deleteCat={this.deleteCat}
          setLine={this.setLine}
        />

        {this.renderAdopt()}
        <PetList
          toggleAdopt={this.toggleAdopt}
          getNextCat={this.getNextCat}
          getNextDog={this.getNextDog}
          adopt={this.state.adopt}
          cat={this.state.cat}
          dog={this.state.dog}
          setInLine={this.setInLine}
          handleShow={this.handleShow}
          setLine={this.getAndSetLine}
        />

        <div className="popup-container">
          <Modal
            className="popup"
            show={this.state.show}
            onHide={this.handleClose}
          >
            <Modal.Header>
              <Modal.Title>Congratulations!</Modal.Title>
            </Modal.Header>
            <Modal.Body>You have a new best friend!</Modal.Body>
            <Modal.Footer>
              <Button
                className="btn"
                variant="primary"
                onClick={this.handleClose}
              >
                Exit
              </Button>
            </Modal.Footer>
          </Modal>
        </div>
      </div>
    );
  }
}
