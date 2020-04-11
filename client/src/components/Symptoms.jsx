import React, {Component} from 'react'
import SymptomsForm from './SymptomsForm'


class Symptoms extends Component{
state = {}

  render(){
    return(
      <>
        <p>symptoms page</p>
        <SymptomsForm />
      </>
    )
  }
}

export default Symptoms