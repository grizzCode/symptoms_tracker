import React, {Component} from 'react'
import TestingFacilitiesForm from './TestingFacilitiesForm'


class TestingFacilities extends Component{
  state = {}
  
    render(){
      return(
        <>
          <p>Testing Facilities page</p>
          <TestingFacilitiesForm />
        </>
      )
    }
  }
  
  export default TestingFacilities;