import React, {Component} from 'react'
import './people-page.module.css';
import ItemList from '../item-list/item-list';
import PersonDetails from '../person-details/person-details';
import SwapiService from '../../sevices/swapi-service';
import Row from '../../row/row';
import ErrorBoundry from '../error-boundry/error-boundry'

export default class PeoplePage extends Component {
state = {
selectedPerson: 3
}
  swapiService = new SwapiService();

  onPersonSelected = (selectedPerson) => {
    this.setState({ selectedPerson });
  };

  render() {

    // children in i item-list
    const itemList = (
      <ItemList
        onItemSelected={this.onPersonSelected}
        getData={this.swapiService.getAllPeople}>
        {(i) => (
          `${i.name} (${i.birthYear})`
        )} 
      </ItemList>
    );

    const personDetails = (
      <ErrorBoundry> 
        <PersonDetails personId={this.state.selectedPerson} />
      </ErrorBoundry>
    );
    return (
      <Row left={itemList} right={personDetails} />
    )
  }
}
