import React from 'react';
import { AuthConsumer, } from "../providers/AuthProvider";
import { Button, Form, Segment, Header, } from 'semantic-ui-react';

class Register extends React.Component {
  state = { email: '', password: '', passwordConfirmation: '', };
  
  handleSubmit = (e) => {
    e.preventDefault();
    const { email, password, passwordConfirmation } = this.state;
    const { auth: { handleRegister, }, history, } = this.props;

    if (password === passwordConfirmation)
      handleRegister({ email, password, passwordConfirmation, }, history);
    else
      alert('Passwords Do Not Match!')
  }
  
  handleChange = (e) => {
    const { name, value, } = e.target;
    this.setState({ [name]: value, });
  }
  
  render() {
    const { email, password, passwordConfirmation, } = this.state;
    
    return (
      <Segment basic>
        <Header as='h1' textAlign='center'>Register</Header>
        <Form onSubmit={this.handleSubmit}>
          <Form.Input
            label="Email"
            required
            autoFocus
            name='email'
            value={email}
            placeholder='Email'
            onChange={this.handleChange}
          />
          <Form.Input
            label="Password"
            required
            name='password'
            value={password}
            placeholder='Password'
            type='password'
            onChange={this.handleChange}
          />
          <Form.Input
            label="Password Confirmation"
            required
            name='passwordConfirmation'
            value={passwordConfirmation}
            placeholder='Password Confirmation'
            type='password'
            onChange={this.handleChange}
          />

          <Form.Input
            label="first_name"
            required
            name='first_name'
            value={first_name}
            placeholder='first_name'
            type='first_name'
            onChange={this.handleChange}
          />
          <Form.Input
            label="last_name"
            required
            name='last_name'
            value={last_name}
            placeholder='last_name'
            type='last_name'
            onChange={this.handleChange}
            />
            <Form.Input
              label="age"
              required
              name='age'
              value={age}
              placeholder='age'
              type='age'
              onChange={this.handleChange}
            />
            <Form.Input
              label="gender"
              required
              name='gender'
              value={gender}
              placeholder='gender'
              type='gender'
              onChange={this.handleChange}
            />
            <Form.Select 
              label="Location"
              name="location"
              value={location}
              onChange={this.handleChange}
              options={location}
             />
            <Segment textAlign='center' basic>
            <Button primary type='submit'>Submit</Button>
          </Segment>
        </Form>
      </Segment>
    )
  }
}

export default class ConnectedRegister extends React.Component {
  render() {
    return (
      <AuthConsumer>
        { auth => <Register { ...this.props } auth={auth} /> }
      </AuthConsumer>
    )
  }
}

const location = [
  { key: "1", value: "1", text: "Alpine" },
  { key: "2", value: "2", text: "American Fork" },
  { key: "3", value: "3", text: "Bountiful" },
  { key: "4", value: "4", text: "Brigham City" },
  { key: "5", value: "5", text: "Cottonwood Heights" },
  { key: "6", value: "6", text: "Draper" },
  { key: "7", value: "7", text: "Farmington" },
  { key: "8", value: "8", text: "Granite" },
  { key: "9", value: "9", text: "Highland" },
  { key: "10", value: "10", text: "Holladay" },
  { key: "11", value: "11", text: "Kaysville" },
  { key: "12", value: "12", text: "Lehi" },
  { key: "13", value: "13", text: "Logan" },
  { key: "14", value: "14", text: "Midway" },
  { key: "15", value: "15", text: "Moab" },
  { key: "16", value: "16", text: "Murray" },
  { key: "17", value: "17", text: "Nephi" },
  { key: "18", value: "18", text: "North Ogden" },
  { key: "19", value: "19", text: "North Salt Lake" },
  { key: "20", value: "20", text: "Orem" },
  { key: "21", value: "21", text: "Park City" },
  { key: "22", value: "22", text: "Pleasant Grove" },
  { key: "23", value: "23", text: "Provo" },
  { key: "24", value: "24", text: "Riverton" },
  { key: "25", value: "25", text: "St. George" },
  { key: "26", value: "26", text: "Salt Lake City" },
  { key: "27", value: "27", text: "Saratoga Springs" },
  { key: "28", value: "28", text: "South Ogden" },
  { key: "29", value: "29", text: "Spanish Fork" },
  { key: "30", value: "30", text: "Taylorsville" },
  { key: "31", value: "31", text: "Tooele" },
  { key: "32", value: "32", text: "Uintah" },
  { key: "33", value: "33", text: "Vernal" },
  { key: "34", value: "34", text: "Vineyard" },
  { key: "35", value: "35", text: "Washington" },
  { key: "36", value: "36", text: "West Jordan" },
  { key: "37", value: "37", text: "West Valley City" },
  { key: "38", value: "38", text: "Willard" },
  { key: "39", value: "39", text: "Woods Cross" },
 
];