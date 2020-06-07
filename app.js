const debug = require('debug')('app');
const chalk = require('chalk');
const express = require('express');
const cors = require('cors');
const path = require('path');
const morgan = require('morgan');
const sql = require('mssql');

const employeeRoutes = require('./routes/Employee');

const app = express();
const port = process.env.PORT || 3000;

const config = {
  user: 'hussain',
  password: 'Karachi786&*^',
  server: 'sampleserver256.database.windows.net',
  database: 'SampleDatabase',
  options: {
    encrpt: true,
  },
};
sql.connect(config).catch((err) => debug(err));
app.use(morgan('combined'));
app.use(cors());
app.use('/', employeeRoutes);
app.get('/home', (req, res) => {
  res.sendFile(path.join(__dirname, 'views/index.html'));
});


app.listen(port, () => {
  debug(`Listening to port ${chalk.red(port)}`);
});
