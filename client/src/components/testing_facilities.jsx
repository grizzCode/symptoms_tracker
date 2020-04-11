import React from "react";
import { Component } from "react";
import FacilitiesForm from "./testing_facilitiesForm";
import { Button, Modal } from "semantic-ui-react";
import axios from "axios";

export default class TestingFacilities extends Component {
  state = {
    facilies: [],
    newForm: false
  };

  componentDidMount(){
    this.getFacilities()
  };

  getFacilities = async() => {
        const res = await axios.get(`/api/testing_facilities/`);
        this.setState({
          facilies: res.data
        });
  }

  toggleForm = () => {
    this.setState({
      newForm: !this.state.newForm
    });
  };

  renderAllFacilities = () => (
    this.state.facilies.map(facility => {
      return (
        <>
          <div key={facility.id}>{facility.name}</div>
        </>
      );
    })
  )

  render() {
    return (
      <>
        <Button onClick={this.toggleForm}>New </Button>
        <Modal open={this.state.newForm} close={this.toggleForm}>
          <FacilitiesForm toggleForm={this.toggleForm} />
        </Modal>
        {this.renderAllFacilities()}
      </>
    );
  }
}
