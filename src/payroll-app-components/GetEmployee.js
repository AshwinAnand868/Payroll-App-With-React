import React from 'react';

import { Table, Button } from 'react-bootstrap';

import axios from 'axios';
import getAPIUrl from '../utils/getAPIUrl';
const apiUrl = getAPIUrl();

class EmployeeList extends React.Component {
    
    constructor(props){
        super(props);

        this.state = {
            error: null,
            employees: [],
            response: {}
        };
    }

    componentDidMount(){
        axios.get(apiUrl + "/getEmployees").then(response => response.data).then(
            result => {
                this.setState({
                    employees: result
                });
            },
            error => {
                this.setState({
                    error: error
                });
            }
        )
    }


    deleteEmployee(emp_id){

        const  employees = this.state.employees;

        axios.delete(apiUrl + 'deleteEmployee/' + emp_id).then(
            result => {
                alert(result.data);
                this.setState({
                    response: result,
                    employees: employees.filter(employee => employee.emp_id !== emp_id)
                });
            }
        );
    }
        
    render(){
        const {error, employees} = this.state;

        if(error) {
            return (
                <div>
                    Error: {error.message}
                </div>
            );
        }

        return (
            <div>
                <Table className="table table-striped">
                    <thead className='btn-success'>
                        <tr>
                            <th>Employee Name</th>
                            <th>Email</th>
                            <th>Gender</th>
                            <th>Dependants</th>
                            <th>Additions</th>
                            <th>CPP</th>
                            <th>EI</th>
                            <th>Income Tax</th>
                            <th>Gross Salary</th>
                        </tr>
                    </thead>

                    <tbody>
                        {employees.map(employee => (
                            <tr key={employee.emp_id}>
                                <td>{employee.emp_name}</td>
                                <td>{employee.emp_email}</td>
                                <td>{employee.emp_gender}</td>
                                <td>{employee.noOfDependants}</td>
                                <td>{employee.Additions}</td>
                                <td>{employee.CPP}</td>
                                <td>{employee.EI}</td>
                                <td>{employee.ITex}</td>
                                <td>{employee.FinalSalary}</td>
                                <td>
                                    <Button variant="info" onClick={() => this.props.editEmployee(employee.emp_id)}>
                                        Edit
                                    </Button>
                                </td>
                                <td>
                                    <Button variant="danger" onClick= {() => this.deleteEmployee(employee.emp_id)}>Delete</Button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </Table>
            </div>
        );
    }


}


export default EmployeeList;