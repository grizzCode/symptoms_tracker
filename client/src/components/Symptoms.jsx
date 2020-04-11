import React, {Component} from 'react'
import SymptomsForm from './SymptomsForm'
import Axios from 'axios'
import { Modal,Button } from 'semantic-ui-react'


class Symptoms extends Component{
state = {
  symptoms_records: [],
  newSymptom: false
}

componentDidMount = async() => {
  const res = await Axios.get('/api/symptoms')
  console.log(res)
}

newTrigger = () =>{
  this.setState({
    newSymptom: !this.state.newSymptom
  })
}

  render(){
    return (
      <>
        <p>symptoms page</p>
        <Modal trigger={<Button onClick={this.newTrigger}>New</Button>}>
          <SymptomsForm trigger={this.newTrigger}/>
        </Modal>
      </>
    );
  }
}

export default Symptoms