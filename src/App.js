import React, { Component } from 'react';
import './App.scss';
import Header from "./components/organisms/header/header";
import Body  from "./components/organisms/body/body";
import { getCourses, getCoursesAll } from "../src/services/http";

class App extends Component {

  constructor(props){
    super(props);
    this.state = {
      data : [],
      dataPage : [],
      pageIndex : 1,
      totalPage : 0
    }
  }

  handleChange( value ) {
    this.initData( value );
  }

  async initData( search ) {
    let response = await getCoursesAll(
      this.state.pageIndex,
      search ? search : undefined
    );
    this.setState({
       totalPage : response.data.totalItems,
       dataPage : response.data.items
    });
  }

  async componentDidMount(){
    let response = await getCourses();
    this.setState({data : response.data})
    this.initData();
  }

  render() {
    return (
      <div>
        <Header handleChange={this.handleChange.bind(this)} />
        <Body
          page={this.state.pageIndex}
          items={this.state.dataPage}
          totalPage={this.state.totalPage}
          data={this.state.data} 
        />
      </div>
    );
  }
  
}

export default App;
