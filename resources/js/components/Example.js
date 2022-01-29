import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router , Routes , Route } from 'react-router-dom';
import Nav from './Nav';
import Contacts from './Contacts';
import AddContact from './AddContact';

function Example() {
    return (
        <Router>
        <Nav/>
        <>
        <Routes>
        <Route  path="/" exact element={<Contacts />} ></Route>
        <Route  path="/addContact" element={<AddContact />} ></Route>
        </Routes>
        </>
        </Router>
        );
    }
    
    export default Example;
    
    if (document.getElementById('example')) {
        ReactDOM.render(<Example />, document.getElementById('example'));
    }
    