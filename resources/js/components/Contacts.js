import React, { Component } from "react";
import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";

class Contacts extends React.Component{
    
    constructor(props){
        super(props);
        this.state = { value: '' , contacts : '' , message:''}
    }
    componentDidMount(){
        axios.get('http://127.0.0.1:8000/api/contacts')
        .then(response => {
            this.setState({ contacts: response.data });
        })
        .catch(function (error) {
            console.log(error);
        }) 
    }
    
    tabRow(){
        
        if(this.state.contacts instanceof Array){
            return this.state.contacts.map(function(object, i){
                return(<tr key={object.id}>
                    <td>{object.fullname}</td>
                    <td>{object.email}</td>
                    <td>{object.phone}</td>
                    <td>
                    <Link to={"/edit/"+object.id} className="btn btn-info">Edit</Link>
                    
                    <button className="btn btn-danger">Delete</button>
                    
                    </td>
                    </tr>)
                })
            }
        }
        
        render(){
            return (
                <div className="col-md-6 offset-3">
                <div className="text-danger" id="errors"><h3>{ this.state.message }</h3></div>
                <table className="table table-stripped">
                <thead>
                <tr>
                <td>Name</td>
                <td>Email</td>
                <td>Phone</td>
                <td>Action</td>
                </tr>
                </thead>
                <tbody>
                { this.tabRow() }
                </tbody>
                </table>
                </div>
                )
            }
        }
        
        export default Contacts;