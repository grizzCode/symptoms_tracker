import React from "react";
import { Component } from "react";
import { Button, Modal } from "semantic-ui-react";
import FacilitiesForm from "./testing_facilitiesForm";

export default class Facility extends Component {
  state = {
    editing: false
  };

  toggleForm = () => {
    this.setState({
      editing: !this.state.editing
    });
  };

  render() {
    const { facility } = this.props;
    return (
      <div key={facility.id}>
        <div>Name: {facility.name}</div>
        <div>
          Address:
          <br /> 
          {facility.street}
          <br />
          {facility.city}
          <br />
          {facility.zip}
          <br />
          {facility.country}
        </div>
        <div>Hours: {facility.hours}</div>
        <Button onClick={this.toggleForm} color="blue">
          Edit
        </Button>
        <Modal open={this.state.editing} close={this.toggleForm}>
          <FacilitiesForm toggleForm={this.toggleForm} {...this.props} />
        </Modal>
        <Button
          onClick={() => this.props.deleteFacility(this.props.id)}
          color="red"
        >
          Delete
        </Button>
      </div>
    );
  }
}
