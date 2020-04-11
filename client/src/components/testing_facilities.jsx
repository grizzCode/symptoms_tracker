import React from "react";
import { Component } from "react";
import FacilitiesForm from "./testing_facilitiesForm";
import { Button, Modal, } from "semantic-ui-react";
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
        console.log(res)
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
          <div>{facility.name}</div>
        </>
      );
    })
  )

  render() {
    return (
      <>
      <br/>
        <h3>Add a new testing facility</h3>
        <br/>
        <Button style={style.button} fluid onClick={this.toggleForm}>New </Button>
        <Modal open={this.state.newForm} close={this.toggleForm}>
          <FacilitiesForm toggleForm={this.toggleForm} />
        </Modal>
        {this.renderAllFacilities()}
       
      </>
    );
  }
}

const style ={
  button: {
    backgroundColor: "lightblue"
  }
}
