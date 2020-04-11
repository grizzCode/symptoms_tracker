import React, { Component } from "react";
import { Form, Checkbox, Modal } from "semantic-ui-react";
import Axios from "axios";

class Symptoms extends Component {
  state = {
    ill: false,
    pain: 0,
    breathing_function: "",
    temperature: 0.0,
    contact: false,
    breathing: false,
    facility: false,
    location: false,
    existing_diseases: false
  };

  componentDidMount(){
    if(this.props.record_id === undefined){
      //do nothing to set state
    } else {
      this.setupEditingForm()
    }
  }

  setupEditingForm = async() =>{
    const res = await Axios.get(`/api/symptoms/${this.props.record_id}`)
    this.setState({
      ill: res.data.ill,
      pain: res.data.pain,
      breathing_function: res.data.breathing_function,
      temperature: res.data.temperature,
      contact: res.data.contact,
      breathing: res.data.breathing,
      facility: res.data.facility,
      location: res.data.location,
      existing_diseases: res.data.existing_diseases
    })

  }

  handleChange = (e, { name, value }) => {
    this.setState({ [name]: value });
  };

  handleCheckBoxClick = (e, { name, checked }) => {
    this.setState({ [name]: checked });
  };
  handleSubmit = async()=> {
    if (this.props.record_id === undefined){
    await Axios.post('/api/symptoms', this.state)
  }else {
    await Axios.put(`/api/symptoms/${this.props.record_id}`, this.state)
  }
    this.clearForm()
    this.props.toggleForm()
    this.props.getSymptoms()
  }

  clearForm(){
    this.setState({
      ill: false,
      pain: 0,
      breathing_function: "",
      temperature: 0.0,
      contact: false,
      breathing: false,
      facility: false,
      location: false,
      existing_diseases: false
    });
  }


  render() {
    const {
      ill,
      pain,
      breathing_function,
      temperature,
      contact,
      breathing,
      facility,
      existing_diseases
    } = this.state;
    return (

      <Modal.Content style={styles.modal}>
        <Form onSubmit={this.hanleSubmit}>
          <Form.Group>
            <Form.Input>
              <Checkbox
                name="ill"
                label="Are you Feeling Ill Today?"
                checked={ill}
                onClick={this.handleCheckBoxClick}
              />
            </Form.Input>
            <Form.Input
              name="pain"
              label="How Much pain are you feeling today?(1-10)"
              placeholder="0"
              value={pain}
              onChange={this.handleChange}
            />
            <Form.Input
              name="breathing_function"
              label="Difficulty with breathing function?(Yes/no)"
              placeholder="No"
              value={breathing_function}
              onChange={this.handleChange}
            />
            <Form.Input
              name="temperature"
              label="What is your current Temperature?"
              placeholder="98.6"
              value={temperature}
              onChange={this.handleChange}
            />
            <Form.Input>
              <Checkbox
                name="contact"
                label="Have you been in Contact with anyone that has Contracted?"
                checked={contact}
                onClick={this.handleCheckBoxClick}
              />
            </Form.Input>
            <Form.Input>
              <Checkbox
                name="breathing"
                label="Have you had difficulty Breathing?"
                checked={breathing}
                onClick={this.handleCheckBoxClick}
              />
            </Form.Input>
            <Form.Input>
              <Checkbox
                name="facility"
                label="Are you in a long term care Facilty?"
                checked={facility}
                onClick={this.handleCheckBoxClick}
              />
            </Form.Input>
            <Form.Input>
              <Checkbox
                name="existing_diseases"
                label="Do you have any preexisting Cardiovascular or Resperatory conditions?"
                checked={existing_diseases}
                onClick={this.handleCheckBoxClick}
              />
            </Form.Input>
          </Form.Group>
          <Form.Button onClick={this.handleSubmit}>Submit</Form.Button>
        </Form>
      </Modal.Content>
    );
  }
}

export default Symptoms;


const styles = {
  modal: {
    // display: flex,
    height: "200px",
    width: "1200px",
    overflow: "auto"
  }
};