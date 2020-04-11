import React from 'react';
import { Header, Image, Segment, Grid, Container } from 'semantic-ui-react';
import Symptoms from './Fever.png';

const Home = () => (
  <>
  <Container>
  <br/>
  <Segment style={style.segment}>
  <Header as="h1" textAlign="left">Watch for symptoms</Header>
  <hr/>
  <h3>Reported illnesses have ranged from mild symptoms 
    to severe illness and death for confirmed Coronavirus disease 
    2019 (COVID-19) cases. </h3>
  <h3>These symptoms may appear 2-14 days after exposure (based on 
  the incubation period of MERS-CoV viruses).</h3>
  <li>Fever</li>
  <li>Cough</li>
  <li>Shortness of breath</li>
  </Segment >
  <Image src ={Symptoms} fluid/>
  <Segment style={style.segment}>
    <h2>When to Seek Medical Attention</h2>
    <hr/>
    <h4>If you develop emergency warning signs for COVID-19 get medical 
      attention immediately. Emergency warning signs include*:</h4>
      <li>Trouble breathing</li>
      <li>Persistent pain or pressure in the chest</li>
      <li>New confusion or inability to arouse</li>
      <li>Bluish lips of face</li>
    <h4>*This list is not all inclusive. Please consult your medical provider 
      for any other symptoms that are severe or concerning.</h4>
  </Segment> 
  <br/>

  <Grid>
    <Grid.Row>
      <Grid.Column width={8} center>
        <h3 align="center">Higher Risk Individuals</h3>
        <iframe style={style.iframe} width="480" height="340" src="https://www.youtube.com/embed/TjcoN9Aek24" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
      </Grid.Column>
      <Grid.Column width={8} center>
      <h3 align="center">Stop the Spread</h3>
      <iframe style={style.iframe} width="480" height="340" src="https://www.youtube.com/embed/9Ay4u7OYOhA" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
      </Grid.Column>
    </Grid.Row>
  </Grid>

  <br/> 
  </Container >
  </>
)

export default Home;

const style = {
  segment: {
    backgroundColor: 'lightblue',
    opacity: 0.6,
  },
  iframe: {
    marginRight: '40px', 
    marginLeft: '40px', 
  }
}

