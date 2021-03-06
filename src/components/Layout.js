import React, {Component} from 'react';
// IMPORT NavLink <<<<<<<<<<<<<<<
import {NavLink} from 'react-router-dom'

export default class BaseLayout extends Component {
  render(){
    let headerStyle = {
      "textAlign": "center",
      "height": "30vw",
      "color": "#fff",
      "backgroundImage": "url(../images/header2.jpg)",
      "backgroundPosition": "center",
      "backgroundSize": "cover",
      "backgroundRepeat": "none",
      "boxShadow":"rgba(0, 0, 0, 0.22) -2px 9px 5px 0px",
    }
    return (
      <div className="container-fluid nav">
        <nav className="row navbar navbar-inverse">
          <div className="container-fluid">
            <div className="navbar-header">
              <ul className="nav navbar-nav">
                <li>
                  {/* Add a NavLink set to the home page. Set the activeStyle to a color of yellow */}
                  <NavLink activeStyle={{
                    'color': 'yellow'
                  }} activeClassName='selected' className='nav-link' exact to='/'>Main</NavLink>
                </li>
                <li>
                  {/* Add a NavLink set to characters. Include activeClassName */}
                  <NavLink activeClassName='selected' className='nav-link' exact to='/characters'>Characters</NavLink>
                </li>
                <li>
                  {/* Add a NavLink set to starships. Include activeClassName */}
                  <NavLink activeClassName='selected' className='nav-link' exact to='/starships'>Starships</NavLink>
                </li>
                <li>
                  {/* Add a NavLink set to films. Include activeClassName */}
                  <NavLink activeClassName='selected' className='nav-link' exact to='/films'>Films</NavLink>
                </li>
              </ul>
            </div>
          </div>
          <div className="col-lg-12 header" style={headerStyle}>
          </div>
        </nav>
        {/*
          PASS IN CHILD COMPONENTS <<<<<<<<<<<<<<<<<<<
          */}
          {this.props.children}
        <footer className="col-lg-11">
          <span>
            SWAPI EXPLORER
          </span>
        </footer>
      </div>
    );
  }
}
