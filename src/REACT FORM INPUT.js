import React, { Component } from 'react';
// import {Link, Route} from 'react-router-dom';

import Header from './components/Header';
import Footer from './components/Footer';
import Article from './components/Article';


class App extends Component {
  constructor(){
    super();
    this.state = {userLists:[]};
  }

  add=(e)=>{
    e.preventDefault();
    if(this.refs.nama.value && this.refs.address.value && this.refs.email.value){
      let user = {nama:this.refs.nama.value, address:this.refs.address.value, email:this.refs.email.value};
      this.setState({userLists:[...this.state.userLists, user]});
    }
  }
  reset = (e) => {
    e.preventDefault();
    this.refs.nama.value="";
    this.refs.address.value="";
    this.refs.email.value="";
  }

  remove = (key) =>{
  let temp = [...this.state.userLists];
  temp.splice(key, 1);
  this.setState({userLists: [...temp]});

  }
  render() {

    console.log(this.state.userLists);
    const showList = this.state.userLists.map((users, index)=>
    <tr key={index}>
    <td>{index + 1}</td>
    <td>{users.nama}</td>
    <td>{users.address}</td>
    <td>{users.email}</td>
    <td>
      <button className="btn btn-success" onClick={this.edit}>edit</button> &nbsp;
      <button className="btn btn-danger" onClick={()=>{this.remove(index);}}>remove</button>&nbsp;
    </td>
    </tr>
  )
    
    return (
<div className="col-xs-12 col-md-8 col-md-offset-2">                     
<div className="panel panel-default">
<div className="panel-heading">
<h1 className="panel-title">User Registration Form</h1>                            
</div>
                        <div className="panel-body" id="panelBody">
                        <form className="form-horizontal">
                        <div className="form-group">
                        <label className="control-label col-sm-2" htmlfor="nama">Nama</label>
                        <div className="col-sm-10">
                        <input type="text" ref="nama" className="form-control" id="nama"/></div></div>
                        
                        <div className="form-group">
                        <label className="control-label col-sm-2" htmlfor="address">Address</label>
                        <div className="col-sm-10">
                        <input type="text" ref="address" className="form-control" id="address"/></div></div>
                        
                        <div className="form-group">
                        <label className="control-label col-sm-2" htmlfor="email">Email</label>
                        <div className="col-sm-10">
                        <input type="text" ref="email" className="form-control" id="email"/></div></div>                    


                              <div className="form-group">
                              <div className="right">
                              <button className="btn btn-primary" onClick={this.add}>Add</button>
                              <button className="btn btn-warning" onClick={this.reset}>Reset Form</button></div></div>
                              </form>
                              </div></div>



<div className="panel panel-default">
<div className="panel-heading">
  <h2 clasName="panel-title">List of Users</h2>
  </div>
  <div className="panel-body">
  <table className="table">
                  <thead>
                    <tr>
                      <th>ID</th>
                      <th>Name</th>
                      <th>Address</th>
                      <th>Email</th>
                      <th></th>
                    </tr>
</thead>
<tbody>
  {showList}
</tbody>
                </table>
                </div>
                </div>
                
                </div>
              
    );
  }
}

export default App;
