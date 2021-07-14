import React, { Component } from "react";
import { robots } from './robots';
import SearchBox from './SearchBox';
import CardList from './CardList';

class App extends Component{
    constructor(){
        super()
        this.state={
            robots: robots,
            searchfield: ''
        }
    }
    onSearchChange=(event)=>{
        const filteredRobots =this.state.robots.filter(robots=>{
            return robots.username.includes(this.state.searchfield)
        })
        this.setState({ searchfield: event.target.value }, {robots: filteredRobots} )
        } 
    render() {
        
        return (
            <div className="tc">
             <h1>Kitty Friends</h1>
             <SearchBox  onsearchchange={this.onSearchChange}/>       
           <CardList robots={filteredRobots} />
         </div>
        )
    }
}
export default App;
  