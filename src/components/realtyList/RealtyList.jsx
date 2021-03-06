import React, { Component } from 'react';
import uuidv4 from 'uuid/v4';

import { RealtyItem } from '../realtyItem/RealtyItem.jsx';

import styles from './RealtyList.less';

export default class RealtyList extends Component {
  componentDidMount() {
    this.props.getRealtyList(this.props.match.params.item);
  }

  render() {

    return (
      <div className={styles.itemsContainer}>
        <p className={styles.matchStatus}>
          {this.props.searchResults.length} of {this.props.totalResults} matches
        </p>
        {this.props.searchResults.map(result =>
          <RealtyItem key={uuidv4()} {...result} getData={this.props.getData} />
        )}
      </div>
    );

  }
}
