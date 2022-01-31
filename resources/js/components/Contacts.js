import React, { Component } from "react";
import TableRow from './tableRow';

class Contacts extends React.Component{
    
    constructor(props){
        super(props);
        this.state = { value: '' , contacts : ''}
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
                    </tr>)
                })
            }
        }
        
        render(){
            return (
                <div className="col-md-6 offset-3">
                <table className="table table-stripped">
                <thead>
                <tr>
                <td>Name</td>
                <td>Email</td>
                <td>Phone</td>
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