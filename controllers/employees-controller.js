const dbConnection = require('./../common/db-connection');
const employeeRepository = require('./../repositories/employees-repository');

const getAllEmployees = async (req, res) => {
    const results = await employeeRepository.getAllEmployees(); 
    res.send(results); 
}

const getEmployeeByID = async (req, res) => {
    const id = req.params.id;
    const result = await employeeRepository.getEmployeeByID(id); 
    res.send(result);  
}

const insertEmployee = async (req, res) => {
    // console.log(req.body);
    const id = await employeeRepository.insertEmployee(req.body);
    // console.log(result);
    res.send({id}); 
}

const updateEmployee = async (req, res) => {
    const result = await employeeRepository.updateEmployee(req.body, req.params.id); 
    res.send(result); 
}

const deleteEmployee = async (req, res) => {
    const result = await employeeRepository.deleteEmployee(req.params.id); 
    res.send(result); 
}

module.exports = {  getAllEmployees, 
                    getEmployeeByID, 
                    insertEmployee, 
                    updateEmployee, 
                    deleteEmployee }; 


                



                    
