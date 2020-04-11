import React from 'react';
import { Header, Image, Segment, Grid } from 'semantic-ui-react';
import Symptoms from '../images/Fever.png'

const Home = () => (
  <>
  <Header as="h1" textAlign="left">Watch for symptoms</Header>
  <h3>Reported Reported illnesses have ranged from mild symptoms 
    to severe illness and death for confirmed coronavirus disease 
    2019 (COVID-19) cases. </h3>
<br/> 
<h3>These symptoms may appear 2-14 days after exposure (based on 
  the incubation period of MERS-CoV viruses).</h3>
  <li>Fever</li>
  <li>Cough</li>
  <li>Shortness of breath</li>
  <Image src ={Symptoms} fluid/>
  <Segment style={style.segment}>
    <h2>When to Seeek Medical Attention</h2>
    <h4>If you develop emergency warning signs for COVID-19 get medical 
      attention immediately. Emergency warning signs include*:</h4>
      <li>Trouble breathing</li>
      <li>Persistent pain or pressure in the chest</li>
      <li>New confusion or inability to arouse</li>
      <li>Bluish lips of face</li>
    <h4>*This list is not all inclusive. Please consult your medical provider 
      for any other symptoms that are severe or concerning.</h4>
  </Segment> 
  <Grid>
    <Grid.Row column={2}>
      <Grid.Column>
        <h2>Higher Risk Individuals</h2>
        <iframe width="560" height="315" src="<https://www.youtube.com/watch?v=TjcoN9Aek24&feature=emb_rel_end>" allowfullscreen></iframe>
      </Grid.Column>
      <Grid.Column>
      <h2>Stop the Spread</h2>
      <iframe width="560" height="315" src="<https://www.youtube.com/watch?v=9Ay4u7OYOhA>" allowfullscreen></iframe>
      </Grid.Column>
    </Grid.Row>
  </Grid>
  <br/> 
  
  </>
)

export default Home;

const style = {
  segment: {
    backgroundColor: 'teal',
    opacity: 0.7,
  }
}