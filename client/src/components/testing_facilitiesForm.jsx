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
            />
            <Form.Input
              name="street"
              label="street"
              placeholder="street"
              value={street}
              onChange={this.handleChange}
            />
            <Form.Input
              name="city"
              label="city"
              placeholder="city"
              value={city}
              onChange={this.handleChange}
            />
            <Form.Input
              name="zip"
              label="zip"
              placeholder="zip"
              value={zip}
              onChange={this.handleChange}
            />
            <Form.Input
              name="county"
              label="county"
              placeholder="county"
              value={county}
              onChange={this.handleChange}
            />
            <Form.Input
              name="hours"
              label="hours"
              placeholder="hours"
              value={hours}
              onChange={this.handleChange}
            />
          </Form.Group>
          <Form.Button type="submit">Submit</Form.Button>
        </Form>
      </Modal.Content>
    </>
  );
}
}