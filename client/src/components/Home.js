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
  <h2>What are the risks?</h2>
  <hr/>
  <h3>Persons with compromised immune systems, i.e., sick people, the elderly, those with pre-existing respiratory conditions, like COPD or asthma, are at greatest risk of COVID-19 complications. The infection may spread to the lungs, causing pneumonia and respiratory failure. It is important to reduce their contact with anyone presenting or potentially presenting contact with the virus. If you have travelled or may have otherwise come into contact with the virus, it is advised to refrain from physically visiting with persons of this vulnerable population. If you are a person with a compromised immune system or are an elderly person, please avoid public spaces or travel.</h3>
  
  <h2>How can I prevent infection?</h2>
  <hr/>
  <h3>Dos:</h3>
  <li>Wash your hands frequently with hot water and soap or alcohol-based sanitizer (60% alcohol). If your hands are visibly dirty, use soap and water.</li>
  <li>If you have to cough or sneeze, cover your mouth and nose with your elbow, not your hand.</li>
  <li>Maintain at least 1 meter (3 feet) distance between yourself and anyone who is coughing or sneezing.</li>
  <h3>Don’ts:</h3>
  <li>Don’t touch your face, especially your mouth, eyes, and nose.</li>
  <li>Don’t go to work or school if you have symptoms of a cold or flu.</li>
  <li>Avoid crowded public places and travel.</li>
  <li>Avoid contact with people who feel unwell.</li>
  <li>Don’t stockpile and use surgical masks if you do not have symptoms.</li>
  <li>Do not go to your GP if you suspect being infected with the coronavirus. You may transmit the infection to others. Call your healthcare provider or local health authorities instead.</li>
  <li>Do not use a taxi or public transport if you are advised to go to the hospital.</li>
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

