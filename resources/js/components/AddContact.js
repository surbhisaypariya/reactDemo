import React, { Component }from "react";
import axios from "axios";

class  AddContact extends React.Component{
    constructor(props){
        super(props);
        this.state = { fullname:'' , email:'' , phone:'' ,full_err:'' , email_err:'' , phone_err:'' , message:'' , br : <br/> }
        this.handleChange1 = this.handleChange1.bind(this);
        this.handleChange2 = this.handleChange2.bind(this);
        this.handleChange3 = this.handleChange3.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    
    handleChange1(e)
    {
        this.setState( { fullname : e.target.value });
    }
    
    handleChange2(e)
    {
        this.setState( { email : e.target.value });
    }
    
    handleChange3(e)
    {
        this.setState( { phone : e.target.value });
    }
    
    handleSubmit(event){
        event.preventDefault();
        if(this.validate())
        {
            const contacts = {
                fullname : this.state.fullname,
                email : this.state.email,
                phone : this.state.phone
            };
            
            axios.post('http://127.0.0.1:8000/api/contacts',contacts).then((response) => {
            this.setState({ message : response.data });
            this.setState({ fullname : "" });
            this.setState({ email : "" });
            this.setState({ phone : "" });
            window.history.pushState({},undefined,'/');
            window.location.reload();
        });
    }
    else
    {
        this.setState( {message : [this.state.full_err,this.state.br,this.state.phone_err,this.state.br,this.state.email_err  ] });
    }
}

validate(){
    let isValid = true;
    
    if(!this.state.fullname)
    {
        isValid = false;
        this.state.full_err = "Please Enter name ";
    }
    
    if(!this.state.email)
    {
        isValid = false;        
        this.state.email_err = "Please Enter email";
    }
    
    if(this.state.email)
    {
        var pattern_email = new RegExp(/^(("[\w-\s]+")|([\w-]+(?:\.[\w-]+)*)|("[\w-\s]+")([\w-]+(?:\.[\w-]+)*))(@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$)|(@\[?((25[0-5]\.|2[0-4][0-9]\.|1[0-9]{2}\.|[0-9]{1,2}\.))((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\.){2}(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\]?$)/i);
        
        if(!pattern_email.test(this.state.email)){
            isValid = false;
            this.state.email_err= "PLease Enter valid email"; 
        }
    } 
    
    if(!this.state.phone)    
    {
        isValid = false;
        this.state.phone_err = "Please Enter phone";
    }
    
    if(this.state.phone)
    {
        var pattern_phone = new RegExp( /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/);
        
        if(!pattern_phone.test(this.state.phone)){
            isValid = false;
            this.state.phone_err = "Please Enter valid phone number";
        }
    }
    return isValid;
}

render(){
    return (
        <div className="container">
        <div className="text-danger" id="errors"><h3>{ this.state.message }</h3></div>
        <div className="col-md-6 offset-3">
        <div className="card-header"> Add Contact</div>
        <div className="card-body">
        <form onSubmit={this.handleSubmit}>
        <div className="form-group">
        <label>FullName</label>
        <input className="form-control" name="fullname" onChange={this.handleChange1} value={this.state.fullname } type="text" id="fullname" />
        </div>
        <div className="form-group">
        <label>Email</label>
        <input className="form-control" name="email" onChange={this.handleChange2} value={this.state.email } type="text" id="email" />
        </div>
        <div className="form-group">
        <label>Phone</label>
        <input className="form-control" name="phone" onChange={this.handleChange3} value={this.state.phone } type="text" id="phone" />
        </div>
        <div style={{ padding:'10px' }}>
        <input type="submit" className="btn btn-success" value="Submit" />
        </div>
        </form>
        </div>
        </div>
        </div>
        )
    }
}
export default AddContact;