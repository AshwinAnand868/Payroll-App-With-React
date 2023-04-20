import React from 'react'; 
import {Row, Form, Button} from 'react-bootstrap';

class AddEmployee extends React.Component {
    
    constructor(props){
        super(props);

        this.initialState = {
            emp_id: "", 
            emp_name: "",
            emp_email: "",
            emp_gender: "",
            noOfDependants: "",
            Additions: "",
            CPP: "",
            EI: "",
            ITex: "",
            FinalSalary: ""
        }

        if(props.employee.emp_id){
            this.state = props.employee;
        } else {
            this.state = this.initialState;
        }

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }


    handleChange(event){
        const name = event.target.name;
        const value = event.target.value;

        this.setState({
            [name]: value
        });
    }

    handleSubmit(event){

        event.preventDefault();
        this.props.onFormSubmit(this.state);
        this.setState(this.initialState);

    }

    render(){

       let pageTitle;
       let actionStatus;
       
       if(this.state.emp_id){
        pageTitle = <h2>Edit Employee</h2>
        actionStatus = <b>Update</b>
       } else {
        pageTitle = <h2>Add Employee</h2>
        actionStatus = <b>Save</b>
       }


       return (
        <div>
            {pageTitle}
            <Row className="row-style">
                
                    <Form className="form" onSubmit={this.handleSubmit}>
                        <Form.Group controlId="emp_name">
                            <Form.Label>Name</Form.Label>
                            <Form.Control 
                             type = "text"
                             name = "emp_name"
                             value = {this.state.emp_name} 
                             onChange={this.handleChange} />
                        </Form.Group>
                        <Form.Group controlId="emp_email">
                            <Form.Label>Email</Form.Label>
                            <Form.Control 
                             type = "email"
                             name = "emp_email"
                             value = {this.state.emp_email} 
                             onChange={this.handleChange} />
                        </Form.Group>
                        <Form.Group controlId="emp_gender">
                            <Form.Label>Gender</Form.Label>
                            <Form.Control 
                             type = "text"
                             name = "emp_gender"
                             value = {this.state.emp_gender}
                             onChange={this.handleChange} />
                        </Form.Group>
                        <Form.Group controlId="noOfDependants">
                            <Form.Label>Dependents</Form.Label>
                            <Form.Control 
                             type = "number"
                             name = "noOfDependants"
                             value = {this.state.noOfDependants}
                             onChange={this.handleChange} />
                        </Form.Group>
                        <Form.Group controlId="Additions">
                            <Form.Label>Additions</Form.Label>
                            <Form.Control 
                             type="number"
                             name="Additions"
                             value={this.state.Additions}
                             onChange={this.handleChange}
                             />
                        </Form.Group>
                        <Form.Group controlId="CPP">
                            <Form.Label>CPP</Form.Label>
                            <Form.Control 
                             type="text"
                             name="CPP"
                             value={this.state.CPP}
                             onChange={this.handleChange} />
                        </Form.Group>
                        <Form.Group controlId="EI">
                            <Form.Label>EI</Form.Label>
                            <Form.Control
                             type="text"
                             name="EI"
                             value={this.state.EI}
                             onChange={this.handleChange} />
                        </Form.Group>
                        <Form.Group controlId="ITax">
                            <Form.Label>Income Tax</Form.Label>
                            <Form.Control 
                              type="text"
                              name="ITex"
                              value={this.state.ITex}
                              onChange={this.handleChange} />  
                        </Form.Group>
                        <Form.Group controlId="GrossSalary">
                            <Form.Label>Gross Salary</Form.Label>
                            <Form.Control 
                             type="text"
                             name="FinalSalary"
                             value={this.state.FinalSalary}
                             onChange={this.handleChange} />
                        </Form.Group>
                        <Form.Group>
                            <Form.Control 
                             type="hidden" 
                             value={this.state.emp_id} />
                             <div class="save-or-update-btn-div">
                                <Button className="save-or-update-btn" variant="success" type="submit">{actionStatus}</Button>
                             </div>
                        </Form.Group>
                    </Form>
                
            </Row>
        </div>
       );

    }
}

export default AddEmployee;