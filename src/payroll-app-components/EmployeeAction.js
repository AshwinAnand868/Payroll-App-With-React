import React, { Component } from 'react'; 

import {Container, Button} from 'react-bootstrap'; 

import EmployeeList from './GetEmployee';
import AddEmployee from './AddEmployee';
import axios from 'axios'; 
import getAPIUrl from '../utils/getAPIUrl';
const apiUrl = getAPIUrl();

class PayrollApp extends Component {


    constructor(props){
        super(props);

        this.state = {
            employeeData: {},
            response: {},
            error: null,
            renderAddEmployeeView: false,
            renderEditEmployeeView: false,
            renderEmployeeListView: true
        }

        this.onFormSubmit = this.onFormSubmit.bind(this);

    }

    onCreate(){
        this.setState({
            employeeData: {},
            renderAddEmployeeView: true,
            renderEditEmployeeView: false,
            renderEmployeeListView: false
        });
    }


    onDetails(){
        this.setState({
            renderEmployeeListView: true,
            renderAddEmployeeView: false,
            renderEditEmployeeView: false
        });
    }

    onFormSubmit(data) {
        // condition to process when the current Edit Employee view is submitted
        if(this.state.renderEditEmployeeView){
            axios.put(apiUrl + 'editEmployee', data).then(
                result => {
                    this.setState({
                        response: result,
                        renderAddEmployeeView: false,
                        renderEditEmployeeView: false,
                        renderEmployeeListView: true
                    });
                }
            )
        }
        else {
            axios.post(apiUrl + 'newEmployee', data).then(
                result => {
                    alert(result.data);
                    this.setState({
                        response: result,
                        renderAddEmployeeView: false,
                        renderEditEmployeeView: false,
                        renderEmployeeListView: true
                    });
                }
            )
        }
    }

    editEmployee = (emp_id) => {
        
        axios.get(apiUrl + "getEmployee/" + emp_id).then(
            // when the promise is fulfilled
            result => {
                this.setState({
                    renderEditEmployeeView: true,
                    renderEmployeeListView: false,
                    employeeData: result.data
                });
            },
            // when the promise is rejected
            error => {
                this.setState({error: error});
            }
        )
    }

    render(){
        return(
            <div>
                <Container>
                    <h1 style={{ textAlign: 'center'}}>Employee Information</h1>
                    <hr />
                    {(!this.state.renderEmployeeListView && <Button variant="primary" onClick={() => this.onDetails()}>Employees Details</Button>) || (!this.state.renderAddEmployeeView && <Button variant="primary" onClick={() => this.onCreate()}>Add Employee</Button>)}
                    <div style={{ marginBottom: '30px'}}></div>
                    {!(this.state.renderAddEmployeeView || this.state.renderEditEmployeeView) ? <EmployeeList editEmployee={this.editEmployee} /> :<AddEmployee onFormSubmit={this.onFormSubmit} employee={this.state.employeeData} />}
                   
                </Container>
            </div>
        );
    }
}

export default PayrollApp;