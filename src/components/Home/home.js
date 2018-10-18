import React, { Component } from 'react';
import axios from 'axios';

import './home.css';

class home extends Component {
  state = {
    bands: [],
    name: '',
    genre: ''
  };
  componentDidMount() {
    this.getBands();
  }

  getBands() {
    axios.get('/api/bands').then(res => {
      console.log(res.data);
      this.setState({ bands: res.data });
    });
  }

  handleAdd = () => {
      const {name, genre} = this.state
      axios.post('/api/bands', {name, genre}).then(res=> {
          console.log(res.data);
          this.getBands()
      })
  }

  handleDelete = id => {
    axios.delete(`/api/delete-band/${id}`).then(()=> {
        this.getBands()
    })
  }

  render() {
    const map = this.state.bands.map(e => {
        console.log(e)
      return (
        <div key={e.bands_id}>
          <h1>{e.name}</h1>
          <p>{e.genre}</p>
          <button onClick={() => this.handleDelete(e.bands_id)}>Delete</button>
        </div>
      );
    });
    return (
      <div className="home">
        <div className="home_main">
          <h1>Home</h1>
          {map}
        </div>
        <div>
          <input type="text" onChange={e => this.setState({name: e.target.value})}/>
          <input type="text" onChange={e => this.setState({genre: e.target.value})}/>    
          <button onClick={()=> {this.handleAdd()}}>Add!</button>      
        </div>
      </div>
    );
  }
}

export default home;
