import { Button } from "bootstrap";
import React, { Component }from "react";

class  AddContact extends React.Component{
    render(){
        return (
            <div className="container">
            <div className="col-md-6 offset-3">
            <div className="card-header"> Add Contact</div>
            <div className="card-body">
            <div className="form-group">
            <label>FullName</label>
            <input className="form-control" name="fullname"/>
            </div>
            <div className="form-group">
            <label>Email</label>
            <input className="form-control" name="email"/>
            </div>
            <div className="form-group">
            <label>Phone</label>
            <input className="form-control" name="phone"/>
            </div>
            <div style={{ padding:'10px' }}>
            <input type="button" className="btn btn-success" name="submit" value="Submit"/>
            </div>
            </div>
            </div>
            </div>
            )
        }
    }
    export default AddContact;