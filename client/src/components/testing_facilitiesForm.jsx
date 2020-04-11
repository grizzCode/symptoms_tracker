import React from 'react'
import { Component } from 'react'
import { Form, Modal } from 'semantic-ui-react'

export default class FacilitiesForm extends Component{
state ={
  name: '',
  street: '',
  city: '',
  zip: '',
  county: '',
  hours: ''
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

handleCancel = () =>{
  this.clearState()
  this.props.toggleForm()
}

render(){
  const {name, street, city, zip, county, hours} = this.state
  return (
    <>
      <p>Facilities Form</p>
      <Modal.Content>
        <Form onSubmit={this.handleSubmit}>
          <Form.Group>
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
          </Form.Group>
          <Form.Button type="submit">Submit</Form.Button>
          <Form.Button color="red" onClick={this.handleCancel}>Cancel</Form.Button>
        </Form>
      </Modal.Content>
    </>
  );
}
}