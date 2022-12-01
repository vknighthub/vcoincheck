import MetisMenu from 'metismenujs';
import React, { Component } from 'react';
import PerfectScrollbar from "react-perfect-scrollbar";

class MM extends Component {
  componentDidMount() {
    this.$el = this.el;
    this.mm = new MetisMenu(this.$el);
  }
  componentWillUnmount() {
  }
  render() {
    return (
      <div className="mm-wrapper">
        <ul className="metismenu" ref={(el) => (this.el = el)}>
          {this.props.children}
        </ul>
      </div>
    );
  }
}

const SideBar = () => {
  return (
    <div className="deznav">
      <PerfectScrollbar className="deznav-scroll">
        <MM className="metismenu" id="menu">

        </MM>
      </PerfectScrollbar>
    </div>
  );
}

export default SideBar;
