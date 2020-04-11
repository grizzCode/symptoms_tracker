import React, {Component} from 'react'
import SymptomsForm from './SymptomsForm'
import Axios from 'axios'
import { Modal,Button } from 'semantic-ui-react'


class Symptoms extends Component{
state = {
  symptoms_records: [],
  newSymptom: false
}

componentDidMount(){
  this.getSymptomRecords()
}

getSymptomRecords = async() =>{
    const res = await Axios.get("/api/symptoms");
    this.setState({
      symptoms_records: res.data
    })
}

newTrigger = () =>{
  this.setState({
    newSymptom: !this.state.newSymptom
  })
}
renderSymptoms = () =>{
  return this.state.symptoms_records.forEach(symptom => {
    return (
      <>
        <p>blah blah</p>
      </>
    )
  })
}

  render(){
    return (
      <>
        {this.renderSymptoms()}
        <Modal trigger={<Button onClick={this.newTrigger}>New</Button>}>
          <SymptomsForm trigger={this.newTrigger} getSymptoms={this.getSymptomRecords}/>
        </Modal>
      </>
    );
  }
}

export default Symptoms