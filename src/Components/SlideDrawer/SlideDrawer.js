import React from "react";
import {Link} from 'react-router-dom';
import "./SlideDrawer.css";
export default class SlideDrawer extends React.Component {
  render() {
    let drawerClasses = "side-drawer";
    if (this.props.show) {
      drawerClasses = "side-drawer open";
    }
    return (
      <div className={drawerClasses}>
        <nav>
          <div className="click-me">
            <a href="/" onClick={this.props.toggle}>
              <i className="chevron fa fa-chevron-right" aria-hidden="true"></i>
              <i className="awesome user fa fa-user-circle" aria-hidden="true"></i>
              admission male
            </a>
          </div>
          
            <div className="li">
              <Link to="#">
              <i className="awesome fa fa-users" aria-hidden="true"></i>
              Applicants
              </Link>
            </div>
            <div className="li">
                            <Link to="#">
              <i className="awesome fa fa-calendar" aria-hidden="true"></i>
              Dates
              </Link>
            </div>
            <div className="li">
              <Link to="#">
              <i className="awesome fa fa-sign-out" aria-hidden="true"></i>
              Sign Out
              </Link>
            </div>
        </nav>
      </div>
    );
  }
}
