const express = require('express');

const customers = require('../bl/customer/customers');
const suppliers = require('../bl/supplier/suppliers');
const recommendations = require('../bl/recommendations/recommendations');
const commodities = require('../bl/commodities/commodities');

/**
 * Create Express server.
 */
const app = express();

app.get('/suppliers', suppliers.getAllSuppliers);
app.get('/suppliers/:id', suppliers.getSupplierByID);
app.put('/suppliers/:id', suppliers.updateSupplierByID);
app.post('/supplier/register', suppliers.registerSupplier);

app.get('/customers/:id', customers.getCustomerByID);
app.put('/customers/:id', customers.updateCustomerByID);
app.post('/customers/register', customers.registerCustomer);

app.get('/customers/:userID/recommendationRequests', recommendations.getAllUserRecommendationRequest);
app.post('/customers/:userID/recommendationRequests', recommendations.createUserRecommencationRequest);
app.put('/customers/:userID/recommendationRequests/:recommendationID', recommendations.updateUserRecommendationRequest);
app.delete('/customers/:userID/recommendationRequests/:recommendationID', recommendations.deleteUserRecommendationRequest);

app.post('/commodities/supply', commodities.createSuppliedCommodity);
app.get('/commodities/supply/:categoryID', commodities.getAllSuppliedCommoditiesByCategory);
app.get('/commodities/supply/:commodityID', commodities.getSuppliedCommodityByID);
app.put('/commodities/supply/:commodityID', commodities.updateSuppliedCommodity)

app.post('/commodities/demand', commodities.createDemandedCommodity);
app.get('/commodities/demand/:categoryID', commodities.getAllDemandedCommoditiesByCategory);
app.get('/commodities/demand/:commodityID', commodities.getDemandedCommodityByID);
app.put('/commodities/demand/:commodityID', commodities.updateDemandedCommodity)


module.exports = app;


