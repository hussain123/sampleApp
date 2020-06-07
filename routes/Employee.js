/* eslint-disable max-len */
const routes = require('express').Router();
const mssql = require('mssql');

routes.get('/', (req, res) => {
  const request = new mssql.Request();
  request.query('Select * from  Employee')
    .then((result) => {
      // eslint-disable-next-line no-console
    //   /console.log(result);
      res.send({
        data: result.recordset,
        columns: [
          {
            field: 'ID',
            label: 'ID',
            width: '40',
            numeric: true,
          },
          {
            field: 'FirstName',
            label: 'First Name',
          },
          {
            field: 'LastName',
            label: 'Last Name',
          },
          {
            field: 'Date',
            label: 'Date',
            centered: true,
          },
          {
            field: 'Gender',
            label: 'Gender',
          },
        ],
        isBordered: true,
      });
    });
});

module.exports = routes;
