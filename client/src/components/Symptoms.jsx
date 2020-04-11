import React, {Component} from 'react'
import SymptomsForm from './SymptomsForm'
import Axios from 'axios'
import { Modal,Button, List, Container} from 'semantic-ui-react'


class Symptoms extends Component {
state = {
  symptoms_records: [],
  openNewForm: false,
  editForm: false
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
toggleEditForm = () =>{
  this.setState({
    editForm: !this.state.editForm
  })
}

editSymptom = (id) => {
  console.log('edit hit', id)
  this.toggleEditForm()
}
deleteSymptom = (id) => {
  const { symptoms_records } = this.state
  console.log('delete hit', id)
  Axios.delete(`/api/symptoms/${id}`)
  .then(res => {
    console.log(res)
    const filteredArr = symptoms_records.filter(symptom => symptom.id !== id)
    this.setState({
      symptoms_records: filteredArr
    })
  })
}

renderSymptoms = () =>{
  const { symptoms_records } = this.state
  console.log(this.state.symptoms_records)
  return symptoms_records.map( s => 
    <div key={s.id} style={{border: '1px solid grey', margin:'16px', borderRadius:'3px', boxShadow: '2px 2px 8px black', padding: '6px'}}>
    <List>
       <List.Content>
         <List.Header>My Symptoms as of: {s.created_at}</List.Header>
         <hr />
         <List.Description>Feeling Ill?: {s.ill ? "YES": "NO"}</List.Description>
         <List.Description>Pain Level: {s.pain}</List.Description>
         <List.Description>Temperature: {s.temperature}</List.Description>
         <List.Description>Breathing Function: {s.breathing_function}</List.Description>
         <List.Description>Contact with Carrier?: {s.contact ? "YES": "NO"}</List.Description>
         <List.Description>Difficulty Breathing?: {s.breathing ? "YES": "NO"}</List.Description>
       </List.Content>
       <hr />
       <Button primary size='mini' onClick={() => this.editSymptom(s.id)}>EDIT</Button>
          <Modal
              open={this.state.editForm}
              onCancel={this.state.toggleEditForm}
              
            >
            <SymptomsForm
              toggleForm={this.toggleEditForm}
              getSymptoms={this.getSymptomRecords}
              record_id={s.id}
            />
          </Modal>
       <Button secondary size='mini' onClick={() => this.deleteSymptom(s.id)}>DELETE</Button>
     </List>
     </div>
    )

}

  render(){
    return (
      <>
      <Container>
        {this.renderSymptoms()}
        <Button style={style.button} fluid onClick={this.toggleNewForm}>Click here to fill out a new symptom survey</Button>
        <Modal
          open={this.state.openNewForm}
          onCancel={this.state.toggleNewForm}
        >
          <SymptomsForm
            toggleForm={this.toggleNewForm}
            getSymptoms={this.getSymptomRecords}
          />
        </Modal>
        </Container>
      </>
    );
  }
}

export default Symptoms;

const style ={
  button: {
    backgroundColor: "lightblue"
  }
}