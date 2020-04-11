import React, {Component} from 'react'
import {Form} from 'semantic-ui-react'
import SymptomsForm from './SymptomsForm'


class Symptoms extends Component{
state = {}

  render(){
    return(
      <>
        <SymptomsForm />
      </>
    )
  }
}

export default Symptoms