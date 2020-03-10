import React from 'react';
import './App.css';
import axios from 'axios';
import User from './components/User';
import "./styles.css";

class App extends React.Component {

constructor () {
  super();
  this.state ={
    users: [],
    followers: '',
    following: ''
  }
  console.log('constructor is running')
}

componentDidMount() {
  console.log('CDM is running')
  axios
    .get('https://api.github.com/users/bergeronmatt/followers')
    .then(response => {
      console.log("My follower data: ", response)
      console.log("My follower count: ", response.data.length)
      this.setState({
        users: response.data 
      })
    })
    .catch(error => console.log('Follower data not found: ', error))
  
}

componentDidUpdate(prevState) {
  if(prevState.users !== this.state.users){
  console.log("CDU is running")
  }
}



  render(){
    return (
      <div className="App">
        <header className='header'>Github Followers</header>
        <User user={this.state.users}/>
      </div>
    );
  }
}

export default App;
