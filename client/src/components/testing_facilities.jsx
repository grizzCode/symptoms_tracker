import React from 'react'
import { Component } from 'react'
import FacilitiesForm from './testing_facilitiesForm'


export default class TestingFacilities extends Component {
state = {
  facilies: []
}

render(){
  return(
    <>
      <p>on Testing Facilities page</p>
      <FacilitiesForm />
    </>
  )
}

}