import React, {Component} from 'react'
import {Form} from 'semantic-ui-react'


class Symptoms extends Component{
state = {
  ill: false,
  pain: 0,
  breathing_function: '',
  temperature: 0.00,
  contact: false,
  breathing: false,
  facility: false,
  location: false,
  existing_diseases: false,
}

handleChange = (e, {name, value}) => {this.setState({[name]: value})}

handleCheckBoxClick = (e, {data}) => {
  const value = data.checked
  console.log(data)
  this.setState({[data.name]: data.checked})
  console.log(value)
}

  render(){
    const {
      ill, 
      pain, 
      breathing_function, 
      temperature, contact, 
      breathing, facility, 
      location, 
      existing_diseases
    } = this.state
    return(
      <>
        <Form> 
           <Form.Group>
          <Form.Input>
            <Checkbox           
            name='ill'
            label="Are you Feeling Ill Today?"
            checked={ill}
            onClick={this.handleCheckBoxClick} 
          />
          </Form.Input>
          <Form.Input 
          name='pain'
          label="How Much pain are you feeling today?(1-10)"
          placeholder="0"
          value={pain}
          onChange={this.handleChange}
          />
          <Form.Input 
          name='breathing_function'
          label="Difficulty with breathing function?(Yes/no)"
          placeholder="No"
          value={breathing_function}
          onChange={this.handleChange}
          />
          <Form.Input 
          name='temperature'
          label="What is your current Temperature?"
          placeholder="98.6"
          value={temperature}
          onChange={this.handleChange}
          />
           <Form.Input>
            <Checkbox           
            name='contact'
            label="Have you been in Contact with anyone that has Contracted?"
            checked={contact}
            onClick={this.handleCheckBoxClick} 
          />
          </Form.Input>
          <Form.Input>
            <Checkbox           
            name='breathing'
            label="Have you had difficulty Breathing?"
            checked={breathing}
            onClick={this.handleCheckBoxClick} 
          />
          </Form.Input>
           <Form.Input>
            <Checkbox           
            name='facility'
            label="Are you in a long term care Facilty?"
            checked={facility}
            onClick={this.handleCheckBoxClick} 
          />
          </Form.Input>
          <Form.Input>
            <Checkbox           
            name='existing_diseases'
            label="Do you have any preexisting Cardiovascular or Resperatory conditions?"
            checked={existing_diseases}
            onClick={this.handleCheckBoxClick} 
          />
          </Form.Input>
          </Form.Group>
        </Form>
      </>
    )
  }
}

export default Symptoms