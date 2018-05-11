import React, { Component } from 'react';
import { connect } from 'react-redux'
import { Route, Link } from 'react-router-dom';
import Home from '../../components/home';


class App extends Component {

  componentDidMount() {
    document.documentElement.style.setProperty('--theme-primary-color', this.props.select.color);
  }

  render() {
    return(
      <div className="default">
        <Home select={this.props.select}/>
      </div>
    )
  }
};

const mapStateToProps = state => ({
  select: state.select.data,
});

export default connect(mapStateToProps)(App);
