const router = require('express').Router();

module.exports = app => {
  const controller = app.Infrastructure.user.http.controllers.user;

  router.get('/users', controller.index);
  app.use('/api/v1', router);
}
