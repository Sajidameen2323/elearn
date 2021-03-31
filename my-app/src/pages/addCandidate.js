import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.css';
import Button from 'react-bootstrap/Button';
import {
  Navbar, Nav, NavItem, NavDropdown, MenuItem, Form, FormControl, Col, Row, ToggleButtonGroup
  , ToggleButton, Alert
} from 'react-bootstrap';
import Axios from 'axios';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  NavLink
} from "react-router-dom";

class Insert extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        firstname: '',
        lastname: '',
        email: '',
        industry: '',
        selectedFile: null
  
      }
    };
    addFisrtName(e) {
      this.setState({
        firstname: e.target.value
      })
    }
    addLastName(e) {
      this.setState({
        lastname: e.target.value
      })
    }
    addEmail(e) {
      this.setState({
        email: e.target.value
      })
    }
    addIndustry(e) {
      this.setState({
        industry: e.target.value
      })
    }
    addFile(e) {
      console.log(e.target.files[0].type);
      console.log(e.target.files);
      const types = ['image/png', 'image/jpeg', 'image/gif'];
      let fileType = e.target.files[0].type;
      if (types.some((el) => { return el === fileType })) {
        this.setState({
          selectedFile: e.target.files[0],
          loaded: 0
        })
      } else {
        alert('choose a proper image');
      }
  
  
    }
    submitData() {
      const data = new FormData();
      if (this.state.firstname !== '' && this.state.lastname !== ''
        && this.state.email !== '' && this.state.industry && this.state.selectedFile !== null) {
        data.append('file', this.state.selectedFile);
        Axios.post('http://localhost:3001/api/insert', {
          firstname: this.state.firstname, lastname: this.state.lastname,
          email: this.state.email, industry: this.state.industry, profilepic: this.state.selectedFile.name
        }).then(() => {
          alert('success');
        });
  
        Axios.post("http://localhost:3001/api/upload", data, {
  
        }).then((res) => {
          console.log(res.statusText)
        })
      } else{
        
      }
    }
  
    render() {
      return (
        <div>
          <div className="container ">
            <Form className="ml-5 mt-5">
  
              <Form.Group controlId="formBasicFirstName" as={Col} md="4">
                <Form.Label className="font-weight-bold">First Name</Form.Label>
                <Form.Control type="text" placeholder="Enter First Name" onChange={this.addFisrtName.bind(this)} />
              </Form.Group>
  
              <Form.Group controlId="formBasicLastName" as={Col} md="4">
                <Form.Label className="font-weight-bold">Last Name</Form.Label>
                <Form.Control type="text" placeholder="Enter Last Name" onChange={this.addLastName.bind(this)} />
              </Form.Group>
  
              <Form.Group controlId="formBasicEmail" as={Col} md="4">
                <Form.Label className="font-weight-bold">Email address</Form.Label>
                <Form.Control type="email" placeholder="Enter email" onChange={this.addEmail.bind(this)} />
                <Form.Text className="text-muted">
                  We'll never share your email with anyone else.
      </Form.Text>
              </Form.Group>
  
              <Form.Group controlId="formBasicIndustry" as={Col} md="4">
                <Form.Label className="font-weight-bold">Industry</Form.Label>
                <Form.Control type="text" placeholder="Enter Industry" onChange={this.addIndustry.bind(this)} />
              </Form.Group>
  
              <Form.Group as={Col} md="4">
                <Form.File id="exampleFormControlFile1" label="Profile pic" className="font-weight-bold" onChange={this.addFile.bind(this)} />
              </Form.Group>
  
              <Button variant="outline-dark" type="submit" className="ml-3" onClick={this.submitData.bind(this)}>
                Submit
    </Button>
            </Form>
          </div>
        </div>
  
      )
    }
  };

  export default Insert;