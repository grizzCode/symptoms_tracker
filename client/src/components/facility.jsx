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
      <div key={facility.id} style={{border: '1px solid grey', margin:'16px', borderRadius:'3px', boxShadow: '2px 2px 8px black', padding: '6px'}}>
        <div>Name: {facility.name}</div>
        <hr />
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
        < hr/>
        <Button primary size='mini' onClick={this.toggleForm} color="blue">
          Edit
        </Button>
        <Modal secondary size='mini' open={this.state.editing} close={this.toggleForm}>
          <FacilitiesForm toggleForm={this.toggleForm} {...this.props} />
        </Modal>

        <Button
          onClick={() => this.props.deleteFacility(this.props.id)}
          secondary size='mini'
        >
          Delete
        </Button>
      </div>
    );
  }
}
