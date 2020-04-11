import React from 'react';
import { AuthConsumer, } from "../providers/AuthProvider";
import { Button, Form, Segment, Header, } from 'semantic-ui-react';

class Register extends React.Component {
  state = { email: '', password: '', passwordConfirmation: '', age: null, gender: '', location: '', first_name: '', last_name: '', image:'/img' };
  
  handleSubmit = (e) => {
    e.preventDefault();
    const { email, password, passwordConfirmation, first_name, last_name, age, gender, location, image } = this.state;
    const { auth: { handleRegister, }, history, } = this.props;

    if (password === passwordConfirmation)
      handleRegister({ email, password, passwordConfirmation, first_name, last_name, age, gender, location, image }, history);
    else
      alert('Passwords Do Not Match!')
  }
  
  handleChange = (e) => {
    const { name, value, } = e.target;
    this.setState({ [name]: value, });
  }

  handleDropdown = (e, {value}) => {
    this.setState({ location: value})
  }
  
  render() {
    const { email, password, passwordConfirmation, first_name, last_name, age, gender, location, image } = this.state;
    
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
            {/* <Form.Input
              label="image"
              name='image'
              value={image}
              placeholder='image'
              type='image'
              onChange={this.handleChange}
            /> */}
            <Form.Select 
              label="Location"
              name="location"
              value={location}
              onChange={this.handleDropdown}
              options={locationOptions}
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

const locationOptions = [
  { key: "1", value: "Alpine", text: "Alpine" },
  { key: "2", value: "American Fork", text: "American Fork" },
  { key: "3", value: "Bountiful", text: "Bountiful" },
  { key: "4", value: "Brigham City", text: "Brigham City" },
  { key: "5", value: "Cottonwood Heights", text: "Cottonwood Heights" },
  { key: "6", value: "Draper", text: "Draper" },
  { key: "7", value: "Farmington", text: "Farmington" },
  { key: "8", value: "Granite", text: "Granite" },
  { key: "9", value: "Highland", text: "Highland" },
  { key: "10", value: "Holladay" , text: "Holladay" },
  { key: "11", value: "Kaysville", text: "Kaysville" },
  { key: "12", value: "Lehi", text: "Lehi" },
  { key: "13", value: "Logan" , text: "Logan" },
  { key: "14", value: "Midway" , text: "Midway" },
  { key: "15", value: "Moab", text: "Moab" },
  { key: "16", value: "Murray" , text: "Murray" },
  { key: "17", value: "Nephi" , text: "Nephi" },
  { key: "18", value: "North Ogden" , text: "North Ogden" },
  { key: "19", value: "North Salt Lake" , text: "North Salt Lake" },
  { key: "20", value: "Orem", text: "Orem" },
  { key: "21", value: "Park City", text: "Park City" },
  { key: "22", value: "Pleasant Grove", text: "Pleasant Grove" },
  { key: "23", value: "Provo", text: "Provo" },
  { key: "24", value: "Riverton", text: "Riverton" },
  { key: "25", value: "St. George", text: "St. George" },
  { key: "26", value: "Salt Lake City", text: "Salt Lake City" },
  { key: "27", value: "Saratoga Springs", text: "Saratoga Springs" },
  { key: "28", value: "South Ogden", text: "South Ogden" },
  { key: "29", value: "Spanish Fork", text: "Spanish Fork" },
  { key: "30", value: "Taylorsville", text: "Taylorsville" },
  { key: "31", value: "Tooele", text: "Tooele" },
  { key: "32", value: "Uintah", text: "Uintah" },
  { key: "33", value: "Vernal", text: "Vernal" },
  { key: "34", value: "Vineyard", text: "Vineyard" },
  { key: "35", value: "Washington", text: "Washington" },
  { key: "36", value: "West Jordan", text: "West Jordan" },
  { key: "37", value: "West Valley City", text: "West Valley City" },
  { key: "38", value: "Willard", text: "Willard" },
  { key: "39", value: "Woods Cross", text: "Woods Cross" },
 
];