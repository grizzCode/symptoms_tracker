import React from 'react'
import { Component } from 'react'
import FacilitiesForm from './testing_facilitiesForm'
import {Button, Modal} from 'semantic-ui-react'


export default class TestingFacilities extends Component {
state = {
  facilies: [],
  newForm: false,
}

toggleForm =()=>{
this.setState({
  newForm: !this.state.newForm
})
}

render(){
  return (
    <>
      <Button onClick={this.toggleForm}>New </Button>
      <Modal open={this.state.newForm} close={this.toggleForm}>
        <FacilitiesForm toggleForm={this.toggleForm}/>
      </Modal>
    </>
  );
}

}