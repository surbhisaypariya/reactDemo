import React, { Component } from 'react';


class TableRow extends Component {
    constructor(props) {
        super(props);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    handleSubmit(event) {
        // event.preventDefault();
        // let uri = "http://127.0.0.1:8000//api/contacts/";
        // axios.delete(uri);
        // browserHistory.push('/display-item');
    }
    render() {
        return (
            <tr>
            <td>
            {this.props.obj.fullname}
            </td>
            <td>
            {this.props.obj.email}
            </td>
            <td>
            {this.props.obj.phone}
            </td>
            <td>
            <form onSubmit={this.handleSubmit}>
            <Link to={"edit/"+this.props.obj.id} className="btn btn-primary">Edit</Link>
            <input type="submit" value="Delete" className="btn btn-danger"/>
            </form>
            </td>
            </tr>
            );
        }
    }
    
    
    export default TableRow;