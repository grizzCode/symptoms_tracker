import React, {Component} from 'react'
import SymptomsForm from './SymptomsForm'
import Axios from 'axios'
import { Modal,Button } from 'semantic-ui-react'


class Symptoms extends Component{
state = {
  symptoms_records: [],
  openNewForm: false
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

toggleNewForm = () =>{
  this.setState({
    openNewForm: !this.state.openNewForm
  })
}
renderSymptoms = () =>{
  console.log(this.state)
  return this.state.symptoms_records.forEach(symptom => {
    return (
      <>
        <p>{symptom}</p>
      </>
    )
  })
}

  render(){
    return (
      <>
        {this.renderSymptoms()}
        <Button onClick={this.toggleNewForm}>New</Button>
        <Modal
          open={this.state.openNewForm}
          onCancel={this.state.toggleNewForm}
        >
          <SymptomsForm
            toggleForm={this.toggleNewForm}
            getSymptoms={this.getSymptomRecords}
          />
        </Modal>
      </>
    );
  }
}

export default Symptoms