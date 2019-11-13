import React, { Component } from "react";
import ReactDOM from "react-dom";
import JSON from "./db.json";

// importing Components
import Headers from "./Components/header";
import NewsList from "./Components/new_list";

class App extends Component {
  state = {
    news: JSON,
    filtered: []
  };

  getKeyword = (event)=> {
    //console.log(event.target.value);
    let keyword = event.target.value;
    let filtered = this.state.news.filter( (item)=>{
        return item.title.indexOf(keyword) > -1
    });
    this.setState({
      filtered
    })
  }

  render() {
    return (
      <div>
        <Headers keyword={this.getKeyword}/>
        <NewsList news={this.state.filtered.length === 0 ? this.state.news : this.state.filtered }>
        </NewsList>  
      </div>
    );
  }
}

ReactDOM.render(<App />, document.querySelector("#root"));
