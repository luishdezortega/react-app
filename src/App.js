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
      totalPage : 0,
      search : undefined
    }
  }

  handleChange( value ) {
    this.setState({search : value})
    this.initData( value );
  }

  async initData( search ) {
    let response = await getCoursesAll(
      this.state.pageIndex,
      search ? search : undefined
    );
    const totalItems = response.data.totalItems/18;
    this.setState({
       totalPage : response.data.totalItems%18 > 0 ? parseInt(totalItems)+1 : totalItems,
       dataPage : response.data.items
    });
  }

  next(){
    this.setState({pageIndex : this.state.pageIndex+1 });
    this.initData(this.state.search);
  }

  previus(){
    this.setState({pageIndex : this.state.pageIndex-1 });
    this.initData(this.state.search);
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
          next={this.next.bind(this)}
          previus={this.previus.bind(this)}
        />
      </div>
    );
  }
  
}

export default App;
