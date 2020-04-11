import React, {Component} from 'react'
import SymptomsForm from './SymptomsForm'
import Axios from 'axios'
import { Modal,Button, List} from 'semantic-ui-react'


class Symptoms extends Component {
state = {
  symptoms_records: [],
  openNewForm: false
  
}

componentDidMount(){
  this.getSymptomRecords()
}

getSymptomRecords = async() => {
    const res = await Axios.get(`/api/symptoms`);
    console.log(`symptoms: ${res}`)
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
  const { symptoms_records } = this.state
  console.log(this.state.symptoms_records)
  return symptoms_records.map( s => 
    <div key={s.id} style={{border: '1px solid grey', margin:'16px', borderRadius:'3px', boxShadow: '2px 2px 8px black'}}>
    <List>
       <List.Content>
         <List.Header>Data Entry: {s.created_at}</List.Header>
         <List.Description>Feeling Ill?: {s.ill ? "YES": "NO"}</List.Description>
         <List.Description>Pain Level: {s.pain}</List.Description>
         <List.Description>Pain Level: {s.pain}</List.Description>
         <List.Description>Breathing Function: {s.breathing_function}</List.Description>
         <List.Description>Contact with Carrier?: {s.contact ? "YES": "NO"}</List.Description>
         <List.Description>Difficulty Breathing?: {s.breathing ? "YES": "NO"}</List.Description>
       </List.Content>
     </List>
     </div>
    )

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