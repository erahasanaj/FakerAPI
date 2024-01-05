const express = require('express');
const { faker } = require('@faker-js/faker');
const app = express();
const port = 3000;

// Function to create a user
const createUser = () => {
  return {
    name: faker.name.firstName(),
    email: faker.internet.email(),
    age: faker.datatype.number({ min: 18, max: 65 }),
    address: faker.address.streetAddress(),
  };
};

// Function to create a company
const createCompany = () => {
  return {
    name: faker.company.companyName(),
    catchPhrase: faker.company.catchPhrase(),
    bs: faker.company.bs(),
  };
};

// API routes
app.get('/api/users/new', (req, res) => {
  res.json(createUser());
});

app.get('/api/companies/new', (req, res) => {
  res.json(createCompany());
});

app.get('/api/user/company', (req, res) => {
  res.json({ user: createUser(), company: createCompany() });
});

// Start the server
app.listen(port, () => {
  console.log(` Server listening on port ${port}`) ;
});