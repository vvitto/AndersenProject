import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import uuidv4 from 'uuid/v4';

import { RECENT_SEARCHES } from '../../constants/location.constants';

import styles from './Locations.less';

import { Header } from '../header/Header.jsx';
import { Main } from '../main/Main.jsx';

export default class App extends Component {

  state = {};

  static getDerivedStateFromProps(nextProps, prevState) {
    if (
      nextProps.searchInputValue &&
      nextProps.searchInputValue !== prevState.searchInputValue) {
      localStorage.setItem(
        RECENT_SEARCHES,
        JSON.stringify(
          [...JSON.parse(localStorage.getItem(RECENT_SEARCHES)),
            {
              searchBy: nextProps.searchInputValue,
              length: nextProps.locationsArray.length
            }
          ])
      );
      return { searchInputValue: nextProps.searchInputValue };
    }
    return null;
  }

  componentWillUnmount() {
    this.props.setInitState();
  }

  getItem = (value1, value2 = '') =>
    <Link to={`/realty/${value1}`}
      className={styles.locationItem}
      key={uuidv4()}
    >
      {value1 + value2}
    </Link>


  render() {
    const {
      getStatus,
      onGoButton,
      locationsArray,
      onMyLocationButton,
      recentSearches
    } = this.props;

    const locationList =
    locationsArray.map(
      location => this.getItem(location.title)
    );

    const recentSearchesList =
    recentSearches.map(
      search => this.getItem(`${search.searchBy}`, `(${search.length})`)
    );

    return (
      <div className={styles.pageContainer}>
        <Header />
        <Main
          data={ getStatus }
          onGoButton={ onGoButton }
          locationList={ locationList }
          onMyLocationButton={ onMyLocationButton }
          recentSearches={ recentSearchesList }
        />
      </div>
    );
  }
}
