const express = require('express');
const bodyParser = require('body-parser');
const config = require('config');
const consign = require('consign');

module.exports = () => {
  const app = express()
    .set('port', process.env.PORT || config.get('server.port'))
    .use(bodyParser.json());

  consign({ cwd: 'src' })
    .then('Application')
    .then('Domain')
    .then('Infrastructure')
    .into(app);

  consign({ cwd: 'config' })
    .then('database')
    .into(app);

  return app;
}
