import React from 'react'
import { Component } from 'react'
import { Form, Modal } from 'semantic-ui-react'
import axios from 'axios'

export default class FacilitiesForm extends Component{
state ={
  name: '',
  street: '',
  city: '',
  zip: '',
  county: '',
  hours: '',
}

componentDidMount(){
  if(this.props.id === undefined){
    //do nothing
  } else {
    this.getFacility()
  }
}

getFacility = async() => {

  const res = await axios.get(
    `/api/testing_facilities/${this.props.id}`
  );

  this.setState({
    name: res.data.name,
    street: res.data.street,
    city: res.data.city, 
    zip: res.data.zip, 
    county: res.data.county, 
    hours: res.data.hours
  });
}

handleChange= (e, {name, value}) =>{
  this.setState({
    [name]:value
  })
}

clearState = () =>{
  this.setState({
  name: '',
  street: '',
  city: '',
  zip: '',
  county: '',
  hours: ''
  })
}
handleSubmit = () =>{

  if (this.props.id === null ){
  axios
    .post(`/api/testing_facilities`, this.state)
    .then(res => console.log(res))
    .catch(err => console.log(err));
  } else{
    axios.put(`/api/testing_facilties/${this.props.id}`, this.state)
    .then(res => console.log(res))
    .catch(err => console.log(err))
  }
 
}

handleCancel = () =>{
  this.clearState()
  this.props.toggleForm()
}

render(){
  const {name, street, city, zip, county, hours} = this.state
  return (
    <>
      <Modal.Content>
        <Form onSubmit={this.handleSubmit}>
            <Form.Input
              name="name"
              label="Facility Name"
              placeholder="place you want to go"
              value={name}
              onChange={this.handleChange}
              required
            />
            <Form.Input
              name="street"
              label="street"
              placeholder="street"
              value={street}
              onChange={this.handleChange}
              required
            />
            <Form.Input
              name="city"
              label="city"
              placeholder="city"
              value={city}
              onChange={this.handleChange}
              required
            />
            <Form.Input
              name="zip"
              label="zip"
              placeholder="zip"
              value={zip}
              onChange={this.handleChange}
              required
            />
            <Form.Input
              name="county"
              label="county"
              placeholder="county"
              value={county}
              onChange={this.handleChange}
              required
            />
            <Form.Input
              name="hours"
              label="hours"
              placeholder="hours"
              value={hours}
              onChange={this.handleChange}
              required
            />
          <Form.Button type="submit">Submit</Form.Button>
          <Form.Button color="red" onClick={this.handleCancel}>Cancel</Form.Button>
        </Form>
      </Modal.Content>
    </>
  );
}
}