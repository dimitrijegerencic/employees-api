const { application } = require('express');
const express = require('express');

const employeesRouting = require('./routing/employees-routing');

/** Da napisemo da nasa app koristi ovaj ruter */

const app = express();

app.use('/employees', employeesRouting);

app.listen(3000, () => {
    console.log('Server is listening at port 3000');
});