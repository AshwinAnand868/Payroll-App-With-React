using APIForReactApp.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using WebGrease;

namespace APIForReactApp.Controllers
{
    [RoutePrefix("Api/Employee")]
    public class EmployeeController : ApiController
    {
        TSQL2012Entities entity = new TSQL2012Entities();

        [HttpGet]
        [Route("getEmployees")]
        public IQueryable<tblEmployee> GetEmployee()
        {
            try
            {
                return entity.tblEmployees;
            }
            catch (Exception ex)
            {
                throw ex;
            }
        }

        [HttpGet]
        [Route("getEmployee/{id}")]
        public IHttpActionResult GetEmployeeById(int id)
        {
            
            tblEmployee employee;
            try
            {
                employee = entity.tblEmployees.Find(id);

                if (employee == null)
                {
                    return NotFound();
                }
            }
            catch(Exception ex)
            {
                throw ex;
            }
           
            return Ok(employee);
        }

        [HttpPost]
        [Route("newEmployee")]
        public IHttpActionResult PostEmployee(tblEmployee employee)
        {
            string message = "";

            if (employee != null)
            {
                try
                {
                    entity.tblEmployees.Add(employee);
                    int entriesAffected = entity.SaveChanges();

                    if(entriesAffected > 0)
                    {
                        message = "Employee has been successfully added";
                    }
                    else
                    {
                        message = "Failed to add the given employee";
                    }
                }
                catch(Exception ex)
                {
                    throw ex;
                }
            }

            return Ok(message);
        }

        [HttpPut]
        [Route("editEmployee")]
        public IHttpActionResult PutEmployee(tblEmployee employee)
        {
            string message = "";

            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            try
            {
                tblEmployee updatedEmployee = entity.tblEmployees.Find(employee.emp_id);

                if(updatedEmployee != null)
                {
                    updatedEmployee.emp_name = employee.emp_name;
                    updatedEmployee.emp_email = employee.emp_email;
                    updatedEmployee.emp_password = employee.emp_password;
                    updatedEmployee.emp_gender = employee.emp_gender;
                    updatedEmployee.noOfDependants = employee.noOfDependants;
                    updatedEmployee.Additions = employee.Additions;
                    updatedEmployee.CPP = employee.CPP;
                    updatedEmployee.EI = employee.EI;
                    updatedEmployee.ITex = employee.ITex;
                    updatedEmployee.FinalSalary = employee.FinalSalary;
                }

               int entriesAffected = entity.SaveChanges();

               if(entriesAffected > 0)
                {
                    message = "Employee has been successfully updated";
                }
                else
                {
                    message = "Failed to update the employee information";
                }
            }
            catch(Exception ex)
            {
                throw ex;
            }

            return Ok(message);
        }

        [HttpDelete]
        [Route("deleteEmployee/{id}")]
        public IHttpActionResult DeleteEmployee(int id)
        {
            string message = "";
            tblEmployee employee = entity.tblEmployees.Find(id);
            if (employee == null)
            {
                return NotFound();
            }

            entity.tblEmployees.Remove(employee);
            int entriesAffected = entity.SaveChanges();

            if(entriesAffected > 0)
            {
                message = "Employee has been successfully deleted";
            }
            else
            {
                message = "Failed to delete the given employee information";
            }
            return Ok(message);       
        }
    }
}
