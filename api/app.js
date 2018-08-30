const express = require('express');

const customers = require('../bl/customer/customers')

/**
 * Create Express server.
 */
const app = express();

app.post('/customers/register', customers.registerCustomer);

module.exports = app;


