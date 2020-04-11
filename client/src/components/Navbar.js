import React from 'react'
import { AuthConsumer, } from "../providers/AuthProvider";
import { Menu, Image, } from 'semantic-ui-react'
import { Link, withRouter, } from 'react-router-dom';
import Virus from './Covid.png';

class Navbar extends React.Component {
  
  rightNavItems = () => {
    const { auth: { user, handleLogout, }, location, } = this.props;
    
    if (user) {
      return (
        <Menu.Menu position='right'>
          <Menu.Item
            name='logout'
            onClick={ () => handleLogout(this.props.history) }
          />
        </Menu.Menu>
      )
    } else {
      return (
        <Menu.Menu position='right'>
          <Link to='/login'>
            <Menu.Item style={{fontSize: "20px"}}
              id='login'
              name='login'
              active={location.pathname === '/login'}
            />
          </Link>
          <Link to='/register'>
            <Menu.Item style={{fontSize: "20px"}}
              id='register'
              name='register'
              active={location.pathname === '/register'}
            />
          </Link>
        </Menu.Menu>
      )
    }
  }
  
  render() {
    return (
      <div>
        <Menu pointing secondary style={{borderColor: "lightblue", paddingTop: "10px"}}>
          <Link to="/">
            <Menu.Item style={{fontSize: "20px"}}
              name="home"
              id="home"
              // active={this.props.location.pathname === "/"}
              >
                <Image src={Virus} style={{height:"40px", width: "40px", opacity: "0.5"}} />
                </Menu.Item>
          </Link>
          <Link to="/symptoms">
            <Menu.Item style={{fontSize: "20px"}}
              name="symptoms"
              id="symptoms"
              active={this.props.location.pathname === "/symptoms"}
            />
          </Link>
          <Link to="/testingFacilities">
            <Menu.Item style={{fontSize: "20px"}}
              name="Testing Facilities"
              id="testingFacilities"
              active={this.props.location.pathname === "/testingFacilities"}
            />
          </Link>
          {this.rightNavItems()}
        </Menu>
      </div>
    );
  }
}

export class ConnectedNavbar extends React.Component {
  render() {
    return (
      <AuthConsumer> 
        { auth => 
          <Navbar { ...this.props } auth={auth} />
        }
      </AuthConsumer>
    )
  }
}

export default withRouter(ConnectedNavbar);