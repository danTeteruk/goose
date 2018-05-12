import React, { Component } from 'react';
import { connect } from 'react-redux'
import { Route, Link } from 'react-router-dom';
import Home from '../../components/home';
import { toggleProduct, checkSuggested, showAll } from '../../reducers/data';

class App extends Component {

  constructor(props) {
    super(props);
    this.toggleProduct = this.toggleProduct.bind(this);
    this.showAll = this.showAll.bind(this);
  }

  componentDidMount() {
    document.documentElement.style.setProperty('--theme-primary-color', this.props.select.color);
    this.props.dispatch(checkSuggested());

  }

  toggleProduct(index) {
    const { dispatch } = this.props;
    dispatch(toggleProduct(index));
    dispatch(checkSuggested());
  }

  showAll() {
    const { dispatch } = this.props;
    dispatch(showAll());
  }

  render() {
    return(
      <div className={this.props.select.theme}>
        <Home select={this.props.select} toggleProduct={this.toggleProduct} showAll={this.showAll}/>
      </div>
    )
  }
};

const mapStateToProps = state => ({
  select: state.select,
});

export default connect(mapStateToProps)(App);
