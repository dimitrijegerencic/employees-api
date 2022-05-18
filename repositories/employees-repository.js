const dbConnection = require('./../common/db-connection'); 

const getAllEmployees = async () => {
    const [results, metadata] = await dbConnection.query(`SELECT * FROM employee`); 
    return results; 
} 

const getEmployeeByID = async (id) => {
    const [results, metadata] = await dbConnection.query(`SELECT * FROM employee WHERE id = ?`, 
                                                            {
                                                                replacements: [ id ]
                                                            });
    return results[0]; 
}

const insertEmployee = async(employee) => {
    const [results, metadata] = await dbConnection.query(`INSERT INTO employee 
                                                            (name, about, birthdate, updated, created) 
                                                            VALUES (?, ?, ?, now(), now())`, 
                                                            {
                                                                replacements: [ employee.name, 
                                                                                employee.about,
                                                                                employee.birthdate]
                                                            })
    return results;
}

const updateEmployee = async (employee, id) => {
    const [results, metadata] = await dbConnection.query(`  UPDATE employee
                                                            SET name = ?, 
                                                            about = ?, 
                                                            birthdate = ?, 
                                                            updated = now() 
                                                            WHERE id = ?`, 
                                                            {
                                                                replacements: [
                                                                    employee.name, 
                                                                    employee.about, 
                                                                    employee.birthdate, 
                                                                    id
                                                                ]
                                                            })
    return results; 
}

const deleteEmployee = async (id) => {
    const [results, metadata] = await dbConnection.query(`DELETE FROM employee WHERE id = ?`, 
                                                            {
                                                                replacements: [
                                                                    id
                                                                ]
                                                            })
    return results; 
}

module.exports = {  getAllEmployees, 
                    getEmployeeByID, 
                    insertEmployee, 
                    updateEmployee, 
                    deleteEmployee }
