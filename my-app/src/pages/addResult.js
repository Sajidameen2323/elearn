import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.css';
import Button from 'react-bootstrap/Button';
import {
  Navbar, Nav, NavItem, NavDropdown, MenuItem, Form, FormControl, Col, Row, ToggleButtonGroup
  , ToggleButton
} from 'react-bootstrap';
import Axios from 'axios';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  NavLink
} from "react-router-dom";



class AddResult extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        candidateId: null,
        knowledgeArea: null,
        level: null,
        score: null,
        assessor: null,
        overall: null,
        completed: null
      }
    }
    addOverall(e) {
      this.setState({
        overall: e.target.value
      })
    };
    addCandidateId(e) {
      this.setState({
        candidateId: e.target.value
      })
    };
    addKnowledgeArea(e) {
      this.setState({
        knowledgeArea: e.target.value
      })
    };
    addLevel(e) {
      this.setState({
        level: e.target.value
      })
    }
    addScore(e) {
      this.setState({
        score: e.target.value
      })
    }
    addAssessor(e) {
      this.setState({
        assessor: e.target.value
      })
    }
    addCompleted(e) {
      this.setState({
        completed: e.target.value
      })
    }
    submitData(){
      let tempArr = Object.keys(this.state);
      let chk = tempArr.every((el)=>{
        return this.state[el] !== null
      });
      if(chk){
        Axios.post('http://localhost:3001/api/addresult',{candidateId:this.state.candidateId,knowledgeArea:this.state.knowledgeArea,
      level:this.state.level,score:this.state.score,assessor:this.state.assessor,overall:this.state.overall,
    completed:this.state.completed}).then((res)=>{
      
    })
      }
    }
  
    render() {
      return (
        <div>
          <Form className="ml-5 mt-5">
            <Form.Group controlId="formBasicCandidateId" as={Col} md="4">
              <Form.Label className="font-weight-bold">Candidate Id</Form.Label>
              <Form.Control type="number" placeholder="Enter Candidate Id" onChange={this.addCandidateId.bind(this)} />
            </Form.Group>
            <Form.Group controlId="formBasicKnowledgeArea" as={Col} md="4">
              <Form.Label className="font-weight-bold">Knowledge Area</Form.Label>
              <Form.Control type="text" placeholder="Enter Knowledge Area" onChange={this.addKnowledgeArea.bind(this)} />
            </Form.Group>
            <Form.Group controlId="formBasicLevel" as={Col} md="4">
              <Form.Label className="font-weight-bold">Level</Form.Label>
              <Form.Control type="number" placeholder="Enter Level" onChange={this.addLevel.bind(this)} />
            </Form.Group>
            <Form.Group controlId="formBasicScore" as={Col} md="4">
              <Form.Label className="font-weight-bold">Score</Form.Label>
              <Form.Control type="number" placeholder="Enter Score" onChange={this.addScore.bind(this)} />
            </Form.Group>
            <Form.Group controlId="formBasicAssessor" as={Col} md="4">
              <Form.Label className="font-weight-bold">Assessor</Form.Label>
              <Form.Control type="text" placeholder="Enter Assessor Name" onChange={this.addAssessor.bind(this)} />
            </Form.Group>
  
            <Form.Group>
              <Form.Label className="font-weight-bold ml-3">Overall</Form.Label>
              <ToggleButtonGroup type="radio" size="sm" bsPrefix=" ml-3 btn-sm" name="overall">
                <ToggleButton value="pass" checked={true} name="overall" onChange={this.addOverall.bind(this)}
                  variant='outline-info'>Pass</ToggleButton>
                <ToggleButton value="fail" name="overall" variant='outline-info' onChange={this.addOverall.bind(this)}>Fail</ToggleButton>
              </ToggleButtonGroup>
            </Form.Group>
  
            <Form.Group controlId="formBasicCompleted" as={Col} md="4">
              <Form.Label className="font-weight-bold">Completed</Form.Label>
              <Form.Control type="date" placeholder="Submitted Date" onChange={this.addCompleted.bind(this)} />
            </Form.Group>
  
            <Button variant="outline-dark" type="submit" className="ml-3" onClick={this.submitData.bind(this)}>
              Submit
    </Button>
          </Form>
        </div>
      )
    }
  }

  export default AddResult;