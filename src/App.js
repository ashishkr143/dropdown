import React from 'react';
import Button from './component/Button'
import SearchBox from './component/SearchBox'
import './App.css';

class App extends React.Component{
  state = {
    showMenu : false
  }
  toggleMenu = ()=>{
      this.setState({showMenu : !this.state.showMenu})
  }
  render(){
    return(
      <div className="App">
      <Button opt={1} toggleMenu={this.toggleMenu}></Button>
      {this.state.showMenu ?  <SearchBox></SearchBox> : ''}
     
  </div>
    )
  }
}


export default App;
