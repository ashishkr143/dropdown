import React from 'react';
import { Fragment } from 'react';
import './App.css';

import Header from './component/Header'
import Left from './component/Left'
import Middle from './component/Middle' 
import Right from './component/Right'

class App extends React.Component{
  state = {
    products : []
  }
  toggleMenu = ()=>{
      this.setState({showMenu : !this.state.showMenu})
  }
  componentDidMount=()=>{
    fetch('https://jsonplaceholder.typicode.com/users/5')
    .then(res=>{
      res.json()
      .then(data=>{
        this.setState({
          userName : data.name,
          nickName : data.username,
          company : data.company.name,
          avatar : "https://randomuser.me/api/portraits/men/1.jpg",
          aboutUser : "Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque maxime blanditiis culpa obcaecati facere quod delectus facilis corporis, quos sequi minima repellendus at eveniet optio totam harum error."
        })
      })
      .catch(err=>console.log(err))
    })
    .catch(err=>console.log(err))

    fetch('https://openapi.worldsofashishpatel.com/api/blogs?api_key=670ab8c41d32f04fd4b6f0d6cae4b140')
    .then((result) => {
      result.json()
      .then(data=>{
        console.log(data)
        this.setState({
          products : [data[0],data[1],data[2]]
        })
      })
      .catch(err=>console.log(err))
    }).catch((err) => {
      console.log(err)
    });

    
  }
  render(){
    return(
      <Fragment>
        <Header></Header>
         <div className="body">
            <Left name={this.state.userName} avatar={this.state.avatar} nickName={this.state.nickName} about={this.state.aboutUser} company={this.state.company}></Left>
            <Middle products={this.state.products}></Middle>
            <Right></Right>
        </div>
      </Fragment>
    )
  }
}


export default App;
