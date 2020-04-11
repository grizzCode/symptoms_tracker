import React from "react";
import { Component } from "react";
import FacilitiesForm from "./testing_facilitiesForm";
import { Button, Modal } from "semantic-ui-react";
import axios from "axios";
import Facility from "./facility"

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

  deleteFacility = async( id)=>{
    const res = await axios.delete(`/api/testing_facilities/${id}`)
    console.log(res)
    this.getFacilities()
  }

  renderAllFacilities = () => (
    this.state.facilies.map(facility => {
      return (
        <>
          <div key={facility.id}>
            <Facility facility={facility} id={facility.id} deleteFacility={this.deleteFacility}/>
          </div>
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
