import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import {CardList} from './components/card-list/card-list.component'
import { SearchBox } from './components/search-box/search-box.component'

class App extends Component {
  constructor() {
    super();

    this.state = {
      monsters: [],
      searchField: ''
    }
  }

  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => response.json())
    .then(response => this.setState({monsters: response}))


  }


  render() {
    const { monsters, searchField } = this.state;
    const filteredMonsters = monsters.filter(monster => {
      return monster.name.toLowerCase().includes(searchField.toLowerCase())
    });

    return (
      <div className="App">
        <h1>Monsters Rolodex</h1>
<SearchBox handleChange={e => this.setState({searchField: e.target.value})} placeholder="Search a monster"></SearchBox>
<CardList monsters={filteredMonsters}>

</CardList>

      </div>
    );
  }
}

export default App;
